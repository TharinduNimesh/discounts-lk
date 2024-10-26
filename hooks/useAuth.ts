import { Session, UserResponse } from "@supabase/supabase-js";
import { useSupabase } from "./useSupabase";

export async function useAuth() {
  const supabase = useSupabase();

  const [session, user] = await Promise.all([
    supabase.auth.getSession(),
    supabase.auth.getUser(),
  ]);

  return { session, user };
}
