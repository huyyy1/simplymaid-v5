"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { type User, type Session, type AuthState } from "@/lib/types";
import { create } from "zustand";

interface AuthStore extends AuthState {
  setUser: (user: User | null) => void;
  setSession: (session: Session | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: AuthStore["error"]) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  session: null,
  loading: true,
  error: null,
  setUser: (user) => set({ user }),
  setSession: (session) => set({ session }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));

export function useAuth() {
  const router = useRouter();
  const { user, session, loading, error, setUser, setSession, setLoading, setError } =
    useAuthStore();
  const supabase = createClient();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        // Get additional user data
        const { data: userData, error: userError } = await supabase
          .from("users")
          .select("*")
          .eq("id", session.user.id)
          .single();

        if (userError) {
          setError({
            code: "USER_DATA_ERROR",
            message: "Error fetching user data",
            status: 500,
          });
          return;
        }

        const user: User = {
          id: userData.id,
          email: userData.email,
          firstName: userData.first_name,
          lastName: userData.last_name,
          phone: userData.phone,
          role: userData.role,
          status: userData.status,
          createdAt: new Date(userData.created_at),
          updatedAt: new Date(userData.updated_at),
        };

        setUser(user);
        setSession({
          user,
          token: session.access_token,
          expiresAt: new Date(session.expires_at!),
        });
      } else {
        setUser(null);
        setSession(null);
      }
      setLoading(false);
      router.refresh();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase, router, setUser, setSession, setLoading, setError]);

  return { user, session, loading, error };
}
