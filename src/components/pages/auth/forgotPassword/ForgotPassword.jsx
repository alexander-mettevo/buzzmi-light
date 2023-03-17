import React from 'react';
import FormForgotPassword from "./items/FormForgotPassword.jsx";
import Logo from "../../../reusable/assets/logo/Logo.jsx";

const ForgotPassword = () => {
  return (
    <div className='content-auth__column'>
      <div className='h3 content-auth__title'>Forgot Your Password?</div>
      <div className='content-auth__text text-r'>
        Don’t worry! It happens. Please enter the address associated with your account.
      </div>
      <FormForgotPassword/>
    </div>
  );
};

export default ForgotPassword;