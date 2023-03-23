import React from 'react';
import Form from "../../../reusable/form/Form.jsx";
import NewInput from "../../../reusable/form/items/inputs/NewInput.jsx";
import ValidationSchema from "../../../../../form-validator/ValidationSchema.js";
import {useFormValidator} from "../../../../../form-validator/hooks/index.js";


const validationSchema = new ValidationSchema(
  {
    password: [
      {rule: 'required'},
      {rule: 'password', value: 3},
      {rule: 'leastOneUpperCase'},
      {rule: 'leastOneSpecialCharacter', value: 3},
    ],
    confirmPassword: [
      {rule: 'passwordConfirmation', value: 'password'},
    ],
  }
);

const CreatePasswordForm = () => {
  const {register, handleSubmit, getFieldMessages} = useFormValidator(validationSchema, (formData) => {
    // Handle form submission, e.g., send data to an API.
    console.log('Form submitted:', formData);
  }, {
    showErrorsOnSubmit: false
  });

  return (
    <Form onSubmit={handleSubmit} id='create-password'>
      <NewInput
        label='Create your Password'
        multiValidation={getFieldMessages('password')}
        name='password'
        type='password'
        register={register}
      />

      <NewInput
        label='Confirm password'
        multiValidation={getFieldMessages('confirmPassword')}
        name='confirmPassword'
        type='password'
        register={register}
      />
    </Form>
  );
};

export default CreatePasswordForm;