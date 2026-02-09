import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight, UserCircle2, LogOut, PencilLine } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import { ProfileQuickEditModal } from "@/components/ProfileQuickEditModal";

export function Navigation() {
  const [, setLocation] = useLocation();
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [quickEditOpen, setQuickEditOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#features");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Why Us", href: "#mission" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as Element[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(`#${visibleEntry.target.id}`);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.2, 0.4, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setActiveSection(href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const displayName = user?.displayName || user?.email?.split("@")[0] || "User";
  const initials = displayName.slice(0, 1).toUpperCase();

  const onLogout = async () => {
    await logout();
    setProfileMenuOpen(false);
    setIsOpen(false);
    setLocation("/login");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "mt-3 md:mt-4 rounded-2xl border transition-all duration-300",
            scrolled
              ? "bg-white/92 backdrop-blur-xl border-violet-200/80 shadow-[0_16px_40px_-26px_rgba(124,58,237,0.55)]"
              : "bg-[linear-gradient(90deg,rgba(255,255,255,0.94),rgba(248,243,255,0.96),rgba(255,255,255,0.94))] backdrop-blur-xl border-violet-200/75 shadow-[0_18px_36px_-28px_rgba(124,58,237,0.45)]",
          )}
        >
          <div className="h-16 md:h-[72px] flex items-center justify-between px-4 md:px-5">
            <Link href="/" className="cursor-pointer">
              <img
                src="/images/etriqai-logo-exact-transparent.png"
                alt="EtriqAI"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </Link>

            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={cn(
                    "text-sm font-semibold transition-colors duration-200 whitespace-nowrap",
                    activeSection === link.href
                      ? "text-violet-600"
                      : "text-slate-700 hover:text-violet-700",
                  )}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-2">
              {user ? (
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setProfileMenuOpen((prev) => !prev)}
                    className={cn(
                      "h-10 rounded-full border px-3 inline-flex items-center gap-2",
                      scrolled
                        ? "border-violet-200 bg-white text-slate-800"
                        : "border-violet-200 bg-white text-slate-800",
                    )}
                  >
                    <span className="w-7 h-7 rounded-full bg-violet-700 text-white text-xs font-bold inline-flex items-center justify-center">
                      {initials}
                    </span>
                    <span className="text-sm font-semibold max-w-[120px] truncate">{displayName}</span>
                  </button>
                  {profileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-52 rounded-xl border border-violet-200 bg-white shadow-[0_20px_40px_-30px_rgba(124,58,237,0.55)] p-2">
                      <Link
                        href="/account"
                        className="w-full rounded-lg px-3 h-10 text-sm text-slate-700 hover:bg-violet-50 inline-flex items-center gap-2"
                        onClick={() => setProfileMenuOpen(false)}
                      >
                        <UserCircle2 className="w-4 h-4 text-violet-700" />
                        My Account
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          setProfileMenuOpen(false);
                          setQuickEditOpen(true);
                        }}
                        className="w-full rounded-lg px-3 h-10 text-sm text-slate-700 hover:bg-violet-50 inline-flex items-center gap-2"
                      >
                        <PencilLine className="w-4 h-4 text-violet-700" />
                        Quick Edit
                      </button>
                      <button
                        type="button"
                        onClick={onLogout}
                        className="w-full rounded-lg px-3 h-10 text-sm text-rose-600 hover:bg-rose-50 inline-flex items-center gap-2"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link
                    href="/login"
                    className={cn(
                      "rounded-full px-4 h-10 text-sm font-semibold inline-flex items-center transition-colors",
                      "text-violet-700 hover:bg-violet-50",
                    )}
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className={cn(
                      "rounded-full px-4 h-10 text-sm font-semibold inline-flex items-center transition-colors",
                      "text-violet-700 hover:bg-violet-50",
                    )}
                  >
                    Sign Up
                  </Link>
                  <button
                    className={cn(
                      "rounded-full px-5 h-10 text-sm font-semibold inline-flex items-center gap-2 transition-all duration-200",
                      "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white hover:from-violet-700 hover:to-fuchsia-600",
                    )}
                    onClick={() => handleNavClick("#contact")}
                    type="button"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>

            <button
              className={cn(
                "md:hidden w-10 h-10 rounded-full border inline-flex items-center justify-center transition-colors",
                scrolled
                  ? "text-slate-800 border-violet-200 bg-white"
                  : "text-slate-800 border-violet-200 bg-white",
              )}
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="container mx-auto px-4 md:px-6 md:hidden">
          <div className="mt-3 rounded-2xl border border-violet-200/70 bg-white/95 backdrop-blur-xl p-4 flex flex-col gap-2 shadow-[0_20px_40px_-30px_rgba(124,58,237,0.6)] animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={cn(
                  "px-3 py-2 rounded-lg text-base font-medium transition-colors",
                  activeSection === link.href
                    ? "text-violet-700 bg-violet-50"
                    : "text-slate-700 hover:text-violet-700 hover:bg-violet-50/70",
                )}
              >
                {link.name}
              </a>
            ))}
            <button
              className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 mt-2 h-11 rounded-xl text-sm font-semibold text-white transition-colors"
              onClick={() => handleNavClick("#contact")}
              type="button"
            >
              Get Started
            </button>
            {user ? (
              <>
                <Link
                  href="/account"
                  className="w-full h-11 rounded-xl border border-violet-200 text-violet-700 font-semibold inline-flex items-center justify-center hover:bg-violet-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  My Account
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setQuickEditOpen(true);
                  }}
                  className="w-full h-11 rounded-xl border border-violet-200 text-violet-700 font-semibold inline-flex items-center justify-center hover:bg-violet-50 transition-colors"
                >
                  Quick Edit Profile
                </button>
                <button
                  type="button"
                  onClick={onLogout}
                  className="w-full h-11 rounded-xl border border-rose-200 text-rose-600 font-semibold inline-flex items-center justify-center hover:bg-rose-50 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="w-full h-11 rounded-xl border border-violet-200 text-violet-700 font-semibold inline-flex items-center justify-center hover:bg-violet-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="w-full h-11 rounded-xl border border-violet-200 text-violet-700 font-semibold inline-flex items-center justify-center hover:bg-violet-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}

      <ProfileQuickEditModal
        open={quickEditOpen}
        onClose={() => setQuickEditOpen(false)}
      />
    </nav>
  );
}
