import React, {useRef, useState} from 'react';
import MobileLayout from "../../../layouts/mobileLayout/MobileLayout.jsx";
import {Link, useNavigate} from "react-router-dom";
import PrimaryButton from "../../../reusable/btns/buttons/PrimaryButton.jsx";
import OldInput from "../../../reusable/form/items/inputs/OldInput.jsx";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import Form from "../../../reusable/form/Form.jsx";
import ValidationSchema from "../../../../../form-validator/ValidationSchema.js";
import {useFormValidator} from "../../../../../form-validator/hooks/index.js";
import Input from "../../../reusable/form/items/inputs/Input.jsx";

const validationSchema = new ValidationSchema(
  {
    email: [
      {rule: 'required'},
      {rule: 'email'},
    ]
  }
);

const ProvideEmail = () => {
  const navigate = useNavigate();
  const {register, handleSubmit, isValid} = useFormValidator(validationSchema, async (formData) => {
    //TODO Place for sending data to API
    const res = {}
    if (res.error) {
      console.error(res.error)
    } else {
      navigate('/auth/provide-email-code')
      localStorage.setItem('identifier', formData.email)
    }
  });



  return (
    <MobileLayout>
      <div className='mb-4'>
        <div className='h4'>
          Provide your contact information
        </div>
        <div className='mt-9'>
          <img src="/images/assets/mail.png" alt=""/>
        </div>
        <Form id="email-code" onSubmit={handleSubmit}>
          <Input register={register} name='email' label='Your email'/>
        </Form>
        <Link to='/auth/provide-phone' className='h6  text-b text-alt-primary mt-5 d-inline-block mb-6'>
          or sign up with phone
        </Link>
        <div className='text-r text-secondary'>
          Accounts are required to provide a phone number or email for safety and privacy purposes. You can only have
          one account linked to your phone number
        </div>
      </div>

      <div>
        <PrimaryButton type="submit" form="email-code" className={`mb-7 ${!isValid ? 'button_inactive' : ''}`}>Next</PrimaryButton>
        <div className='text-s text-secondary'>
          By continuing, you agree to Buzzmi’s Terms of Service and confirm that you have read Buzzmi’s Privacy Policy.
        </div>
      </div>
    </MobileLayout>
  );
};

export default ProvideEmail;