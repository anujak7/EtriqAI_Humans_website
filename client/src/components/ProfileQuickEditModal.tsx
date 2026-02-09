import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import {
  getLocalUserProfile,
  getUserProfile,
  saveUserProfileEdits,
} from "@/lib/userProfile";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function ProfileQuickEditModal({ open, onClose }: Props) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    company: "",
    role: "",
    city: "",
  });

  useEffect(() => {
    if (!open || !user) return;
    const local = getLocalUserProfile(user.uid);
    setForm({
      fullName: local?.fullName || user.displayName || "",
      phone: local?.phone || "",
      company: local?.company || "",
      role: local?.role || "",
      city: local?.city || "",
    });

    const fetchProfile = async () => {
      setLoading(true);
      try {
        const remote = await getUserProfile(user.uid, user);
        if (remote) {
          setForm({
            fullName: remote.fullName || user.displayName || "",
            phone: remote.phone || "",
            company: remote.company || "",
            role: remote.role || "",
            city: remote.city || "",
          });
        }
      } finally {
        setLoading(false);
      }
    };
    void fetchProfile();
  }, [open, user]);

  useEffect(() => {
    if (!open) return;
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!open || !user) return null;

  const onSave = async () => {
    setSaving(true);
    setMessage("");
    try {
      await saveUserProfileEdits(user, {
        fullName: form.fullName.trim(),
        phone: form.phone.trim(),
        company: form.company.trim(),
        role: form.role.trim(),
        city: form.city.trim(),
      });
      setMessage("Profile updated successfully.");
    } catch {
      setMessage("Could not save profile right now. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]"
        onClick={onClose}
        aria-label="Close profile modal"
      />

      <section className="relative w-full max-w-xl rounded-2xl border border-violet-200 bg-white p-6 md:p-7 shadow-[0_35px_65px_-30px_rgba(76,29,149,0.55)]">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-2xl font-bold text-slate-900">Quick Edit Profile</h3>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-violet-200 text-slate-600 hover:text-slate-900 hover:bg-violet-50 inline-flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            value={form.fullName}
            onChange={(e) => setForm((p) => ({ ...p, fullName: e.target.value }))}
            placeholder="Full name"
            className="sm:col-span-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none focus:border-violet-500"
          />
          <input
            value={form.phone}
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
            placeholder="Phone number"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none focus:border-violet-500"
          />
          <input
            value={form.company}
            onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
            placeholder="Company"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none focus:border-violet-500"
          />
          <input
            value={form.role}
            onChange={(e) => setForm((p) => ({ ...p, role: e.target.value }))}
            placeholder="Role"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none focus:border-violet-500"
          />
          <input
            value={form.city}
            onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))}
            placeholder="City"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none focus:border-violet-500"
          />
        </div>

        <div className="mt-5 flex flex-wrap gap-3 items-center">
          <button
            type="button"
            onClick={onSave}
            disabled={saving || loading}
            className="rounded-xl bg-violet-700 hover:bg-violet-800 text-white h-11 px-5 font-semibold disabled:opacity-70"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-violet-200 text-violet-700 hover:bg-violet-50 h-11 px-5 font-semibold"
          >
            Close
          </button>
          {loading && <span className="text-sm text-slate-500">Refreshing latest profile...</span>}
        </div>

        {message && (
          <p
            className={`mt-4 text-sm ${
              message.includes("successfully") ? "text-emerald-600" : "text-rose-600"
            }`}
          >
            {message}
          </p>
        )}
      </section>
    </div>
  );
}

