/**
 * @fileoverview
 * This file contains a collection of validation functions to be used in form validation.
 * These functions are designed to be easily composable and customizable for various validation scenarios.
 */

/**
 * Validation function for checking if a value is not empty.
 * @returns {function(*): boolean} A function that accepts a value and returns true if the value is not empty, otherwise false.
 */
export const required = () => (value) => {
  return value !== undefined && value !== null && value !== '';
};

/**
 * Validation function for checking if a string has a minimum length.
 * @param {number} min - The minimum length of the string.
 * @returns {function(*): boolean} A function that accepts a value and returns true if the value is a string and its length is greater than or equal to the minimum length, otherwise false.
 */
export const minLength = (min) => (value) => {
  return typeof value === 'string' && value.length >= min;
};

/**
 * Validation function for checking if a string has a maximum length.
 * @param {number} max - The maximum length of the string.
 * @returns {function(*): boolean} A function that accepts a value and returns true if the value is a string and its length is less than or equal to the maximum length, otherwise false.
 */
export const maxLength = (max) => (value) => {
  return typeof value === 'string' && value.length <= max;
};

/**
 * Validation function for checking if a value matches a regular expression pattern.
 * @param {RegExp} regex - The regular expression pattern to match.
 * @returns {function(*): boolean} A function that accepts a value and returns true if the value matches the pattern, otherwise false.
 */
export const pattern = (regex) => (value) => {
  return regex.test(value);
};

/**
 * Validation function for checking if a numeric value is greater than or equal to a minimum value.
 * @param {number} min - The minimum value.
 * @returns {function(*): boolean} A function that accepts a value and returns true if the value is a number and greater than or equal to the minimum value, otherwise false.
 */
export const minValue = (min) => (value) => {
  return !isNaN(value) && parseFloat(value) >= min;
};

/**
 * Validation function for checking if a numeric value is less than or equal to a maximum value.
 * @param {number} max - The maximum value.
 * @returns {function(*): boolean} A function that accepts a value and returns true if the value is a number and less than or equal to the maximum value, otherwise false.
 */
export const maxValue = (max) => (value) => {
  return typeof value === 'number' && value <= max;
};

/**
 * Validation function for checking if a value is a valid email address.
 * @returns {function(*): *}
 */
export const password = () => (value) => {
  return value.length >= 8 && value.length <= 20;
}


/**
 * Validation function for checking if a value is a valid email address.
 * @returns {function(*): boolean}
 */
export const leastOneUpperCase = () => (value) => {
  return /[A-Z]/.test(value);
}

/**
 * Validation function for checking if a value is a valid email address.
 * @returns {function(*): boolean}
 */
export const leastOneSpecialCharacter = () => (value) => {
  return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);
}


/**
 * Confirm password
 * @returns {function(*, *): boolean}
 */

export const passwordConfirmation = (passwordFieldName) => (value, formData) => {
  return value === formData[passwordFieldName];
};

/**
 * Email validation
 * @returns {function(*): boolean}
 */

export const email = () => (value) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
}

/**
 * Phone or email validation. Example: +380123456789 or 0991234567
 * @returns {function(*): boolean}
 */

export const phoneOrEmail = () => (value) => {
  return /^[+]?[0-9]{10,12}$/.test(value) || /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
}

/**
 * Count digits validation
 * @returns {function(*): boolean}
 */

export const countDigits = (count) => (value) => {
  return value.length === count;
}

/**
 * Country phone code validation
 * @returns {function(*): boolean}
 */

export const countryPhoneCode = () => (value) => {
  return /^[+]?[0-9]{1,3}$/.test(value);
}

/**
 * Phone validation
 * @returns {function(*): boolean}
 */

export const phone = () => (value) => {
  return /^[+]?[0-9]{10,12}$/.test(value);
}

/**
 * 18+ validation
 * @returns {function(*): boolean}
 */

export const age18Plus = () => (value) => {
  const birthDate = new Date(value);
  const currentDate = new Date();
  const ageDifference = currentDate - birthDate;
  const ageInYears = ageDifference / (1000 * 60 * 60 * 24 * 365.25);
  return ageInYears >= 18;
}

export const dateOfBirth = () => (value) => {
  const birthDate = new Date(value);
  const currentDate = new Date();
  const ageDifference = currentDate - birthDate;
  const ageInYears = ageDifference / (1000 * 60 * 60 * 24 * 365.25);
  return ageInYears >= 18 && birthDate.getFullYear() > 1899 && birthDate < currentDate;
}