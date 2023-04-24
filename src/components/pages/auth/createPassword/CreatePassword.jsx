import React, {useState} from 'react';
import MobileLayout from "../../../layouts/mobileLayout/MobileLayout.jsx";
import CreatePasswordForm from "./CreatePasswordForm.jsx";
import PrimaryButton from "../../../reusable/btns/buttons/PrimaryButton.jsx";
import {useNavigate} from "react-router-dom";

const CreatePassword = () => {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false)
  const submitCallback = async (formData) => {
    try {
      //TODO Place for sending data to API
      const res = {}
      navigate('/profile/chose-role')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <MobileLayout>
      <div className='mb-4'>
        <div className='h5 mb-6'>
          Your security is our top priority. Make sure your password reflects that!
        </div>
        <div className='mb-9'>
          <img src="/images/assets/shield.png" alt="shield"/>
        </div>
        <CreatePasswordForm submitHandler={submitCallback} setValid={setIsValid}/>
      </div>

      <div>
        <div className='mb-2 h6 text-secondary'>
          Password requirements:
        </div>
        <div className='mb-6 text-r text-secondary'>
          <span className='fw-bold'>Make it long</span> from 8 to 20 characters. <span className='fw-bold'>Make it diverse.</span> It should contain at
          least one upper case letter and at least one special character
        </div>
        <PrimaryButton className={`mb-7 ${!isValid ? 'button_inactive' : ''}`} type="submit" form="create-password">Next</PrimaryButton>
      </div>
    </MobileLayout>
  );
};

export default CreatePassword;