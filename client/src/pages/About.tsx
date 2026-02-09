import { Target, HeartHandshake, ShieldCheck, ArrowRight } from "lucide-react";

const stats = [
  { label: "Conversations Automated", value: "1M+" },
  { label: "Supported Languages", value: "50+" },
  { label: "Enterprise Uptime Target", value: "99.9%" },
  { label: "Average Response Speed", value: "<1s" },
];

const values = [
  {
    icon: <Target className="w-5 h-5 text-violet-700" />,
    title: "Outcome-Driven Execution",
    description:
      "Every deployment is mapped to measurable business outcomes, from faster response times to lower support costs.",
  },
  {
    icon: <HeartHandshake className="w-5 h-5 text-fuchsia-700" />,
    title: "Human-Centered AI",
    description:
      "We design digital humans that sound natural, understand intent, and respond with contextual empathy.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-violet-700" />,
    title: "Security & Trust First",
    description:
      "Our architecture prioritizes data protection, operational reliability, and enterprise-grade governance.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f9f5ff_50%,#ffffff_100%)] text-slate-900">
      <div className="container mx-auto px-4 py-14 md:py-16">
        <a href="/" className="text-sm font-medium text-violet-700 hover:text-violet-800">
          ← Back to Home
        </a>

        <section className="mt-6 rounded-3xl border border-violet-200 bg-white p-8 md:p-10 shadow-[0_30px_60px_-40px_rgba(124,58,237,0.55)]">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 border border-violet-200 text-violet-700 text-sm font-medium mb-5">
            <span>About EtriqAI</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-5">
            Building the Future of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-fuchsia-600">
              {" "}Human-AI Interaction
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-4xl leading-relaxed">
            EtriqAI is an AI company focused on creating emotionally intelligent digital humans for
            enterprises. We help organizations automate customer-facing conversations without losing
            the warmth, clarity, and trust of real human communication.
          </p>
        </section>

        <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-violet-200 bg-white p-5">
              <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
              <p className="text-sm text-slate-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </section>

        <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-violet-200 bg-white p-7 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">Our Story</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We started EtriqAI with one core belief: AI should not feel robotic when people need
              support, guidance, or decisions. Enterprises needed speed and scale, but users still
              expected clarity, empathy, and confidence in every interaction.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Today, EtriqAI powers digital humans across support, sales, onboarding, and
              operations. Our platform blends speech intelligence, emotional context, and workflow
              automation to deliver conversations that are both efficient and human-like.
            </p>
          </div>

          <div className="rounded-3xl border border-violet-200 bg-[linear-gradient(160deg,#ffffff_0%,#faf5ff_100%)] p-7 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">What We Build</h2>
            <ul className="space-y-3 text-slate-700">
              <li>Real-time voice and chat digital humans for customer interactions</li>
              <li>Industry-specific AI playbooks for healthcare, HR, finance, and support</li>
              <li>Context-aware multilingual communication at enterprise scale</li>
              <li>Secure and measurable deployments with business impact analytics</li>
            </ul>
            <a
              href="/partners"
              className="mt-6 inline-flex items-center gap-2 text-violet-700 hover:text-violet-800 font-semibold"
            >
              Explore Partnership Opportunities
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {values.map((value) => (
            <div key={value.title} className="rounded-2xl border border-violet-200 bg-white p-6">
              <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
