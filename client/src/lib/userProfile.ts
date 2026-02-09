import type { User } from "firebase/auth";
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  type Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export type UserProfile = {
  uid: string;
  email: string;
  fullName: string;
  phone?: string;
  company?: string;
  role?: string;
  city?: string;
  provider?: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
  lastLoginAt?: Timestamp;
};

function providerName(user: User) {
  return user.providerData[0]?.providerId || "password";
}

const localKey = (uid: string) => `etriq_profile_${uid}`;

function toLocalProfile(user: User, extra?: Partial<UserProfile>): UserProfile {
  return {
    uid: user.uid,
    email: user.email || "",
    fullName: extra?.fullName || user.displayName || "",
    phone: extra?.phone || "",
    company: extra?.company || "",
    role: extra?.role || "",
    city: extra?.city || "",
    provider: extra?.provider || providerName(user),
  };
}

export function getLocalUserProfile(uid: string) {
  try {
    const raw = localStorage.getItem(localKey(uid));
    return raw ? (JSON.parse(raw) as UserProfile) : null;
  } catch {
    return null;
  }
}

export function saveLocalUserProfile(profile: UserProfile) {
  try {
    localStorage.setItem(localKey(profile.uid), JSON.stringify(profile));
  } catch {
    // ignore localStorage failures
  }
}

async function withTimeout<T>(promise: Promise<T>, ms = 1800): Promise<T> {
  return new Promise((resolve, reject) => {
    const id = setTimeout(() => reject(new Error("timeout")), ms);
    promise
      .then((value) => {
        clearTimeout(id);
        resolve(value);
      })
      .catch((error) => {
        clearTimeout(id);
        reject(error);
      });
  });
}

export async function upsertUserProfile(
  user: User,
  extra?: Partial<Pick<UserProfile, "phone" | "company" | "role" | "city" | "fullName">>,
) {
  const base = toLocalProfile(user, extra);
  saveLocalUserProfile(base);

  if (!db || !user.email) return base;
  const ref = doc(db, "users", user.uid);
  try {
    const existing = await withTimeout(getDoc(ref));
    await withTimeout(
      setDoc(
        ref,
        {
          uid: user.uid,
          email: user.email,
          fullName: extra?.fullName || user.displayName || existing.data()?.fullName || "",
          phone: extra?.phone || existing.data()?.phone || "",
          company: extra?.company || existing.data()?.company || "",
          role: extra?.role || existing.data()?.role || "",
          city: extra?.city || existing.data()?.city || "",
          provider: providerName(user),
          updatedAt: serverTimestamp(),
          lastLoginAt: serverTimestamp(),
          createdAt: existing.exists()
            ? existing.data()?.createdAt || serverTimestamp()
            : serverTimestamp(),
        },
        { merge: true },
      ),
    );
  } catch {
    // ignore db issues, local profile is already saved
  }
  return base;
}

export async function getUserProfile(uid: string, user?: User | null) {
  const local = getLocalUserProfile(uid);
  if (!db) return local || (user ? toLocalProfile(user) : null);

  try {
    const ref = doc(db, "users", uid);
    const snap = await withTimeout(getDoc(ref));
    if (snap.exists()) {
      const data = snap.data() as UserProfile;
      saveLocalUserProfile({
        ...(user ? toLocalProfile(user) : {}),
        ...data,
      } as UserProfile);
      return data;
    }
  } catch {
    // fallback to local
  }

  return local || (user ? toLocalProfile(user) : null);
}

export async function saveUserProfileEdits(
  user: User,
  updates: Partial<Pick<UserProfile, "fullName" | "phone" | "company" | "role" | "city">>,
) {
  const merged: UserProfile = {
    ...toLocalProfile(user),
    ...(getLocalUserProfile(user.uid) || {}),
    ...updates,
  };
  saveLocalUserProfile(merged);

  if (!db || !user.email) return merged;
  try {
    await withTimeout(
      setDoc(
        doc(db, "users", user.uid),
        {
          uid: user.uid,
          email: user.email,
          ...updates,
          updatedAt: serverTimestamp(),
        },
        { merge: true },
      ),
    );
  } catch {
    // keep local data only
  }
  return merged;
}
