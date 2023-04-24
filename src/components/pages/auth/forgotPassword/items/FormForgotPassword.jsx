import React from 'react';
import PrimaryButton from "../../../../reusable/btns/buttons/PrimaryButton.jsx";
import userAPI from "../../../../../store/services/UserService.js";
import Form from "../../../../reusable/form/Form.jsx";
import {useNavigate} from "react-router-dom";
import ValidationSchema from "../../../../../../form-validator/ValidationSchema.js";
import {useFormValidator} from "../../../../../../form-validator/hooks/index.js";
import Input from "../../../../reusable/form/items/inputs/Input.jsx";

const validationSchema = new ValidationSchema(
  {
    identifier: [
      {rule: 'required'},
      {rule: 'phoneOrEmail'},
    ],
  }
);
const FormForgotPassword = () => {
  const navigate = useNavigate();
  const [sendCode, {error}] = userAPI.useForgotPasswordMutation()
  const {register, handleSubmit, isValid} = useFormValidator(validationSchema, async (formData) => {
    //TODO Place for sending data to API
    const res = {}
    if (res.error) {
      console.error(res.error)
    } else {
      localStorage.setItem('identifier', formData.identifier)
      navigate('/auth/forgot-code')
    }
  });

  return (
    <Form error={error} onSubmit={handleSubmit} formClassName='form content-auth__form'>
      <Input label='Your Phone or Email' name='identifier' register={register}/>
      <PrimaryButton className={!isValid ? 'button_inactive' : ''} type='submit'>Continue</PrimaryButton>
    </Form>
  );
};

export default FormForgotPassword;