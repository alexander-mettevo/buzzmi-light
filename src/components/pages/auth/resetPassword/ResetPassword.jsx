import React, {useState} from 'react';
import CreatePasswordForm from "../createPassword/CreatePasswordForm.jsx";
import PrimaryButton from "../../../reusable/btns/buttons/PrimaryButton.jsx";
import {useNavigate} from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false)
  const submitCallback = async (formData) => {
    try {
      //TODO Place for sending data to API
      const res = {}
      navigate('/')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <div className='h3 content-auth__title'>Reset your Password</div>
      <CreatePasswordForm submitHandler={submitCallback} passwordLabel={'Your New Password'} setValid={setIsValid}/>
      <PrimaryButton type='submit' className={!isValid ? 'button_inactive' : ''} form={'create-password'}>Confirm</PrimaryButton>
    </>
  );
};

export default ResetPassword;