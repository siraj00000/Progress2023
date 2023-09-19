import { mockLoginData, mockSignupData } from "../data/user-authentication";

interface LoginResponse {
  success: boolean;
}

export const loginUser = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  // Check if the email and password match the mock login data
  if (email === mockLoginData.email && password === mockLoginData.password) {
    return { success: true };
  } else {
    throw new Error("Invalid email or password");
  }
};


interface SignupData {
  email: string;
  password: string;
}

interface SignupResponse {
  success: boolean;
}

export const signupUser = async (data: SignupData): Promise<SignupResponse> => {
  // Check if the data matches the mock signup data
  if (
    data.email === mockSignupData.email &&
    data.password === mockSignupData.password
  ) {
    return { success: true };
  } else {
    throw new Error("Invalid signup data");
  }
};
