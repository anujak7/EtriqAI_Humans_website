import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import {
  Mic,
  Brain,
  Clock,
  Globe,
  Languages,
  Users,
  Briefcase,
  ShieldCheck,
  Check,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const openContactForm = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => {
      const firstField = document.querySelector(
        '#contact form input[name="name"]',
      ) as HTMLInputElement | null;
      firstField?.focus();
    }, 450);
  };

  const features = [
    {
      icon: <Mic className="w-8 h-8 text-violet-700" />,
      title: "Real-Time Voice Interaction",
      description:
        "Natural, fluid conversations powered by advanced speech recognition and synthesis technology.",
    },
    {
      icon: <Brain className="w-8 h-8 text-fuchsia-700" />,
      title: "Emotionally Intelligent",
      description:
        "Avatars that understand context, detect sentiment, and respond with genuine empathy.",
    },
    {
      icon: <Clock className="w-8 h-8 text-violet-700" />,
      title: "24/7 Availability",
      description:
        "Always-on AI employees that never sleep, ensuring round-the-clock customer engagement.",
    },
    {
      icon: <Globe className="w-8 h-8 text-fuchsia-700" />,
      title: "Cross-Industry Integration",
      description:
        "Seamlessly integrate across Banking, Retail, Education, HR, and Customer Support.",
    },
    {
      icon: <Languages className="w-8 h-8 text-violet-700" />,
      title: "Multi-Language Support",
      description:
        "Communicate fluently in 50+ languages, breaking down global communication barriers.",
    },
    {
      icon: <Users className="w-8 h-8 text-fuchsia-700" />,
      title: "Multi-Role Capability",
      description:
        "One platform, endless possibilities from sales to support to training.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-violet-700" />,
      title: "Customizable Expertise",
      description:
        "Tailor AI knowledge modules to match your specific industry and business needs.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-fuchsia-700" />,
      title: "Privacy-First Design",
      description:
        "Enterprise-grade security with full data protection and compliance standards.",
    },
  ];

  const industries = [
    "Banking & Finance",
    "Retail & E-commerce",
    "Education & Training",
    "HR & Recruitment",
    "Customer Support",
    "Healthcare",
  ];

  const whyEtriqHighlights = [
    "Reduce operational costs by up to 80%",
    "24/7 availability without burnout",
    "Emotionally intelligent responses",
    "Multi-language support out of the box",
  ];

  const whyEtriqComparison = [
    {
      label: "Response Time",
      traditional: "Minutes to hours",
      etriq: "< 1 second",
    },
    {
      label: "Availability",
      traditional: "Business hours only",
      etriq: "24/7/365",
    },
    {
      label: "Scaling",
      traditional: "Weeks of hiring",
      etriq: "Instant",
    },
    {
      label: "Cost per Interaction",
      traditional: "$5-15",
      etriq: "$0.01-0.05",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹9,999",
      period: "/month",
      blurb: "Best for early teams validating AI support workflows.",
      cta: "Start 14-Day Pilot",
      points: [
        "1 Digital Human",
        "Up to 3,000 conversations/month",
        "Website + WhatsApp integration",
        "Basic analytics dashboard",
      ],
      featured: false,
    },
    {
      name: "Growth",
      price: "₹24,999",
      period: "/month",
      blurb: "For fast-growing startups scaling support and sales.",
      cta: "Choose Growth",
      points: [
        "3 Digital Humans",
        "Up to 15,000 conversations/month",
        "Voice + multilingual support",
        "CRM integrations + priority support",
      ],
      featured: true,
    },
    {
      name: "Scale",
      price: "Custom",
      period: "",
      blurb: "For high-volume operations needing full customization.",
      cta: "Talk to Sales",
      points: [
        "Unlimited roles and channels",
        "Custom workflows and automations",
        "Dedicated success manager",
        "Enterprise security and compliance",
      ],
      featured: false,
    },
  ];
  const orderedPricingPlans = [...pricingPlans].sort(
    (a, b) => Number(b.featured) - Number(a.featured),
  );

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f9f5ff_55%,#ffffff_100%)] text-slate-900 selection:bg-violet-200">
      <Navigation />

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
      >
        <div className="absolute inset-0 z-0">
          <video
            src="/videos/hero-background.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-44"
          />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(16,7,32,0.84),rgba(44,17,76,0.72),rgba(15,8,28,0.86))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(157,78,221,0.28),transparent_34%),radial-gradient(circle_at_80%_26%,rgba(201,71,255,0.24),transparent_40%)]" />
        </div>

        <div className="container relative z-10 px-4 text-center">
          <div className="max-w-5xl mx-auto px-2 md:px-8 py-10 md:py-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/12 border border-white/25 mb-8 backdrop-blur-sm"
            >
              <span className="text-sm font-medium tracking-wide text-violet-100 uppercase">
                Next Gen AI Employees
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-8 [text-shadow:0_12px_34px_rgba(0,0,0,0.45)]"
            >
              <span className="block text-white">The Future of</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-fuchsia-300 to-white">
                Human Connection
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-violet-100/90 max-w-3xl mx-auto mb-12 font-light leading-relaxed [text-shadow:0_8px_24px_rgba(0,0,0,0.42)]"
            >
              Deploy emotionally intelligent digital humans for your enterprise.
              <br className="hidden md:block" />
              Bridge the gap between AI efficiency and human empathy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-violet-700 to-fuchsia-600 text-white font-bold text-lg hover:scale-105 transition-transform duration-200 shadow-xl shadow-violet-300/60"
              >
                Get Started Now
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/12 text-white font-medium text-lg border border-white/30 hover:bg-white/18 transition-colors backdrop-blur-sm"
              >
                Explore Features
              </button>
            </motion.div>
          </div>
        </div>

      </section>

      <section id="features" className="py-24 md:py-28 relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(124,58,237,0.1),transparent_40%),radial-gradient(circle_at_85%_30%,rgba(192,38,211,0.1),transparent_45%)]" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-slate-900">
              Built for Enterprise Intelligence
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Our digital humans aren't just chatbots. They see, hear, and
              understand emotion to deliver truly personalized experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 relative z-10">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-8 rounded-3xl bg-white border border-violet-200/70 hover:border-violet-400 transition-colors duration-300 relative overflow-hidden shadow-[0_25px_55px_-35px_rgba(124,58,237,0.35)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-100/50 via-transparent to-fuchsia-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-6 p-4 rounded-2xl bg-[linear-gradient(135deg,#f3e8ff_0%,#fdf4ff_100%)] w-fit border border-violet-200 group-hover:border-violet-400 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="mission"
        className="py-20 md:py-24 relative overflow-hidden bg-[linear-gradient(180deg,#fdfaff_0%,#f7efff_100%)] border-y border-violet-200/50"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-5 border border-violet-200">
                <span>Startup-Friendly Pricing</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 leading-tight text-slate-900">
                Transparent Pricing
                <br />
                <span className="text-slate-500">Built for Startup Growth.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-7">
                Start lean, prove ROI fast, and scale only when you need more
                automation power.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-7">
                {orderedPricingPlans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`rounded-2xl border p-5 relative overflow-hidden ${
                      plan.featured ? "md:col-span-2" : ""
                    } ${
                      plan.featured
                        ? "border-fuchsia-300 bg-[linear-gradient(135deg,#ffffff_0%,#faf5ff_100%)] shadow-[0_26px_48px_-34px_rgba(192,38,211,0.7)]"
                        : "border-violet-200 bg-white shadow-[0_20px_40px_-36px_rgba(124,58,237,0.45)]"
                    }`}
                  >
                    <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_top_right,rgba(216,180,254,0.22),transparent_40%)] pointer-events-none" />
                    <div className="relative z-10 flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                        <p className="text-sm text-slate-600">{plan.blurb}</p>
                      </div>
                      {plan.featured ? (
                        <span className="text-xs font-semibold text-fuchsia-700 bg-fuchsia-100 border border-fuchsia-200 px-2 py-1 rounded-full">
                          Most Popular
                        </span>
                      ) : null}
                    </div>
                    <p className="relative z-10 text-3xl font-bold text-slate-900 mb-4">
                      {plan.price}
                      <span className="text-base font-medium text-slate-500">{plan.period}</span>
                    </p>
                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                      {plan.points.map((point) => (
                        <div key={point} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-violet-700 mt-1 shrink-0" />
                          <p className="text-sm text-slate-700 leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={openContactForm}
                      className="relative z-10 w-full sm:w-auto px-4 py-2 rounded-xl text-sm font-semibold bg-violet-700 hover:bg-violet-800 text-white transition-colors"
                    >
                      {plan.cta}
                    </button>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-violet-200 bg-white/85 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-sm text-slate-700">
                  Need custom onboarding, SLA, or security controls?
                </p>
                <button
                  onClick={openContactForm}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-violet-700 hover:text-violet-800"
                >
                  Contact Sales
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative lg:col-span-5 lg:sticky lg:top-28">
              <div className="rounded-3xl bg-white border border-violet-200 p-5 md:p-6 relative overflow-hidden shadow-[0_25px_55px_-35px_rgba(124,58,237,0.45)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(216,180,254,0.36),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(196,181,253,0.26),transparent_38%)]" />
                <div className="relative rounded-2xl border border-violet-200/80 bg-white/90 p-5 md:p-6 backdrop-blur-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700 mb-4">
                    Why EtriqAI
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold font-display leading-tight text-slate-900 mb-3">
                    The Future of{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-fuchsia-600">
                      Human-AI Interaction
                    </span>
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-5 text-base">
                    We help businesses replace repetitive roles with lifelike AI
                    assistants, delivering 24/7 engagement, emotional intelligence,
                    and scalable support.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    {whyEtriqHighlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl border border-violet-200/70 bg-white"
                      >
                        <div className="w-6 h-6 rounded-full bg-violet-100 text-violet-700 border border-violet-200 flex items-center justify-center text-sm font-bold shrink-0">
                          ✓
                        </div>
                        <p className="text-[15px] text-slate-700 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2.5">
                    <h4 className="text-base font-bold text-slate-900">
                      EtriqAI vs Traditional Solutions
                    </h4>
                    {whyEtriqComparison.map((row) => (
                      <div
                        key={row.label}
                        className="rounded-xl border border-violet-200/80 bg-white p-3"
                      >
                        <p className="font-semibold text-slate-900 mb-1.5">{row.label}</p>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div>
                            <p className="text-slate-500">Traditional</p>
                            <p className="text-slate-500 line-through">
                              {row.traditional}
                            </p>
                          </div>
                          <div>
                            <p className="text-violet-700 font-medium">EtriqAI</p>
                            <p className="text-fuchsia-700 font-semibold">{row.etriq}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="industries" className="py-24 bg-[linear-gradient(180deg,#fff_0%,#faf5ff_100%)] border-y border-violet-200/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold font-display uppercase tracking-widest text-slate-700">
              Powering Industries
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {industries.map((industry, i) => (
              <span
                key={i}
                className="px-6 py-3 rounded-full border border-violet-200 bg-white text-slate-700 hover:text-violet-700 hover:border-violet-400 hover:bg-violet-50 transition-all cursor-default text-sm md:text-base font-medium"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-24 md:py-28 relative bg-[linear-gradient(180deg,#ffffff_0%,#faf5ff_100%)] border-t border-violet-200/60"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-5 border border-violet-200">
              <span>Contact EtriqAI</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-slate-900">
              Launch Your AI Team in Weeks, Not Months
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Tell us your use case. We will map the right digital human setup,
              timeline, and pricing for your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="rounded-2xl border border-violet-200 bg-white p-6 shadow-[0_20px_45px_-35px_rgba(124,58,237,0.45)]">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Why teams choose us
              </h3>
              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-violet-700 mt-0.5 shrink-0" />
                  <p>Pilot-ready deployment for startup and enterprise teams</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-violet-700 mt-0.5 shrink-0" />
                  <p>Fast integration with CRM, support, and voice workflows</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-violet-700 mt-0.5 shrink-0" />
                  <p>Dedicated onboarding with transparent execution plan</p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-violet-200 bg-violet-50/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-violet-700 mb-2">
                  Typical response
                </p>
                <p className="text-2xl font-bold text-slate-900">&lt; 24 hours</p>
                <p className="text-sm text-slate-600 mt-1">
                  Business team will reach out with next steps.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
