import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import {
  Building2,
  IdCard,
  LogOut,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UserCircle2,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import {
  getUserProfile,
  getLocalUserProfile,
  saveUserProfileEdits,
  upsertUserProfile,
  type UserProfile,
} from "@/lib/userProfile";

export default function Account() {
  const [, setLocation] = useLocation();
  const { user, loading, logout } = useAuth();
  const [submitting, setSubmitting] = useState(false);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [profileLoading, setProfileLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    company: "",
    role: "",
    city: "",
  });

  useEffect(() => {
    if (!loading && !user) {
      setLocation("/login");
    }
  }, [loading, setLocation, user]);

  useEffect(() => {
    const load = async () => {
      if (!user) return;
      setProfileLoading(true);
      const immediate = getLocalUserProfile(user.uid) || {
        uid: user.uid,
        email: user.email || "",
        fullName: user.displayName || "",
      };
      setProfile(immediate);
      setForm({
        fullName: immediate.fullName || "",
        phone: immediate.phone || "",
        company: immediate.company || "",
        role: immediate.role || "",
        city: immediate.city || "",
      });
      try {
        void upsertUserProfile(user);
        const data = await getUserProfile(user.uid, user);
        if (data) {
          setProfile(data);
          setForm({
            fullName: data.fullName || "",
            phone: data.phone || "",
            company: data.company || "",
            role: data.role || "",
            city: data.city || "",
          });
        }
      } finally {
        setProfileLoading(false);
      }
    };
    void load();
  }, [user]);

  const onSave = async () => {
    if (!user) return;
    setSaveMsg("");
    setSaving(true);
    try {
      const updated = await saveUserProfileEdits(user, {
        fullName: form.fullName.trim(),
        phone: form.phone.trim(),
        company: form.company.trim(),
        role: form.role.trim(),
        city: form.city.trim(),
      });
      setProfile(updated);
      setEditMode(false);
      setSaveMsg("Profile updated successfully.");
    } catch {
      setSaveMsg("Unable to save profile right now. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const onLogout = async () => {
    setSubmitting(true);
    await logout();
    setSubmitting(false);
    setLocation("/login");
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f9f5ff_55%,#ffffff_100%)] flex items-center justify-center">
        <p className="text-slate-600">Loading account...</p>
      </main>
    );
  }

  const formatDate = (value: unknown) => {
    if (!value || typeof value !== "object") return "Not available";
    const ts = value as { toDate?: () => Date };
    return ts.toDate ? ts.toDate().toLocaleString() : "Not available";
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f9f5ff_55%,#ffffff_100%)] py-12">
      <div className="container mx-auto px-4">
        <section className="max-w-4xl mx-auto rounded-3xl border border-violet-200 bg-white p-8 md:p-10 shadow-[0_30px_60px_-35px_rgba(124,58,237,0.45)]">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-violet-700 mb-4">
            My Account
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-6">
            Welcome to EtriqAI
          </h1>

          <div className="rounded-2xl border border-violet-200 bg-[linear-gradient(155deg,#ffffff_0%,#faf5ff_100%)] p-5">
            {profileLoading ? (
              <p className="text-slate-600">Loading profile details...</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <UserCircle2 className="w-5 h-5 text-violet-700 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.1em] text-slate-500">Name</p>
                    {editMode ? (
                      <input
                        value={form.fullName}
                        onChange={(e) => setForm((prev) => ({ ...prev, fullName: e.target.value }))}
                        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:border-violet-500"
                        placeholder="Full name"
                      />
                    ) : (
                      <p className="text-slate-900 font-medium">
                        {profile?.fullName || user?.displayName || "Not provided"}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-violet-700 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.1em] text-slate-500">Email</p>
                    <p className="text-slate-900 font-medium">{profile?.email || user?.email || "-"}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-violet-700 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.1em] text-slate-500">Phone</p>
                    {editMode ? (
                      <input
                        value={form.phone}
                        onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:border-violet-500"
                        placeholder="Phone"
                      />
                    ) : (
                      <p className="text-slate-900 font-medium">{profile?.phone || "Not provided"}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-violet-700 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.1em] text-slate-500">Company</p>
                    {editMode ? (
                      <input
                        value={form.company}
                        onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
                        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:border-violet-500"
                        placeholder="Company"
                      />
                    ) : (
                      <p className="text-slate-900 font-medium">{profile?.company || "Not provided"}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IdCard className="w-5 h-5 text-violet-700 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.1em] text-slate-500">Role</p>
                    {editMode ? (
                      <input
                        value={form.role}
                        onChange={(e) => setForm((prev) => ({ ...prev, role: e.target.value }))}
                        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:border-violet-500"
                        placeholder="Role"
                      />
                    ) : (
                      <p className="text-slate-900 font-medium">{profile?.role || "Not provided"}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-violet-700 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.1em] text-slate-500">City</p>
                    {editMode ? (
                      <input
                        value={form.city}
                        onChange={(e) => setForm((prev) => ({ ...prev, city: e.target.value }))}
                        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:border-violet-500"
                        placeholder="City"
                      />
                    ) : (
                      <p className="text-slate-900 font-medium">{profile?.city || "Not provided"}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-violet-700 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.1em] text-slate-500">Login Method</p>
                    <p className="text-slate-900 font-medium">{profile?.provider || "password"}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-violet-700 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.1em] text-slate-500">Email Verified</p>
                    <p className="text-slate-900 font-medium">{user?.emailVerified ? "Yes" : "No"}</p>
                  </div>
                </div>
                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
                  <div className="rounded-xl border border-violet-200 bg-white p-3">
                    <p className="text-xs uppercase tracking-[0.1em] text-slate-500">Account Created</p>
                    <p className="text-sm text-slate-900 font-medium mt-1">
                      {formatDate(profile?.createdAt)}
                    </p>
                  </div>
                  <div className="rounded-xl border border-violet-200 bg-white p-3">
                    <p className="text-xs uppercase tracking-[0.1em] text-slate-500">Last Login</p>
                    <p className="text-sm text-slate-900 font-medium mt-1">
                      {formatDate(profile?.lastLoginAt)}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {!editMode ? (
              <button
                type="button"
                onClick={() => setEditMode(true)}
                className="inline-flex items-center gap-2 rounded-xl border border-violet-200 text-violet-700 hover:bg-violet-50 px-5 h-11 font-semibold transition-colors"
              >
                Edit Profile
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={onSave}
                  disabled={saving}
                  className="inline-flex items-center gap-2 rounded-xl bg-violet-700 hover:bg-violet-800 text-white px-5 h-11 font-semibold transition-colors disabled:opacity-70"
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
                <button
                  type="button"
                  onClick={() => setEditMode(false)}
                  className="inline-flex items-center gap-2 rounded-xl border border-violet-200 text-violet-700 hover:bg-violet-50 px-5 h-11 font-semibold transition-colors"
                >
                  Cancel
                </button>
              </>
            )}
            <button
              type="button"
              onClick={onLogout}
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-xl bg-violet-700 hover:bg-violet-800 text-white px-5 h-11 font-semibold transition-colors disabled:opacity-70"
            >
              <LogOut className="w-4 h-4" />
              {submitting ? "Logging out..." : "Logout"}
            </button>
            <Link
              href="/"
              className="inline-flex items-center rounded-xl border border-violet-200 text-violet-700 hover:bg-violet-50 px-5 h-11 font-semibold transition-colors"
            >
              Back to Home
            </Link>
          </div>
          {saveMsg && (
            <p
              className={`mt-4 text-sm ${
                saveMsg.includes("successfully") ? "text-emerald-600" : "text-rose-600"
              }`}
            >
              {saveMsg}
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
