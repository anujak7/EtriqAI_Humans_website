import { Twitter, Linkedin, Github, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[linear-gradient(180deg,#ffffff_0%,#f7efff_100%)] pt-16 pb-8 border-t border-violet-200/60">
      <div className="container mx-auto px-4">
        <div className="mb-12 rounded-3xl border border-violet-200 bg-[linear-gradient(90deg,#2a1149_0%,#4c1d95_42%,#86198f_100%)] px-6 py-7 md:px-8 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-[0_30px_55px_-40px_rgba(124,58,237,0.8)]">
          <div>
            <p className="text-violet-100/90 text-sm uppercase tracking-[0.16em] font-semibold mb-2">
              Build With EtriqAI
            </p>
            <h3 className="text-white text-2xl md:text-3xl font-bold font-display">
              Launch your first AI employee in 14 days
            </h3>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-violet-700 hover:text-violet-800 px-6 h-12 font-semibold transition-colors"
          >
            Book a Demo
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold font-display tracking-tight text-slate-900 mb-4">
              Etriq<span className="text-violet-600">AI</span>
            </h3>
            <p className="text-slate-600 leading-relaxed max-w-sm">
              Enterprise digital humans for support, sales, and operations with
              human-like voice and emotionally aware conversations.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-5">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-slate-600 hover:text-violet-700 transition-colors">Features</a></li>
              <li><a href="#mission" className="text-slate-600 hover:text-violet-700 transition-colors">Why EtriqAI</a></li>
              <li><a href="#industries" className="text-slate-600 hover:text-violet-700 transition-colors">Industries</a></li>
              <li><a href="#contact" className="text-slate-600 hover:text-violet-700 transition-colors">Book a Demo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-5">Company</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-slate-600 hover:text-violet-700 transition-colors">About</a></li>
              <li><a href="/careers" className="text-slate-600 hover:text-violet-700 transition-colors">Careers</a></li>
              <li><a href="/partners" className="text-slate-600 hover:text-violet-700 transition-colors">Partners</a></li>
              <li><a href="/blog" className="text-slate-600 hover:text-violet-700 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-5">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-slate-600">
                <Mail className="w-4 h-4 mt-1 text-violet-700 shrink-0" />
                <a href="mailto:info@etriqai.com" className="hover:text-violet-700 transition-colors">
                  info@etriqai.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-600">
                <Phone className="w-4 h-4 mt-1 text-violet-700 shrink-0" />
                <a href="tel:+917355841215" className="hover:text-violet-700 transition-colors">
                  +91 7355841215
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-600">
                <MapPin className="w-4 h-4 mt-1 text-violet-700 shrink-0" />
                <span>Gurugram, Haryana</span>
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-4">
              <a href="#" className="text-slate-500 hover:text-violet-700 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-violet-700 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-violet-700 transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-violet-200/70 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} EtriqAI Intelligence Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-sm">
            <a href="/privacy-policy" className="text-slate-500 hover:text-violet-700 transition-colors">Privacy Policy</a>
            <a href="/terms-and-conditions" className="text-slate-500 hover:text-violet-700 transition-colors">Terms & Conditions</a>
            <a href="/cookie-policy" className="text-slate-500 hover:text-violet-700 transition-colors">Cookie Policy</a>
            <a href="/security" className="text-slate-500 hover:text-violet-700 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
