import AuthPage from "@/pages/AuthPage";
import { useSEO } from "@/hooks/useSEO";

export default function Signup() {
  useSEO({
    title: "Sign Up | EtriqAI",
    description: "Create an EtriqAI account.",
    robots: "noindex, follow"
  });
  return <AuthPage defaultMode="signup" />;
}

