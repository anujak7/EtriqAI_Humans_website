import { FormEvent, useState } from "react";
import { ShieldCheck, Zap, Handshake, ArrowRight, ExternalLink } from "lucide-react";
import {
  FORMSUBMIT_AJAX_ENDPOINT,
  appendFormSubmitDefaults,
} from "@/lib/formSubmit";

const benefits = [
  {
    icon: <Zap className="w-5 h-5 text-violet-700" />,
    title: "Faster Joint Go-to-Market",
    text: "Ready playbooks, demo assets, and sales enablement to accelerate pipeline.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-fuchsia-700" />,
    title: "Trusted Enterprise Positioning",
    text: "Co-deliver secure and measurable AI transformation programs for large customers.",
  },
  {
    icon: <Handshake className="w-5 h-5 text-violet-700" />,
    title: "Long-Term Revenue Programs",
    text: "Structured commercial models designed for recurring and scalable partnership growth.",
  },
];

export default function Partners() {
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitted(false);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const replyTo = String(formData.get("work_email") || "");
    appendFormSubmitDefaults(formData, "Partnership Inquiry - EtriqAI", replyTo);
    formData.append("form_name", "Partnership Inquiry");
    formData.append("source_page", window.location.href);

    try {
      const response = await fetch(FORMSUBMIT_AJAX_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
      form.reset();
    } catch (submitError) {
      setError("Submission failed. Please try again.");
      console.error(submitError);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f9f5ff_55%,#ffffff_100%)] text-slate-900">
      <div className="container mx-auto px-4 py-14 md:py-16">
        <a href="/" className="text-sm font-medium text-violet-700 hover:text-violet-800">
          ← Back to Home
        </a>

        <section className="mt-6 rounded-3xl border border-violet-200 bg-white p-8 md:p-10 shadow-[0_30px_60px_-40px_rgba(124,58,237,0.55)]">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 border border-violet-200 text-violet-700 text-sm font-medium mb-5">
            <span>Partner Program</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-4">
            Partner with EtriqAI to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-fuchsia-600">
              {" "}Scale AI Adoption
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            We work with trusted companies to deliver secure, real-world AI solutions faster.
          </p>
        </section>

        <section className="mt-10 rounded-3xl border border-violet-200 bg-white p-7 md:p-8 shadow-[0_25px_55px_-35px_rgba(124,58,237,0.45)]">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <h2 className="text-2xl md:text-3xl font-bold font-display">Active Partner</h2>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-full">
              Verified Collaboration
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_1fr] gap-5 items-stretch">
            <div className="rounded-2xl border border-violet-200 bg-white p-4 md:p-5 flex items-center justify-center aspect-[16/10]">
              <img
                src="/images/partners/defendit-logo.jpg"
                alt="Defendit logo"
                className="h-[82%] md:h-[88%] w-auto object-contain"
              />
            </div>

            <div className="rounded-2xl border border-violet-200 bg-white p-5 md:p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Defendit</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Defendit positions itself as an on-demand professional security platform. Their
                product experience highlights instant booking of verified security professionals for
                individuals and organizations.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="text-xs font-semibold text-violet-700 bg-violet-100 border border-violet-200 px-2.5 py-1 rounded-full">
                  On-Demand Security
                </span>
                <span className="text-xs font-semibold text-violet-700 bg-violet-100 border border-violet-200 px-2.5 py-1 rounded-full">
                  Verified Professionals
                </span>
                <span className="text-xs font-semibold text-violet-700 bg-violet-100 border border-violet-200 px-2.5 py-1 rounded-full">
                  Gurugram, India
                </span>
              </div>
              <div className="mt-5 flex justify-center md:justify-start">
                <a
                href="https://www.defendit.in"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-700 hover:bg-violet-800 text-white px-6 h-11 min-w-[280px] font-semibold transition-colors"
              >
                Visit Defendit Website
                <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-violet-200 bg-[linear-gradient(150deg,#ffffff_0%,#faf5ff_100%)] p-7 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-5">Partnership Value</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl border border-violet-200 bg-white p-5">
                <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center mb-3">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{benefit.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-violet-200 bg-white p-6 md:p-7 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">Interested in partnering with us?</h3>
            <p className="text-slate-600">
              We are open to technology, implementation, and channel partnerships.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-700 hover:bg-violet-800 text-white px-5 h-11 font-semibold transition-colors"
          >
            Contact Partnerships Team
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>

        {showForm && (
          <section className="mt-8 rounded-3xl border border-violet-200 bg-white p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-2">
              Partnership Inquiry Form
            </h2>
            <p className="text-slate-600 mb-6">
              Share your details and partnership intent. Our team will review and contact you soon.
            </p>

            <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="full_name"
                placeholder="Full name"
                required
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-violet-500"
              />
              <input
                type="email"
                name="work_email"
                placeholder="Work email"
                required
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-violet-500"
              />
              <input
                type="text"
                name="company"
                placeholder="Company name"
                required
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-violet-500"
              />
              <select
                name="partnership_type"
                required
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 outline-none focus:border-violet-500 bg-white"
              >
                <option value="">Select partnership type</option>
                <option value="Technology Partner">Technology Partner</option>
                <option value="Implementation Partner">Implementation Partner</option>
                <option value="Channel Partner">Channel Partner</option>
              </select>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your partnership proposal"
                required
                className="sm:col-span-2 w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-violet-500"
              />

              <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-700 hover:bg-violet-800 text-white px-5 h-11 font-semibold transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitting ? "Submitting..." : "Submit Inquiry"}
                  <ArrowRight className="w-4 h-4" />
                </button>
                {submitted && (
                  <p className="text-sm text-emerald-700">
                    Thanks for reaching out. Our partnerships team will contact you soon.
                  </p>
                )}
                {error && <p className="text-sm text-rose-600">{error}</p>}
              </div>
            </form>
          </section>
        )}
      </div>
    </main>
  );
}
