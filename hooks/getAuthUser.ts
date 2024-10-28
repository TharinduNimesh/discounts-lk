import { useAuth } from "./useAuth";
import { useSupabase } from "./useSupabase";

export async function getAuthUser() {
  const supabase = useSupabase();
  const { user: userResponse, session } = await useAuth();
  if (userResponse.data.user === null && session.data.session === null) {
    console.log("User is not signed in");
    return null;
  }

  if (userResponse.data.user === null) {
    return null;
  }

  const { data } = await supabase
    .from("profile")
    .select("*")
    .eq("id", userResponse.data.user.id)
    .single();
  if (data === null) {
    return null;
  }

  return data;
}
