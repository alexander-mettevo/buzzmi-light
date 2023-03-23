import { useState, useCallback } from 'react';

const useFormValidator = (validationSchema, onSubmit, config = {}) => {
  const { showErrorsOnSubmit = true } = config;

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = useCallback(
    async (name, value) => {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));

      if (!showErrorsOnSubmit || isSubmitted) {
        const fieldErrors = await validationSchema.validateField(name, value, values);
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: fieldErrors.length > 0 ? fieldErrors : undefined,
        }));

        setIsValid(Object.values(errors).every((error) => !error));
      }
    },
    [isSubmitted, validationSchema, values]
  );

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setIsSubmitted(true);

      const formErrors = await validationSchema.validate(values);

      setErrors(formErrors);
      setIsValid(Object.values(formErrors).every((error) => !error));

      if (isValid) {
        onSubmit(values);
      }
    },
    [validationSchema, values, onSubmit, isValid]
  );

  const register = (name, options = {}) => {
    const handleFieldChange = async (event) => {
      await handleChange(name, event.target.value);
    };

    return {
      name,
      value: values[name] || '',
      onChange: handleFieldChange,
      errors: errors[name],
      ...options,
    };
  };

  const getFieldMessages = (fieldName) => {
    return validationSchema.getFieldMessages(fieldName);
  };

  return {
    values,
    errors,
    isValid,
    register,
    getFieldMessages,
    handleSubmit,
  };
};


export default useFormValidator;
