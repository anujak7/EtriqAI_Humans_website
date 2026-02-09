export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: "AI" | "Voice" | "Case Studies" | "Security" | "Product";
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "real-time-voice-ai-enterprise-guide",
    title: "Real-Time Voice AI for Enterprise: What Actually Works",
    excerpt:
      "A practical framework to deploy voice-based AI employees without compromising quality, compliance, or user trust.",
    category: "Voice",
    author: "EtriqAI Product Team",
    date: "2026-02-01",
    readTime: "8 min read",
    featured: true,
    content: [
      "Most enterprise voice pilots fail not because of model quality, but because of poor system design. Real-time response requires optimized orchestration across STT, intent, policy logic, and response generation.",
      "Teams that succeed define strict latency budgets, fallback behavior, and escalation criteria before deployment. This turns voice from a demo feature into an operational channel.",
      "At EtriqAI, we recommend shipping voice in a phased rollout: controlled use-cases first, then channel expansion, then automation depth.",
    ],
  },
  {
    slug: "ai-support-cost-reduction-playbook",
    title: "How AI Teams Reduce Support Costs While Improving Experience",
    excerpt:
      "A structured playbook for balancing automation, quality metrics, and human handoff in modern support workflows.",
    category: "Case Studies",
    author: "EtriqAI Solutions",
    date: "2026-01-24",
    readTime: "7 min read",
    content: [
      "Cost reduction should never come from deflecting users into dead-end flows. High-performing teams optimize issue resolution rate, not only ticket volume.",
      "The best setups combine AI-first intake, context-aware routing, and measurable escalation to specialists where required.",
      "When governance and analytics are built in early, AI support systems scale faster and remain reliable under demand spikes.",
    ],
  },
  {
    slug: "building-emotionally-intelligent-ai-workflows",
    title: "Designing Emotionally Intelligent AI Workflows",
    excerpt:
      "How to model tone, context, and intent to make AI interactions feel useful, respectful, and human-aware.",
    category: "AI",
    author: "Conversational Design Team",
    date: "2026-01-15",
    readTime: "6 min read",
    content: [
      "Emotion-aware systems are not about mimicry; they are about response quality under real human context. That means detecting friction, urgency, and sentiment shifts early.",
      "Production-grade implementations use policy guardrails and confidence thresholds, not freeform improvisation.",
      "Design teams should treat empathy as a measurable interaction outcome: clarity, speed, and reduced user frustration.",
    ],
  },
  {
    slug: "security-basics-for-ai-digital-humans",
    title: "Security Baselines for AI Digital Human Deployments",
    excerpt:
      "A concise checklist for secure rollout across data boundaries, access control, and integration surfaces.",
    category: "Security",
    author: "EtriqAI Security Office",
    date: "2026-01-10",
    readTime: "5 min read",
    content: [
      "Security in conversational AI is an architecture decision, not a post-launch patch. Start with access boundaries and environment separation.",
      "Every integration should map data class, retention expectation, and operational owner before launch.",
      "Enterprises should define redaction policies and escalation pathways for sensitive interactions from day one.",
    ],
  },
  {
    slug: "from-pilot-to-production-ai-roadmap",
    title: "From Pilot to Production: AI Rollout Roadmap for Startups",
    excerpt:
      "A step-by-step rollout approach for startups moving from first pilot to revenue-impacting AI operations.",
    category: "Product",
    author: "EtriqAI Growth Team",
    date: "2025-12-28",
    readTime: "9 min read",
    content: [
      "Startups often overbuild before proving one critical use-case. Begin with the most repetitive customer interaction and solve that deeply.",
      "Define a phased roadmap: pilot outcome targets, reliability goals, and scaling triggers tied to real business KPIs.",
      "Production maturity comes from predictable operations, clear ownership, and continuous model + workflow tuning.",
    ],
  },
  {
    slug: "multilingual-ai-at-scale-best-practices",
    title: "Multilingual AI at Scale: Practical Best Practices",
    excerpt:
      "What teams should standardize before expanding AI conversations across multiple languages and regions.",
    category: "AI",
    author: "Language Intelligence Team",
    date: "2025-12-20",
    readTime: "6 min read",
    content: [
      "Language expansion without operational standards creates inconsistent quality. Establish evaluation rubrics across major intents first.",
      "Use locale-specific fallback responses and avoid translating policy text blindly across regions.",
      "A multilingual deployment succeeds when quality monitoring is built into every language lane, not only English.",
    ],
  },
];

export const blogCategories = ["All", "AI", "Voice", "Case Studies", "Security", "Product"] as const;
