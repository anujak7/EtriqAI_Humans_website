export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f9f5ff_100%)] text-slate-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <a href="/" className="text-sm font-medium text-violet-700 hover:text-violet-800">
          ← Back to Home
        </a>
        <h1 className="text-4xl font-bold font-display mt-4 mb-6">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-8">Effective date: February 9, 2026</p>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Introduction</h2>
            <p>
              EtriqAI Intelligence Private Limited ("EtriqAI", "we", "our", "us") is committed
              to protecting the privacy of visitors, customers, and partners who use our website
              and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Contact details such as name, email, phone number, and company name.</li>
              <li>Business inquiry details submitted through demo, partnership, or career forms.</li>
              <li>Usage data such as browser type, pages visited, and device metadata.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">3. How We Use Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To respond to inquiries, demo requests, and partnership discussions.</li>
              <li>To evaluate hiring applications and professional communications.</li>
              <li>To improve service quality, site experience, and platform security.</li>
              <li>To comply with legal and regulatory obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Data Sharing</h2>
            <p>
              We do not sell personal data. We may share limited information with trusted
              processors (such as form or infrastructure providers) only to operate our services
              securely and effectively.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Data Security</h2>
            <p>
              EtriqAI applies administrative, technical, and organizational safeguards to protect
              data against unauthorized access, loss, misuse, or alteration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">6. Your Rights</h2>
            <p>
              You may request access, correction, or deletion of your personal information by
              contacting us. We will review and process valid requests in accordance with
              applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">7. Contact</h2>
            <p>
              For privacy questions or requests, write to{" "}
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
