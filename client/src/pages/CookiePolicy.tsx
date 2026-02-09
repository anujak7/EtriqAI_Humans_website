export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f9f5ff_100%)] text-slate-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <a href="/" className="text-sm font-medium text-violet-700 hover:text-violet-800">
          ← Back to Home
        </a>
        <h1 className="text-4xl font-bold font-display mt-4 mb-6">Cookie Policy</h1>
        <p className="text-sm text-slate-500 mb-8">Effective date: February 9, 2026</p>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">1. What Are Cookies</h2>
            <p>
              Cookies are small files stored on your device to help websites remember preferences,
              improve performance, and understand usage behavior.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Types of Cookies We Use</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Essential cookies for core website functionality and security.</li>
              <li>Analytics cookies for understanding page usage and improving experience.</li>
              <li>Preference cookies for remembering language or interaction choices.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Why We Use Cookies</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To maintain stable and secure website sessions.</li>
              <li>To measure performance and optimize content structure.</li>
              <li>To improve user journey across key business forms and pages.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Managing Cookies</h2>
            <p>
              You can disable or delete cookies from browser settings. Some website features may
              not function properly if essential cookies are blocked.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Contact</h2>
            <p>
              For cookie-related queries, contact{" "}
              <a className="text-violet-700 hover:text-violet-800" href="mailto:info@etriqai.com">
                info@etriqai.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
