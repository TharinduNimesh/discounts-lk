interface SignInForm {
  email: string;
  password: string;
}

export function signInValidation(data: SignInForm): string[] {
  const errors = [];
  if (!data.email) {
    errors.push("Your Email Address is required");
  }
  if (!data.password) {
    errors.push("Password is required");
  }
  return errors;
}
