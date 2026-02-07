import { Cpu, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4 col-span-1 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-display tracking-tight text-white">
                Etriq<span className="text-primary">AI</span>
              </span>
            </div>
            <p className="text-white/60 max-w-sm">
              Redefining engagement with emotionally intelligent digital humans. 
              Bridging the gap between human connection and AI efficiency.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} EtriqAI Intelligence Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
