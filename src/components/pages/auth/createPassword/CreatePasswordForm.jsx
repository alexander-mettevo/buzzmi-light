import React from 'react';
import Form from "../../../reusable/form/Form.jsx";
import Input from "../../../reusable/form/items/inputs/Input.jsx";
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

const CreatePasswordForm = ({passwordLabel = 'Create your Password', submitHandler }) => {
  const {register, handleSubmit, getFieldMessages} = useFormValidator(validationSchema, submitHandler, {
    showErrorsOnSubmit: false
  });

  return (
    <Form formClassName={'w-100'} onSubmit={handleSubmit} id='create-password'>
      <Input
        label={passwordLabel}
        multiValidation={getFieldMessages('password')}
        name='password'
        type='password'
        register={register}
      />

      <Input
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