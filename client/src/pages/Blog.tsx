import { useMemo, useState } from "react";
import { blogPosts, blogCategories } from "@/pages/blogData";

export default function Blog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof blogCategories)[number]>("All");

  const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const categoryMatch = category === "All" || post.category === category;
      const q = query.trim().toLowerCase();
      const textMatch =
        q.length === 0 ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.author.toLowerCase().includes(q);
      return categoryMatch && textMatch;
    });
  }, [query, category]);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f9f5ff_55%,#ffffff_100%)] text-slate-900">
      <div className="container mx-auto px-4 py-14 md:py-16">
        <a href="/" className="text-sm font-medium text-violet-700 hover:text-violet-800">
          ← Back to Home
        </a>

        <section className="mt-6 rounded-3xl border border-violet-200 bg-white p-8 md:p-10 shadow-[0_30px_60px_-40px_rgba(124,58,237,0.55)]">
          <p className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 border border-violet-200 text-violet-700 text-sm font-medium mb-5">
            EtriqAI Insights
          </p>
          <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-4">
            AI, Voice, and
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-fuchsia-600">
              {" "}Enterprise Execution
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Read practical insights from our product, engineering, and solutions teams on building
            production-ready digital human systems.
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-violet-200 bg-white p-5 md:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles, topics, or authors"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-violet-500"
            />
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => setCategory(chip)}
                  className={`px-3 h-10 rounded-full text-sm font-medium border transition-colors ${
                    category === chip
                      ? "bg-violet-700 text-white border-violet-700"
                      : "bg-white text-slate-700 border-violet-200 hover:border-violet-400 hover:text-violet-700"
                  }`}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-violet-200 bg-[linear-gradient(150deg,#ffffff_0%,#faf5ff_100%)] p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.14em] text-violet-700 font-semibold mb-3">Featured Post</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-3">
            {featuredPost.title}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-5 max-w-3xl">{featuredPost.excerpt}</p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 mb-5">
            <span>{featuredPost.author}</span>
            <span>•</span>
            <span>{featuredPost.date}</span>
            <span>•</span>
            <span>{featuredPost.readTime}</span>
          </div>
          <a
            href={`/blog/${featuredPost.slug}`}
            className="inline-flex items-center rounded-xl bg-violet-700 hover:bg-violet-800 text-white px-5 h-11 font-semibold transition-colors"
          >
            Read Featured Article
          </a>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-5">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPosts.map((post) => (
              <article key={post.slug} className="rounded-2xl border border-violet-200 bg-white p-5">
                <p className="text-xs font-semibold text-violet-700 bg-violet-100 border border-violet-200 w-fit px-2.5 py-1 rounded-full mb-3">
                  {post.category}
                </p>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{post.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="text-xs text-slate-500 mb-4">
                  {post.author} • {post.date} • {post.readTime}
                </div>
                <a href={`/blog/${post.slug}`} className="text-violet-700 hover:text-violet-800 font-semibold text-sm">
                  Read More →
                </a>
              </article>
            ))}
          </div>
          {filteredPosts.length === 0 ? (
            <p className="mt-6 text-slate-600">No posts found for this search/filter.</p>
          ) : null}
        </section>

        <section className="mt-10 rounded-2xl border border-violet-200 bg-white p-6 md:p-7">
          <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">Subscribe to Insights</h3>
          <p className="text-slate-600 mb-4">
            Get product updates, implementation playbooks, and enterprise AI insights in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your work email"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-violet-500"
            />
            <button
              type="button"
              className="rounded-lg bg-violet-700 hover:bg-violet-800 text-white px-5 py-3 font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
