import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSubmitted(false);
    setSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", "New Demo Request - EtriqAI Website");
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@defendit.in", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
      form.reset();
    } catch (submitError) {
      setError("Submission failed. Please try again in a moment.");
      console.error(submitError);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-violet-200/70 bg-white p-6 md:p-8 shadow-[0_20px_50px_-25px_rgba(124,58,237,0.35)]"
    >
      <h3 className="text-2xl font-bold text-slate-900 mb-2">Book a Demo</h3>
      <p className="text-slate-600 mb-6">
        Share a few details and our team will send a tailored rollout plan.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full name"
          required
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-violet-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Work email"
          required
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-violet-500"
        />
        <input
          type="text"
          name="company"
          placeholder="Company name"
          required
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-violet-500"
        />
        <input
          type="text"
          name="role"
          placeholder="Your role"
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-violet-500"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about your use case, expected volume, and integration needs"
          required
          className="sm:col-span-2 w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-violet-500"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 w-full rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white py-3 font-semibold hover:from-violet-700 hover:to-fuchsia-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending..." : "Request Demo"}
      </button>

      <p className="mt-3 text-xs text-slate-500">
        By submitting this form, you agree to be contacted by EtriqAI regarding
        your inquiry.
      </p>

      {submitted && (
        <p className="mt-4 text-sm text-emerald-600">
          Thanks! Your request has been submitted. Our team will contact you soon.
        </p>
      )}
      {error && <p className="mt-4 text-sm text-rose-600">{error}</p>}
    </form>
  );
}
