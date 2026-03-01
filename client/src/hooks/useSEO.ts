import { useEffect } from "react";

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  robots?: string;
  jsonLd?: object | object[];
}

const SITE_NAME = "EtriqAI";
const BASE_URL = "https://www.etriqai.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

function setMeta(name: string, content: string, property = false) {
  const attr = property ? "property" : "name";
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id: string, data: object | object[]) {
  let el = document.querySelector<HTMLScriptElement>(`script[data-seo-id="${id}"]`);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.setAttribute("data-seo-id", id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(Array.isArray(data) ? data : [data]);
}

export function useSEO({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  robots = "index, follow",
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    // Title
    document.title = `${title} | ${SITE_NAME}`;

    // Basic meta
    setMeta("description", description);
    setMeta("robots", robots);

    // Canonical
    const canonicalHref = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
    setLink("canonical", canonicalHref);

    // Open Graph
    setMeta("og:site_name", SITE_NAME, true);
    setMeta("og:type", ogType, true);
    setMeta("og:url", canonicalHref, true);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:image", ogImage, true);
    setMeta("og:image:width", "1200", true);
    setMeta("og:image:height", "630", true);
    setMeta("og:locale", "en_IN", true);

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:site", "@EtriqAI");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);

    // JSON-LD
    if (jsonLd) {
      upsertJsonLd("page-schema", jsonLd);
    }
  }, [title, description, canonical, ogType, ogImage, robots, jsonLd]);
}
