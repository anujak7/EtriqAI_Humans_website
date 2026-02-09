import { FormEvent, useState } from "react";
import { Users, Rocket, Brain, ArrowRight, CheckCircle2 } from "lucide-react";

const perks = [
  "Build category-defining AI products with real enterprise impact",
  "Fast ownership and direct access to founders and product leaders",
  "Hybrid-friendly culture focused on output, not bureaucracy",
  "Learning budget for AI, systems design, and leadership growth",
];

const openings = [
  {
    role: "Game Developer Intern",
    location: "Gurugram / Hybrid",
    type: "Internship",
    description:
      "Build interactive real-time experiences for AI-driven digital human products and simulations.",
    responsibilities: [
      "Develop gameplay and interaction systems using modern game frameworks",
      "Collaborate with AI and product teams on immersive conversation scenarios",
      "Optimize performance and maintain clean production-ready code",
    ],
  },
  {
    role: "Animator Intern",
    location: "Gurugram / Hybrid",
    type: "Internship",
    description:
      "Create expressive, high-quality character animations for digital avatars and branded interactions.",
    responsibilities: [
      "Design facial and body animation for conversational digital humans",
      "Work with product and design teams to deliver emotionally aligned motion",
      "Export and optimize animation assets for real-time platforms",
    ],
  },
  {
    role: "UE Developer Intern",
    location: "Gurugram / Hybrid",
    type: "Internship",
    description:
      "Build Unreal Engine-based experiences and integrations for lifelike AI human deployments.",
    responsibilities: [
      "Implement Unreal Engine scenes, logic, and interaction pipelines",
      "Integrate avatar systems, animation, and real-time data flows",
      "Collaborate across engineering and design for production-quality output",
    ],
  },
  {
    role: "NLP Engineer Intern",
    location: "Gurugram / Remote (India)",
    type: "Internship",
    description:
      "Improve intent understanding, dialogue quality, and response relevance for enterprise conversations.",
    responsibilities: [
      "Fine-tune prompts, intent logic, and response quality workflows",
      "Evaluate and improve multilingual NLP performance across use-cases",
      "Work with product teams to deploy measurable conversation improvements",
    ],
  },
];

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState(openings[0].role);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const selectedRoleData =
    openings.find((opening) => opening.role === selectedRole) ?? openings[0];

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSubmitted(false);
    setSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", `Career Application - ${selectedRoleData.role}`);
    formData.append("_template", "table");
    formData.append("_captcha", "false");
    formData.append(
      "selected_role_responsibilities",
      selectedRoleData.responsibilities.join(" | "),
    );

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
      setSelectedRole(openings[0].role);
    } catch (submitError) {
      setError("Submission failed. Please try again in a moment.");
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

        <section className="mt-6 rounded-3xl border border-violet-200 bg-white p-8 md:p-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 border border-violet-200 text-violet-700 text-sm font-medium mb-5">
            <span>Careers at EtriqAI</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-4">
            Help Build AI That
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-fuchsia-600">
              {" "}Feels Human
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            We are building one of India’s most ambitious digital human platforms. These current
            openings are internship roles designed for builders who want to work on production AI
            systems with real business impact.
          </p>
        </section>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-violet-200 bg-white p-5">
            <Users className="w-5 h-5 text-violet-700 mb-3" />
            <h3 className="font-bold text-slate-900 mb-1">Small Team, Big Ownership</h3>
            <p className="text-sm text-slate-600">You will own meaningful product surfaces, not just tickets.</p>
          </div>
          <div className="rounded-2xl border border-violet-200 bg-white p-5">
            <Rocket className="w-5 h-5 text-fuchsia-700 mb-3" />
            <h3 className="font-bold text-slate-900 mb-1">Fast Shipping Culture</h3>
            <p className="text-sm text-slate-600">We test quickly, iterate fast, and optimize with real feedback.</p>
          </div>
          <div className="rounded-2xl border border-violet-200 bg-white p-5">
            <Brain className="w-5 h-5 text-violet-700 mb-3" />
            <h3 className="font-bold text-slate-900 mb-1">Deep AI Work</h3>
            <p className="text-sm text-slate-600">Work across voice, NLP, UX, and enterprise workflows.</p>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-violet-200 bg-white p-7 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-5">Open Roles</h2>
          <div className="space-y-4">
            {openings.map((job) => (
              <div key={job.role} className="rounded-2xl border border-violet-200 p-5 bg-[linear-gradient(150deg,#ffffff_0%,#faf5ff_100%)]">
                <div className="flex flex-wrap gap-2 items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                  <span className="text-xs font-semibold text-violet-700 bg-violet-100 border border-violet-200 px-2 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>
                <p className="text-sm text-slate-500 mb-2">{job.location}</p>
                <p className="text-slate-600 leading-relaxed">{job.description}</p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {job.responsibilities.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-violet-700 mt-0.5 shrink-0" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-violet-200 bg-white p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-2">Apply Now</h2>
              <p className="text-slate-600">
                Submit your details and resume. Our hiring team will review and contact you soon.
              </p>
            </div>
            <span className="text-xs font-semibold text-violet-700 bg-violet-100 border border-violet-200 px-3 py-1.5 rounded-full">
              Internship Hiring
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <form onSubmit={onSubmit} className="lg:col-span-3 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="full_name"
                  placeholder="Full name"
                  required
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-violet-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-violet-500"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  required
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-violet-500"
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Current location"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-violet-500"
                />
                <select
                  name="role_applied_for"
                  required
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="sm:col-span-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 outline-none focus:border-violet-500 bg-white"
                >
                  {openings.map((job) => (
                    <option key={job.role} value={job.role}>
                      {job.role} ({job.type})
                    </option>
                  ))}
                </select>
                <input
                  type="url"
                  name="portfolio_or_linkedin"
                  placeholder="Portfolio / LinkedIn URL"
                  className="sm:col-span-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-violet-500"
                />
                <textarea
                  name="cover_note"
                  rows={4}
                  placeholder="Why do you want to join EtriqAI? (Short note)"
                  required
                  className="sm:col-span-2 w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-violet-500"
                />
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Upload Resume (PDF/DOC/DOCX)
                  </label>
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-700 file:mr-3 file:rounded-md file:border-0 file:bg-violet-100 file:px-3 file:py-2 file:text-violet-700 file:font-medium"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-700 hover:bg-violet-800 text-white px-6 h-11 font-semibold transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Submit Application"}
                <ArrowRight className="w-4 h-4" />
              </button>

              {submitted && (
                <p className="text-sm text-emerald-600">
                  Application submitted successfully. Our hiring team will contact you soon.
                </p>
              )}
              {error && <p className="text-sm text-rose-600">{error}</p>}
            </form>

            <div className="lg:col-span-2 rounded-2xl border border-violet-200 bg-[linear-gradient(155deg,#ffffff_0%,#faf5ff_100%)] p-5 h-fit">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-violet-700 mb-3">
                Selected Role
              </p>
              <h3 className="text-xl font-bold text-slate-900">{selectedRoleData.role}</h3>
              <p className="text-sm text-slate-500 mt-1">{selectedRoleData.location}</p>
              <p className="text-sm text-slate-600 mt-3">{selectedRoleData.description}</p>
              <h4 className="text-sm font-bold text-slate-900 mt-4 mb-2">Responsibilities</h4>
              <ul className="space-y-2">
                {selectedRoleData.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-violet-700 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-violet-200 bg-violet-50/60 p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Why People Join EtriqAI</h3>
          <ul className="space-y-2 text-slate-700">
            {perks.map((perk) => (
              <li key={perk}>• {perk}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
