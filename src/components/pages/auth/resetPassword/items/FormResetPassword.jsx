import React from 'react';
import Form from "../../../../reusable/form/Form.jsx";
import {useNavigate} from "react-router-dom";
import userAPI from "../../../../../store/services/UserService.js";
import {useForm} from "react-hook-form";
import {confirmPasswordSchema} from "../../../../../validationsSchems/confirmPassword.js";
import {yupResolver} from "@hookform/resolvers/yup";
import OldInput from "../../../../reusable/form/items/inputs/OldInput.jsx";
import PrimaryButton from "../../../../reusable/btns/buttons/PrimaryButton.jsx";

const objectValidation = {
  password: {
    required: true,
    minLength: 10,
    pattern: /\d+/gi
    // pattern: {
    //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    //   message: 'Password must contain at least 8 characters, including UPPER/lowercase and numbers'
    // }

  },
  passwordConfirmation: {
    maxLength: {
      value: 20,
      message: 'Password must be less than 20 characters'
    },
    minLength: {
      value: 8,
      message: 'Password must be more than 8 characters'
    },
    required: {
      value: true,
      message: 'Password is required'
    }
  }
}

const FormResetPassword = () => {
  const navigate = useNavigate();
  const [sendCode, {error}] = userAPI.useResetPasswordMutation()
  const {register, handleSubmit, formState: {errors}, control} = useForm({
    criteriaMode: 'all',
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    const res = await sendCode(data)
    if (res.error) {
      console.error(res.error)
    } else {
      // navigate('/auth/forgot-code')
    }
  }

  return (
    <Form error={error} onSubmit={handleSubmit(onSubmit)} formClassName='form content-auth__form'>
      <OldInput errors={errors.password} label='Your New Password' name='password' register={register}
                objectValidation={objectValidation.password}/>
      <OldInput errors={errors.passwordConfirmation} label='Confirm Password' name='passwordConfirmation'
                register={register} objectValidation={objectValidation.passwordConfirmation}/>
      <PrimaryButton className='' type='submit'>Continue</PrimaryButton>
    </Form>
  );
};

export default FormResetPassword;