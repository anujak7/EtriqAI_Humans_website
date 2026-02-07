import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { 
  Mic, 
  Brain, 
  Clock, 
  Globe, 
  Layers, 
  Briefcase,
  Bot,
  MessageSquare,
  Sparkles
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Mic className="w-8 h-8 text-secondary" />,
      title: "Real-Time Voice",
      description: "Natural, latency-free voice interactions that feel like talking to a real human."
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Emotional Intelligence",
      description: "Avatars that understand context, tone, and sentiment to respond with empathy.",
      image: "/images/emotion-analysis.png"
    },
    {
      icon: <Clock className="w-8 h-8 text-secondary" />,
      title: "24/7 Availability",
      description: "Digital employees that never sleep, ensuring your business is always on."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Multi-Language",
      description: "Fluent communication in multiple languages to serve a global audience instantly."
    },
    {
      icon: <Layers className="w-8 h-8 text-secondary" />,
      title: "Cross-Industry",
      description: "Adaptable solutions for Banking, Retail, HR, Education, and more."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "Custom Expertise",
      description: "Train your digital human on your specific domain knowledge and company data."
    }
  ];

  const industries = [
    "Banking & Finance",
    "Retail & E-commerce",
    "Education & Training",
    "HR & Recruitment",
    "Customer Support",
    "Healthcare"
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary/30">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium tracking-wide text-white/80 uppercase">Next Gen AI Employees</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-8"
          >
            <span className="block text-white">The Future of</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary animate-gradient-x">
              Human Connection
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
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
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform duration-200 shadow-xl shadow-white/10"
            >
              Get Started Now
            </button>
            <button 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 text-white font-medium text-lg border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Explore Features
            </button>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Built for Enterprise Intelligence</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Our digital humans aren't just chatbots. They see, hear, and understand emotion to deliver truly personalized experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/50 transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-6 p-4 rounded-2xl bg-black/50 w-fit border border-white/10 group-hover:border-primary/50 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed mb-6">{feature.description}</p>
                  
                  {feature.image && (
                    <div className="mt-auto rounded-xl overflow-hidden border border-white/10">
                      <img 
                        src={feature.image} 
                        alt={feature.title} 
                        className="w-full h-40 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Why Us */}
      <section id="mission" className="py-32 relative overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                <Bot className="w-4 h-4" />
                <span>Our Mission</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold font-display mb-8 leading-tight">
                Empathy at Scale.<br />
                <span className="text-white/40">Efficiency without Compromise.</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Beyond Chatbots</h4>
                    <p className="text-white/60">Traditional chatbots are rigid. Our digital humans understand context, remember history, and adapt to the user's emotional state.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Layers className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Seamless Integration</h4>
                    <p className="text-white/60">Designed to plug directly into your existing CRM, HR, and support infrastructure without disrupting workflows.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Image Placeholder - Descriptive comment for stock image if needed, but using CSS art for now */}
              <div className="aspect-square rounded-3xl bg-gradient-to-tr from-white/10 to-transparent border border-white/10 p-8 flex items-center justify-center relative overflow-hidden backdrop-blur-sm neon-glow">
                {/* Decorative Elements simulating AI interface */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20" />
                <div className="relative w-full h-full border border-white/10 rounded-2xl flex items-center justify-center bg-black/40">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-secondary blur-2xl animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Brain className="w-32 h-32 text-white/90" />
                  </div>
                  
                  {/* Floating UI Elements */}
                  <div className="absolute top-8 right-8 px-4 py-2 bg-black/60 rounded-lg border border-white/10 text-xs font-mono text-secondary">
                    Analysis: 98%
                  </div>
                  <div className="absolute bottom-8 left-8 px-4 py-2 bg-black/60 rounded-lg border border-white/10 text-xs font-mono text-primary">
                    Emotion: Joy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital AI Solution Video Section */}
      <section className="py-32 relative bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Real-World Impact</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-8">
                Addressing Critical Challenges in Healthcare
              </h2>
              <p className="text-xl text-white/60 mb-8 leading-relaxed">
                Our digital humans act as empathetic first points of contact in hospitals, handling receptionist duties, managing appointments, and addressing patient inquiries with a professional touch.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white/80">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Reduces staff burnout by handling repetitive tasks</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Ensures 24/7 empathetic patient support</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Multilingual support for diverse patient needs</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <video 
                src="/videos/hospital-ai.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
                <p className="text-sm font-mono text-secondary">AI RECEPTIONIST ACTIVE: Handling Patient Check-in</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Marquee/Grid */}
      <section id="industries" className="py-24 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold font-display uppercase tracking-widest text-white/80">Powering Industries</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {industries.map((industry, i) => (
              <span 
                key={i}
                className="px-6 py-3 rounded-full border border-white/10 bg-black/30 text-white/70 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default text-sm md:text-base font-medium"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
                Ready to transform<br />your workforce?
              </h2>
              <p className="text-xl text-white/60 mb-12">
                Join the forward-thinking enterprises already using EtriqAI to scale their operations.
              </p>
              
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <h4 className="text-lg font-bold text-white mb-2">EtriqAI Intelligence Private Limited</h4>
                  <p className="text-white/60">Redefining human-AI interaction.</p>
                </div>
                
                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20">
                  <h4 className="text-lg font-bold text-white mb-2">Startup Friendly</h4>
                  <p className="text-white/60">Scalable plans designed for growth-stage companies.</p>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
