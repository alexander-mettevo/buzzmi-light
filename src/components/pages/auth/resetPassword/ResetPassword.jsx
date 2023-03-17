import React from 'react';
import Logo from "../../../reusable/assets/logo/Logo.jsx";
import FormResetPassword from "./items/FormResetPassword.jsx";

const ResetPassword = () => {
  return (
    <>
      <div className='h3 content-auth__title'>Reset your Password</div>
      <FormResetPassword/>
    </>
  );
};

export default ResetPassword;