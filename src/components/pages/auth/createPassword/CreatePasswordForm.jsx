import React from 'react';
import Form from "../../../reusable/form/Form.jsx";
import Input from "../../../reusable/form/items/inputs/Input.jsx";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const passwordSchema = yup.object().shape({
  password: yup.string().required('Password is required'),
  confirmPassword: yup.string().required('Confirm password is required').oneOf([yup.ref('password'), null], 'Passwords must match')
})

const CreatePasswordForm = () => {
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(passwordSchema)
  });

  const onSubmit = async (data) => {
    console.log('CreatePasswordForm', data)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} id='create-password'>
      <Input
        label='Create your password'
        register={register}
        name={'password'}
        errors={errors.password}
        validList
        className='_form-warning'
      />
      <Input
        label='Confirm password'
        register={register}
        name={'confirmPassword'}
        errors={errors.confirmPassword}
        validList
      />
    </Form>
  );
};

export default CreatePasswordForm;