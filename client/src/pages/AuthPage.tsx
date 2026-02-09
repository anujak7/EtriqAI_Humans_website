import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "wouter";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { Chrome } from "lucide-react";
import { auth, hasFirebaseConfig } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";
import { upsertUserProfile } from "@/lib/userProfile";

type Mode = "login" | "signup";

function getErrorMessage(error: unknown) {
  const code = (error as { code?: string })?.code;
  if (code === "auth/invalid-credential") return "Invalid email or password.";
  if (code === "auth/user-not-found") return "No account found with this email.";
  if (code === "auth/wrong-password") return "Incorrect password.";
  if (code === "auth/email-already-in-use") return "This email is already registered.";
  if (code === "auth/invalid-email") return "Please enter a valid email.";
  if (code === "auth/weak-password") return "Password should be at least 6 characters.";
  if (code === "auth/popup-closed-by-user") return "Google sign-in popup was closed.";
  return "Unable to process request right now. Please try again.";
}

export default function AuthPage({ defaultMode }: { defaultMode: Mode }) {
  const [, setLocation] = useLocation();
  const { user, loading } = useAuth();
  const [mode, setMode] = useState<Mode>(defaultMode);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  useEffect(() => {
    setMode(defaultMode);
  }, [defaultMode]);

  useEffect(() => {
    if (!loading && user) {
      setLocation("/account");
    }
  }, [loading, setLocation, user]);

  const heading = useMemo(
    () =>
      mode === "login"
        ? {
            title: "Welcome Back",
            subtitle: "Sign in to manage your EtriqAI workspace and deployments.",
            cta: "Login",
            google: "Continue with Google",
          }
        : {
            title: "Create Your Account",
            subtitle: "Create your account to start with EtriqAI.",
            cta: "Create Account",
            google: "Sign up with Google",
          },
    [mode],
  );

  const onAuthSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!auth || !hasFirebaseConfig) {
      setError("Authentication is not configured yet.");
      return;
    }

    if (mode === "signup" && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    setSubmitting(true);
    try {
      if (mode === "login") {
        const result = await signInWithEmailAndPassword(auth, email, password);
        void upsertUserProfile(result.user);
      } else {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        if (fullName.trim()) {
          await updateProfile(result.user, { displayName: fullName.trim() });
        }
        void upsertUserProfile(result.user, {
          fullName: fullName.trim(),
          phone: phone.trim(),
          company: company.trim(),
          role: jobRole.trim(),
          city: city.trim(),
        });
      }
      setLocation("/account");
    } catch (submitError) {
      setError(getErrorMessage(submitError));
    } finally {
      setSubmitting(false);
    }
  };

  const onGoogleAuth = async () => {
    if (!auth || !hasFirebaseConfig) {
      setError("Authentication is not configured yet.");
      return;
    }

    setError("");
    setGoogleLoading(true);
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      void upsertUserProfile(result.user);
      setLocation("/account");
    } catch (submitError) {
      setError(getErrorMessage(submitError));
    } finally {
      setGoogleLoading(false);
    }
  };

  const switchMode = (nextMode: Mode) => {
    setMode(nextMode);
    setError("");
    if (nextMode === "login") {
      setLocation("/login");
    } else {
      setLocation("/signup");
    }
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f7f0ff_50%,#ffffff_100%)] py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <section className="rounded-3xl border border-violet-200 bg-white p-7 md:p-9 shadow-[0_30px_65px_-40px_rgba(124,58,237,0.55)]">
            <div className="flex items-center gap-2 rounded-xl p-1 bg-slate-100 border border-slate-200 w-fit mb-6">
              <button
                type="button"
                onClick={() => switchMode("login")}
                className={`h-9 px-5 rounded-lg text-sm font-semibold transition-colors ${
                  mode === "login"
                    ? "bg-white text-violet-700 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => switchMode("signup")}
                className={`h-9 px-5 rounded-lg text-sm font-semibold transition-colors ${
                  mode === "signup"
                    ? "bg-white text-violet-700 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Sign Up
              </button>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-3">
              {heading.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-fuchsia-600">
                EtriqAI
              </span>
            </h1>
            <p className="text-slate-600 mb-6">{heading.subtitle}</p>

            {!hasFirebaseConfig && (
              <div className="rounded-2xl border border-amber-300 bg-amber-50 p-4 mb-5">
                <p className="text-sm font-semibold text-amber-900">Firebase config missing</p>
                <p className="text-sm text-amber-800 mt-1">
                  Add Firebase env keys in `client/.env` and restart the dev server.
                </p>
              </div>
            )}

            <form onSubmit={onAuthSubmit} className="space-y-4">
              {mode === "signup" && (
                <>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full name"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-violet-500"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone number"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-violet-500"
                    />
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Company"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-violet-500"
                    />
                    <input
                      type="text"
                      value={jobRole}
                      onChange={(e) => setJobRole(e.target.value)}
                      placeholder="Role"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-violet-500"
                    />
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="City"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-violet-500"
                    />
                  </div>
                </>
              )}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-violet-500"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-violet-500"
              />
              {mode === "signup" && (
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm password"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-violet-500"
                />
              )}

              <button
                type="submit"
                disabled={submitting || loading}
                className="w-full h-11 rounded-xl bg-gradient-to-r from-violet-700 to-fuchsia-600 hover:from-violet-800 hover:to-fuchsia-700 text-white font-semibold transition-colors disabled:opacity-70"
              >
                {submitting ? "Please wait..." : heading.cta}
              </button>
            </form>

            <div className="my-5 flex items-center gap-3">
              <span className="h-px bg-slate-200 flex-1" />
              <span className="text-xs uppercase tracking-[0.12em] text-slate-400">or</span>
              <span className="h-px bg-slate-200 flex-1" />
            </div>

            <button
              type="button"
              onClick={onGoogleAuth}
              disabled={googleLoading || loading}
              className="w-full h-11 rounded-xl border border-violet-200 bg-white text-slate-800 hover:bg-violet-50 font-semibold inline-flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
            >
              <Chrome className="w-4 h-4" />
              {googleLoading ? "Connecting..." : heading.google}
            </button>

            {error && <p className="mt-4 text-sm text-rose-600">{error}</p>}

            <Link href="/" className="mt-6 inline-flex items-center text-sm font-medium text-violet-700 hover:text-violet-800">
              ← Back to Home
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
