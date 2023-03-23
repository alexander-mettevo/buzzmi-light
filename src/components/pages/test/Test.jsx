import React from 'react';
import ValidationSchema from "../../../../form-validator/ValidationSchema.js";
import {useFormValidator} from "../../../../form-validator/hooks/index.js";

const validationSchema = new ValidationSchema(
  {
    name: [
      { rule: 'required', message: 'This field is required' },
      { rule: 'minLength', value: 3, message: 'Minimum length is 3' },
    ],
  }
);
const Test = () => {
  const { values, errors, isValid, handleChange, handleSubmit } = useFormValidator(validationSchema, (formData) => {
    // Handle form submission, e.g., send data to an API.
  }, {
    showErrorsOnSubmit: false,
  });



  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fieldName">Field Name:</label>
        <input className={'input'} id="fieldName" name="name" value={values.name || ''} onChange={handleChange} />
        {errors.name && <div className="error">{errors.name.join(', ')}</div>}
      </div>

      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export default Test;