import {useCallback, useState} from "react";

export const useForm = (defaultValues = {}) => {
  const [formData, setFormData] = useState(defaultValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = useCallback((event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }, []);

  const register = (name) => {
    return {
      name,
      ref: (element) => {
        if (element) {
          element.value = formData[name] || '';
          element.addEventListener('input', handleInputChange);
        }
      },
    };
  };

  const handleSubmit = (onSubmit) => (event) => {
    event.preventDefault();
    setErrors({});
    const validationErrors = validate(formData);
    if (!Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onSubmit(formData);
    }
  };

  const validate = (data) => {
    // Perform validation using your validation library of choice (e.g. Yup)
    // and return an object with any validation errors.
    // For example:
    const errors = {};
    if (!data.name) {
      errors.name = 'Name is required';
    }
    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Email is invalid';
    }
    return errors;
  };

  const isValidEmail = (email) => {
    // Use a regular expression or some other method to validate the email address.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return {
    formData,
    errors,
    register,
    handleSubmit,
  };
};