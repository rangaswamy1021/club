export interface Member {
  email?: string;
  password?: string;
  mobileNumber?: string;
  currentCity?: string;
  ageGroup?: string;
}

export interface SignUp {
  email?: string;
  password?: string;
  mobileNumber?: string;
  currentCity?: string;
  ageGroup?: string;
}

export interface SignIn {
  email?: string;
  password?: string;
}

export interface ResetPassword {
  email?: string;
  code?: string;
  password?: string;
}

