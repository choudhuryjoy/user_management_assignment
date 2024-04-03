export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  gender: "male" | "female" | "other";
  address: string;
  mobileNo: string;
}

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}
