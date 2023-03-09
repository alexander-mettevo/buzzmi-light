import React, {useEffect} from 'react';
import Input from "../../../reusable/form/items/inputs/Input.jsx";
import PrimaryButton from "../../../reusable/form/items/buttons/PrimaryButton.jsx";
import userAPI from "../../../../store/services/UserService.js";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup.js";
import Form from "../../../reusable/form/Form.jsx";
import {identifierSchema} from "../../../../validationsSchems/identifier.js";
import {useNavigate} from "react-router-dom";

const FormForgotPassword = () => {
  const navigate = useNavigate();
  const [sendCode, {error}] = userAPI.useForgotPasswordMutation()
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(identifierSchema)
  });
  const onSubmit = async (data) => {
    const res = await sendCode(data)
    if (res.error) {
      console.error(res.error)
    } else {
      localStorage.setItem('identifier', data.identifier)
      navigate('/auth/forgot-code')
    }
  }

  useEffect(() => {

  }, [error])

  return (
    <Form error={error} onSubmit={handleSubmit(onSubmit)} formClassName='form content-auth__form'>
      <Input errors={errors.identifier} label='Your Phone or Email' name='identifier' register={register}/>
      <PrimaryButton className='' type='submit'>Continue</PrimaryButton>
    </Form>
  );
};

export default FormForgotPassword;