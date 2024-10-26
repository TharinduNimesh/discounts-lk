import { useSupabase } from "@/hooks/useSupabase";

interface SignUpForm {
  name: string;
  email: string;
  password: string;
}

export async function signUpValidation(data: SignUpForm): Promise<string[]> {
  const errors: string[] = [];

  // Validate name
  if (!data.name) {
    errors.push("Your name is required");
  }

  // Validate email
  const emailError = await validateEmail(data.email);
  if (emailError) {
    errors.push(emailError);
  }

  // Validate password
  const passwordError = validatePassword(data.password);
  if (passwordError) {
    errors.push(passwordError);
  }

  return errors;
}

async function validateEmail(email: string): Promise<string | undefined> {
  if (!email) {
    return "Your Email Address is required";
  }

  const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegexp.test(email)) {
    return "Please enter a valid Email Address";
  }

  const supabase = useSupabase();
  const { data: isExists, error } = await supabase.rpc("is_user_exists", {
    email_input: email,
  });

  if (error) {
    console.error("Error checking if user exists:", error);
  } else if (isExists) {
    return "This Email Address is already in use";
  }
}

function validatePassword(password: string): string | undefined {
  if (!password) {
    return "Password is required";
  }

  const passwordRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (!passwordRegexp.test(password)) {
    return "Password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, and 1 number";
  }
}
