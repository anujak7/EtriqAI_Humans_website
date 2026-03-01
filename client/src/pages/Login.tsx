import AuthPage from "@/pages/AuthPage";
import { useSEO } from "@/hooks/useSEO";

export default function Login() {
  useSEO({
    title: "Login | EtriqAI",
    description: "Sign in to your EtriqAI account.",
    robots: "noindex, follow"
  });
  return <AuthPage defaultMode="login" />;
}

