import React from 'react';
import PrimaryButton from "../../../../../reusable/btns/buttons/PrimaryButton.jsx";
import userAPI from "../../../../../../store/services/UserService.js";
import Form from "../../../../../reusable/form/Form.jsx";
import {Link} from "react-router-dom";
import {useFormValidator} from "../../../../../../../form-validator/hooks/index.js";
import ValidationSchema from "../../../../../../../form-validator/ValidationSchema.js";
import Input from "../../../../../reusable/form/items/inputs/Input.jsx";

const validationSchema = new ValidationSchema(
  {
    identifier: [
      {rule: 'required'},
      {rule: 'phoneOrEmail'},
    ],
    password: [
      {rule: 'required'},
    ],
  }
);

const LoginForms = () => {
  const [login, {loading, data, error}] = userAPI.useLoginUserMutation()
  const {register, handleSubmit} = useFormValidator(validationSchema, (formData) => {
    login(formData)
  });

  return (
    <Form error={error} onSubmit={handleSubmit} formClassName='login__form'>
      <Input label='Your Phone or Email' name='identifier' register={register}/>
      <Input type='password' label='Your Password' name='password' register={register}/>
      <div className={'login__forgot'}>
        <Link className={'login__assets'} to='/auth/forgot-password'>Forgot Password</Link>
      </div>
      <PrimaryButton className='login__btn' type='submit'>LOG IN</PrimaryButton>
    </Form>
  );
};

export default LoginForms;