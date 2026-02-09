export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f9f5ff_100%)] text-slate-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <a href="/" className="text-sm font-medium text-violet-700 hover:text-violet-800">
          ← Back to Home
        </a>
        <h1 className="text-4xl font-bold font-display mt-4 mb-6">Terms & Conditions</h1>
        <p className="text-sm text-slate-500 mb-8">Effective date: February 9, 2026</p>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using this website, you agree to these Terms & Conditions and all
              applicable laws. If you do not agree, please discontinue use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Website Use</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>You must use this website only for lawful business purposes.</li>
              <li>You agree not to misuse forms, content, brand assets, or system access.</li>
              <li>You may not attempt to interfere with website security or availability.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Intellectual Property</h2>
            <p>
              All trademarks, logos, designs, copy, visuals, and software materials displayed on
              this website are the property of EtriqAI Intelligence Private Limited or its licensors
              and are protected by applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Service Information</h2>
            <p>
              Content on this website is for general informational purposes. Final commercial scope,
              timelines, pricing, and obligations are defined through formal agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Limitation of Liability</h2>
            <p>
              To the extent permitted by law, EtriqAI is not liable for indirect, incidental, or
              consequential damages resulting from website usage or reliance on public content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">6. Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes shall be subject to
              jurisdiction in Gurugram, Haryana.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">7. Contact</h2>
            <p>
              For legal or commercial queries, contact{" "}
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
