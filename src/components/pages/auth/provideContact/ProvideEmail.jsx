import React, {useRef} from 'react';
import MobileLayout from "../../../layouts/mobileLayout/MobileLayout.jsx";
import {Link, useNavigate} from "react-router-dom";
import PrimaryButton from "../../../reusable/form/items/buttons/PrimaryButton.jsx";
import Input from "../../../reusable/form/items/inputs/Input.jsx";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import Form from "../../../reusable/form/Form.jsx";

const emailSchema = yup.object({
  email: yup.string()
    .email('Wrong email address')
    .required('Email is required')
})

const ProvideEmail = () => {
  const navigate = useNavigate();
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(emailSchema)
  });

  const onSubmit = (data) => {
    console.log(data)
    navigate('/auth/provide-email-code')
  }


  return (
    <MobileLayout>
      <div className='mb-4'>
        <div className='h4'>
          Provide your contact information
        </div>
        <div className='mt-9'>
          <img src="/images/assets/mail.png" alt=""/>
        </div>
        <Form id="email-code" onSubmit={handleSubmit(onSubmit)}>
          <Input errors={errors.email} register={register} name='email' label='Your email'/>
        </Form>
        <Link to='/auth/provide-phone' className='h6 text-alt-primary mt-5 d-inline-block mb-6'>
          or sign up with phone
        </Link>
        <div className='text-r text-secondary'>
          Accounts are required to provide a phone number or email for safety and privacy purposes. You can only have
          one account linked to your phone number
        </div>
      </div>

      <div>
        <PrimaryButton type="submit" form="email-code" className='mb-7'>Next</PrimaryButton>
        <div className='text-s text-secondary'>
          By continuing, you agree to Buzzmi’s Terms of Service and confirm that you have read Buzzmi’s Privacy Policy.
        </div>
      </div>
    </MobileLayout>
  );
};

export default ProvideEmail;