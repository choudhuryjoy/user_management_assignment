import {User, ValidationResult} from '../types'

/**
 * Validates the name field.
 * @param name The name to validate.
 * @type {string}
 */
function validateName(name: string): ValidationResult {
  if (!name || name.trim() === "") {
    return { isValid: false, error: "Name is required" };
  }
  if (name.length > 50) {
    return {
      isValid: false,
      error: "Name cannot exceed maximum 50 characters",
    };
  }
  return { isValid: true };
}

/**
 * Validates the email field.
 * @param email to validate.
 * @type {string}
 *
 */
function validateEmail(email: string): ValidationResult {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: "Invalid email address" };
  }
  return { isValid: true };
}

/**
 * Validates the age field.
 * @param age The age to validate.
 * @type {Number}
 */
function validateAge(age: number): ValidationResult {
  if (isNaN(age)) {
    return { isValid: false, error: "Age must be a number" };
  }
  if (age < 18 || age > 100) {
    return { isValid: false, error: "Age must be between 18 and 100" };
  }
  return { isValid: true };
}

/**
 * Validates the gender field.
 * @param gender The gender to validate. Must be one of 'male', 'female', or 'other'.
 * @type {string}
 */
function validateGender(gender: string): ValidationResult {
  const lowerCaseGender = gender.toLowerCase();
  const allowedGenders = ["male", "female", "other"];
  if (!allowedGenders.includes(lowerCaseGender)) {
    return {
      isValid: false,
      error: "Gender must be 'male', 'female', or 'other'",
    };
  }
  return { isValid: true };
}

/**
 * Validates the address field.
 * @param address The address to validate.
 * @type {string}
 */
function validateAddress(address: string): ValidationResult {
  if (!address || address.trim() === "") {
    return { isValid: false, error: "Address is required" };
  }
  if (address.length > 100) {
    return {
      isValid: false,
      error: "Address should be maximum 100 characters",
    };
  }
  return { isValid: true };
}

/**
 * Validates the mobileNo field.
 * @param mobileNo The mobile number to validate.
 * @type {string}
 */
function validateMobileNo(mobileNo: string): ValidationResult {
  if (mobileNo.length != 10) {
    for (let i = 0; i < mobileNo.length; i++) {
      if (mobileNo[i] <= "0" && mobileNo[i] >= "9") {
        return {
          isValid: false,
          error: "Mobile number should be a valid 10-digit number",
        };
      }
    }
  }

  return { isValid: true };
}

/**
 * Validates all fields of a user object.
 * @param user The user object to validate.
 * @returns ValidationResult indicating whether all fields are valid or not.
 */
function validateUser(user: User): ValidationResult {
  const nameValidation: ValidationResult = validateName(user.name);
  const emailValidation: ValidationResult = validateEmail(user.email);
  const ageValidation: ValidationResult = validateAge(user.age);
  const genderValidation: ValidationResult = validateGender(user.gender);
  const addressValidation: ValidationResult = validateAddress(user.address);
  const mobileNoValidation: ValidationResult = validateMobileNo(user.mobileNo);

  if (!nameValidation.isValid) {
    return nameValidation;
  }
  if (!emailValidation.isValid) {
    return emailValidation;
  }
  if (!ageValidation.isValid) {
    return ageValidation;
  }
  if (!genderValidation.isValid) {
    return genderValidation;
  }
  if (!addressValidation.isValid) {
    return addressValidation;
  }
  if (!mobileNoValidation.isValid) {
    return mobileNoValidation;
  }

  return { isValid: true };
}

export default validateUser;
