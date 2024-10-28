import { useSupabase } from "@/hooks/useSupabase";
import { AuthTokenResponsePassword } from "@supabase/supabase-js";
import { create } from "zustand";
import * as FileSystem from "expo-file-system";
import { SUPABASE_STORAGE_URL } from "@/constants/Supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Profile {
  id: string;
  name: string | null;
  email: string;
  profile_image: string | null;
  profile_image_local_uri?: string | null;
  created_at: string;
}

interface AuthStore {
  isLoggedIn: boolean;
  user: Profile | null;
  signIn: (
    email: string,
    password: string
  ) => Promise<AuthTokenResponsePassword>;
  signOut: () => Promise<void>;
  setLocalUri: (uri?: string) => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  user: null,
  signIn: async (email: string, password: string) => {
    const supabase = useSupabase();
    const response = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (response.error || response.data.user === null) {
      set({ isLoggedIn: false });
      return response;
    }

    const { data: profile } = await supabase
      .from("profile")
      .select()
      .eq("id", response.data.user.id)
      .single();

    set({ user: profile, isLoggedIn: true });
    set({ isLoggedIn: true });
    return response;
  },
  signOut: async () => {
    const supabase = useSupabase();
    await supabase.auth.signOut();
    set({ user: null });
    set({ isLoggedIn: false });
  },
  setLocalUri: async (uri?: string) => {
    const user = useAuthStore.getState().user;
    if (user === null) {
      return;
    }

    if (uri === undefined) {
      if (user.profile_image === null) {
        return;
      }
      const path = await getLatestProfileImageFromStorage();
      if (path !== null) {
        uri = path;
      } else {
        const path = `${FileSystem.cacheDirectory}profile/${Date.now()}.png`;

        const url = `${SUPABASE_STORAGE_URL}/profile/${user.profile_image}`;
        await FileSystem.downloadAsync(url, path);

        uri = path;
      }
    }

    set({
      user: {
        ...user,
        profile_image_local_uri: uri,
      },
    });
  },
}));

async function getLatestProfileImageFromStorage(): Promise<string | null> {
  const path = await AsyncStorage.getItem("profile_image_local_uri");

  return path;
}
