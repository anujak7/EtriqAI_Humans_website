export default function Security() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f9f5ff_100%)] text-slate-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <a href="/" className="text-sm font-medium text-violet-700 hover:text-violet-800">
          ← Back to Home
        </a>
        <h1 className="text-4xl font-bold font-display mt-4 mb-6">Security</h1>
        <p className="text-sm text-slate-500 mb-8">Last updated: February 9, 2026</p>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Security Commitment</h2>
            <p>
              EtriqAI follows a security-first model across platform design, data handling,
              infrastructure operations, and client onboarding processes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Platform Safeguards</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access controls based on least privilege principles.</li>
              <li>Secure transport and communication practices.</li>
              <li>Operational logging and monitoring for critical systems.</li>
              <li>Regular updates and maintenance of dependencies and infrastructure.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Data Protection Practices</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Restricted access to business and user data.</li>
              <li>Segregation of environments for development and production workflows.</li>
              <li>Defined retention and handling controls based on business need.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Incident Response</h2>
            <p>
              We maintain internal response processes for identifying, containing, and resolving
              security events with required escalation and communication.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Security Contact</h2>
            <p>
              For security reviews, questions, or incident reports, contact{" "}
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
