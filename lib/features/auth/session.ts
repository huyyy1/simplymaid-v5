import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { type User, type Session } from "@/lib/types";

export async function getSession(): Promise<Session | null> {
  const supabase = createClient();

  try {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    if (error) {
      console.error("Error getting session:", error);
      return null;
    }

    if (!session) {
      return null;
    }

    // Get additional user data
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("id", session.user.id)
      .single();

    if (userError) {
      console.error("Error getting user data:", userError);
      return null;
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

    return {
      user,
      token: session.access_token,
      expiresAt: new Date(session.expires_at!),
    };
  } catch (error) {
    console.error("Error in getSession:", error);
    return null;
  }
}
