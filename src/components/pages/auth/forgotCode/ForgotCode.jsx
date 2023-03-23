import React, {useEffect, useState} from 'react';
import Logo from "../../../reusable/assets/logo/Logo.jsx";
import CodeInputs from "../../../reusable/form/items/inputs/codeInputs/CodeInputs.jsx";
import CodeInputsFour from "../../../reusable/form/items/inputs/codeInputs/CodeInputsFour.jsx";

const ForgotCode = () => {
  const [identifier, setIdentifier] = useState('')

  useEffect(() => {
    setIdentifier(localStorage.getItem('identifier'))
  }, [])

  return (
    <>
      <div className='h3 content-auth__title'>Enter OTP</div>
      <div className='content-auth__text text-r'>
        We want to make sure it’s really you. In order to further verify your identity, enter the verification code that was sent to  {identifier}
      </div>
      <CodeInputsFour identifier={identifier} formClassName='form content-auth__form' label='Verification code'/>
    </>
  );
};

export default ForgotCode;