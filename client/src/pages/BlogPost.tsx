import { useMemo } from "react";
import { useRoute } from "wouter";
import { blogPosts } from "@/pages/blogData";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  const post = useMemo(() => blogPosts.find((item) => item.slug === slug), [slug]);
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  }, [post]);

  if (!post) {
    return (
      <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f9f5ff_100%)] text-slate-900">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <a href="/blog" className="text-sm font-medium text-violet-700 hover:text-violet-800">
            ← Back to Blog
          </a>
          <h1 className="text-3xl font-bold mt-4">Post Not Found</h1>
          <p className="text-slate-600 mt-2">The article you are looking for does not exist.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f9f5ff_55%,#ffffff_100%)] text-slate-900">
      <div className="container mx-auto px-4 py-14 md:py-16 max-w-4xl">
        <a href="/blog" className="text-sm font-medium text-violet-700 hover:text-violet-800">
          ← Back to Blog
        </a>

        <article className="mt-6 rounded-3xl border border-violet-200 bg-white p-8 md:p-10">
          <p className="text-xs font-semibold text-violet-700 bg-violet-100 border border-violet-200 w-fit px-2.5 py-1 rounded-full mb-4">
            {post.category}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-4">{post.title}</h1>
          <div className="text-sm text-slate-500 mb-8">
            {post.author} • {post.date} • {post.readTime}
          </div>
          <div className="space-y-5 text-slate-700 leading-relaxed text-lg">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>

        <section className="mt-8 rounded-2xl border border-violet-200 bg-white p-6">
          <h2 className="text-2xl font-bold font-display mb-4">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedPosts.map((item) => (
              <a key={item.slug} href={`/blog/${item.slug}`} className="rounded-xl border border-violet-200 p-4 bg-violet-50/50 hover:bg-violet-50 transition-colors">
                <p className="text-xs font-semibold text-violet-700 mb-2">{item.category}</p>
                <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.readTime}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
