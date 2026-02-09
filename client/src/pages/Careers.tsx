import { FormEvent, useState } from "react";
import {
  Users,
  Rocket,
  Brain,
  ArrowRight,
  CheckCircle2,
  Clock3,
  IndianRupee,
} from "lucide-react";
import {
  FORMSUBMIT_AJAX_ENDPOINT,
  appendFormSubmitDefaults,
} from "@/lib/formSubmit";

type Opening = {
  role: string;
  team: string;
  location: string;
  workMode: "Remote" | "Hybrid";
  type: "Internship";
  duration: string;
  stipend: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  outcomes: string[];
};

const perks = [
  "2-month internship with structured mentoring and weekly feedback loops",
  "Stipend-based model designed for serious builders and fast learners",
  "Remote or hybrid flexibility with clear outcomes and ownership",
  "Direct collaboration with product, AI, and founding leadership",
];

const openings: Opening[] = [
  {
    role: "AI Product Engineer Intern",
    team: "Product & AI",
    location: "Gurugram / India",
    workMode: "Hybrid",
    type: "Internship",
    duration: "2 Months",
    stipend: "Rs 6,000 / month",
    description:
      "Translate user problems into scalable AI product features across support, sales, and operations workflows.",
    responsibilities: [
      "Define product requirements and user stories for AI-driven conversational journeys",
      "Collaborate with engineering on experimentation, feature shipping, and metric tracking",
      "Run structured user feedback loops and convert insights into product improvements",
      "Support launch planning, adoption monitoring, and iteration roadmaps",
    ],
    qualifications: [
      "Strong product thinking with attention to user behavior and business outcomes",
      "Comfort with AI products, no-code tools, or basic technical implementation flows",
      "Excellent communication and documentation discipline",
    ],
    outcomes: [
      "Ship 1-2 measurable product improvements in the internship cycle",
      "Own one feature area from concept to validation",
    ],
  },
  {
    role: "ML Developer Intern",
    team: "Machine Learning",
    location: "Remote (India)",
    workMode: "Remote",
    type: "Internship",
    duration: "2 Months",
    stipend: "Rs 6,000 / month",
    description:
      "Build and optimize practical ML components that improve intent detection, response quality, and personalization.",
    responsibilities: [
      "Develop and evaluate models/pipelines for NLP and classification tasks",
      "Prepare and validate datasets for training and benchmarking",
      "Work with engineers to integrate ML outputs into production flows",
      "Track performance metrics and improve model quality iteratively",
    ],
    qualifications: [
      "Foundational knowledge of Python and ML libraries",
      "Understanding of model evaluation metrics and data preprocessing",
      "Ability to communicate trade-offs and experimental findings clearly",
    ],
    outcomes: [
      "Deliver tested ML improvements tied to business metrics",
      "Contribute reusable components for future model iterations",
    ],
  },
  {
    role: "Game Developer Intern",
    team: "Interactive Systems",
    location: "Gurugram / India",
    workMode: "Hybrid",
    type: "Internship",
    duration: "2 Months",
    stipend: "Rs 6,000 / month",
    description:
      "Build interactive real-time experiences for AI-driven digital human products and simulations.",
    responsibilities: [
      "Develop gameplay and interaction systems using modern game frameworks",
      "Collaborate with AI teams on immersive dialogue simulation scenarios",
      "Optimize rendering and runtime performance for smooth experiences",
    ],
    qualifications: [
      "Strong fundamentals in game logic and interaction design",
      "Experience with at least one real-time engine/toolchain",
      "Good debugging and performance optimization habits",
    ],
    outcomes: [
      "Ship one production-quality interactive prototype",
      "Improve engagement quality in at least one simulation flow",
    ],
  },
  {
    role: "Animator Intern",
    team: "Avatar Experience",
    location: "Gurugram / India",
    workMode: "Hybrid",
    type: "Internship",
    duration: "2 Months",
    stipend: "Rs 6,000 / month",
    description:
      "Create expressive, high-quality character animations for digital avatars and branded interactions.",
    responsibilities: [
      "Design facial and body animations for conversational digital humans",
      "Align motion behavior with emotion, tone, and interaction context",
      "Export and optimize assets for real-time production usage",
    ],
    qualifications: [
      "Strong animation fundamentals with expressive timing and staging",
      "Portfolio of character-driven animation work",
      "Ability to collaborate with UX and engineering teams",
    ],
    outcomes: [
      "Deliver animation packs used in live digital human flows",
      "Contribute to visual consistency and emotional fidelity benchmarks",
    ],
  },
  {
    role: "UE Developer Intern",
    team: "Real-Time Platform",
    location: "Gurugram / India",
    workMode: "Hybrid",
    type: "Internship",
    duration: "2 Months",
    stipend: "Rs 6,000 / month",
    description:
      "Build Unreal Engine-based experiences and integrations for lifelike AI human deployments.",
    responsibilities: [
      "Implement UE scenes, logic, and interaction pipelines",
      "Integrate avatar systems, animation, and real-time data events",
      "Collaborate across product and engineering to ship stable builds",
    ],
    qualifications: [
      "Hands-on Unreal Engine project experience",
      "Understanding of real-time optimization and scene architecture",
      "Ability to ship clean and maintainable implementation",
    ],
    outcomes: [
      "Contribute to one production-ready UE implementation",
      "Improve latency or visual quality in an existing interaction surface",
    ],
  },
  {
    role: "NLP Engineer Intern",
    team: "Language Intelligence",
    location: "Remote (India)",
    workMode: "Remote",
    type: "Internship",
    duration: "2 Months",
    stipend: "Rs 6,000 / month",
    description:
      "Improve intent understanding, dialogue quality, and response relevance for enterprise conversations.",
    responsibilities: [
      "Fine-tune prompts, intent logic, and response quality workflows",
      "Evaluate multilingual NLP performance across key use-cases",
      "Collaborate on measurable conversation quality improvements",
    ],
    qualifications: [
      "Working knowledge of NLP concepts and language model behavior",
      "Ability to design and analyze test cases for dialogue quality",
      "Strong problem-solving and structured experimentation approach",
    ],
    outcomes: [
      "Deliver quality improvements with measurable intent/response lift",
      "Contribute to reusable evaluation workflows for future releases",
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

  const focusApplication = (role: string) => {
    setSelectedRole(role);
    requestAnimationFrame(() => {
      document.getElementById("application-panel")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSubmitted(false);
    setSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const replyTo = String(formData.get("email") || "");
    appendFormSubmitDefaults(
      formData,
      `Career Application - ${selectedRoleData.role}`,
      replyTo,
    );
    formData.append("form_name", "Career Application");
    formData.append("source_page", window.location.href);
    formData.append("internship_type", selectedRoleData.type);
    formData.append("internship_duration", selectedRoleData.duration);
    formData.append("internship_stipend", selectedRoleData.stipend);
    formData.append("internship_work_mode", selectedRoleData.workMode);
    formData.append("selected_role_team", selectedRoleData.team);
    formData.append(
      "selected_role_responsibilities",
      selectedRoleData.responsibilities.join(" | "),
    );

    try {
      const response = await fetch(FORMSUBMIT_AJAX_ENDPOINT, {
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
            High-Impact
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-fuchsia-600">
              {" "}Internships
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Join EtriqAI for a structured 2-month stipend-based internship. Work on real products,
            ship measurable outcomes, and grow under direct mentorship from our core teams.
          </p>
        </section>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-violet-200 bg-white p-5">
            <Users className="w-5 h-5 text-violet-700 mb-3" />
            <h3 className="font-bold text-slate-900 mb-1">Real Ownership</h3>
            <p className="text-sm text-slate-600">
              You will own meaningful product and engineering tasks, not shadow work.
            </p>
          </div>
          <div className="rounded-2xl border border-violet-200 bg-white p-5">
            <Rocket className="w-5 h-5 text-fuchsia-700 mb-3" />
            <h3 className="font-bold text-slate-900 mb-1">Fast Execution</h3>
            <p className="text-sm text-slate-600">
              Weekly review cycles with clear goals, iteration speed, and performance feedback.
            </p>
          </div>
          <div className="rounded-2xl border border-violet-200 bg-white p-5">
            <Brain className="w-5 h-5 text-violet-700 mb-3" />
            <h3 className="font-bold text-slate-900 mb-1">AI + Product Exposure</h3>
            <p className="text-sm text-slate-600">
              Build across voice, NLP, avatar UX, product systems, and enterprise use-cases.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-violet-200 bg-white p-7 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <h2 className="text-2xl md:text-3xl font-bold font-display">Open Internship Roles</h2>
            <span className="text-xs font-semibold text-violet-700 bg-violet-100 border border-violet-200 px-3 py-1.5 rounded-full">
              2 Months • Rs 6,000/month • Remote/Hybrid
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {openings.map((job) => (
              <button
                type="button"
                key={job.role}
                onClick={() => focusApplication(job.role)}
                className={`text-left rounded-2xl border p-5 transition-all duration-200 ${
                  selectedRole === job.role
                    ? "border-violet-500 bg-[linear-gradient(150deg,#ffffff_0%,#f6efff_100%)] shadow-[0_20px_45px_-32px_rgba(124,58,237,0.7)]"
                    : "border-violet-200 bg-[linear-gradient(150deg,#ffffff_0%,#faf5ff_100%)] hover:border-violet-300"
                }`}
              >
                <div className="flex flex-wrap gap-2 items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                  <span className="text-xs font-semibold text-violet-700 bg-violet-100 border border-violet-200 px-2 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-3">{job.team}</p>
                <p className="text-slate-600 leading-relaxed mb-3">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-slate-700 bg-white border border-slate-200 px-2.5 py-1 rounded-full">
                    {job.location}
                  </span>
                  <span className="text-xs font-medium text-slate-700 bg-white border border-slate-200 px-2.5 py-1 rounded-full">
                    {job.workMode}
                  </span>
                  <span className="text-xs font-medium text-slate-700 bg-white border border-slate-200 px-2.5 py-1 rounded-full">
                    {job.duration}
                  </span>
                  <span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                    {job.stipend}
                  </span>
                </div>
                <p className="mt-4 text-sm font-semibold text-violet-700">
                  View Details & Apply →
                </p>
              </button>
            ))}
          </div>
        </section>

        <section
          id="application-panel"
          className="mt-8 rounded-3xl border border-violet-200 bg-white p-6 md:p-8"
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-2">
                Apply for {selectedRoleData.role}
              </h2>
              <p className="text-slate-600">
                Review role details below and submit your application in one place.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-violet-700 bg-violet-100 border border-violet-200 px-3 py-1.5 rounded-full">
                <Clock3 className="w-3.5 h-3.5" />
                {selectedRoleData.duration}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
                <IndianRupee className="w-3.5 h-3.5" />
                {selectedRoleData.stipend}
              </span>
              <span className="text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full">
                {selectedRoleData.workMode}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2 rounded-2xl border border-violet-200 bg-[linear-gradient(155deg,#ffffff_0%,#faf5ff_100%)] p-5 h-fit">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-violet-700 mb-3">
                Internship Overview
              </p>
              <h3 className="text-xl font-bold text-slate-900">{selectedRoleData.role}</h3>
              <p className="text-sm text-slate-500 mt-1">{selectedRoleData.team}</p>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                {selectedRoleData.description}
              </p>

              <h4 className="text-sm font-bold text-slate-900 mt-5 mb-2">Responsibilities</h4>
              <ul className="space-y-2">
                {selectedRoleData.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-violet-700 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-sm font-bold text-slate-900 mt-5 mb-2">Who should apply</h4>
              <ul className="space-y-2">
                {selectedRoleData.qualifications.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-fuchsia-700 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-sm font-bold text-slate-900 mt-5 mb-2">Expected outcomes</h4>
              <ul className="space-y-2">
                {selectedRoleData.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

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
                      {job.role} • {job.workMode} • {job.stipend}
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
                  placeholder="Why are you a strong fit for this internship?"
                  required
                  className="sm:col-span-2 w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-violet-500"
                />
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Upload Resume (PDF/DOC/DOCX)
                  </label>
                  <input
                    type="file"
                    name="attachment"
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
                {submitting ? "Submitting..." : `Apply for ${selectedRoleData.role}`}
                <ArrowRight className="w-4 h-4" />
              </button>

              {submitted && (
                <p className="text-sm text-emerald-600">
                  Application submitted successfully. Our hiring team will contact you soon.
                </p>
              )}
              {error && <p className="text-sm text-rose-600">{error}</p>}
            </form>
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
