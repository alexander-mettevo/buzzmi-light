import React, {useEffect} from 'react';
import Input from "../../../../reusable/form/items/inputs/Input.jsx";
import PrimaryButton from "../../../../reusable/form/items/buttons/PrimaryButton.jsx";
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from "react-hook-form";
import {loginSchema} from "./validationSchema.js";
import userAPI from "../../../../../store/services/UserService.js";
import Form from "../../../../reusable/form/Form.jsx";
import {Link} from "react-router-dom";


const LoginForms = () => {
  const [login, {loading, data, error}] = userAPI.useLoginUserMutation()
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(loginSchema)
  });
  const onSubmit = data => login(data)

  useEffect(() => {

  }, [error])

  return (
    <Form error={error} onSubmit={handleSubmit(onSubmit)} formClassName='login__form'>
      <Input errors={errors.identifier} label='Your Phone or Email' name='identifier' register={register}/>
      <Input errors={errors.password} type='password' label='Your Password' name='password' register={register}/>
      <div className={'login__forgot'}>
        <Link className={'login__assets'} to='/auth/forgot-password'>Forgot Password</Link>
      </div>
      <PrimaryButton className='login__btn' type='submit'>LOG IN</PrimaryButton>
    </Form>
  );
};

export default LoginForms;