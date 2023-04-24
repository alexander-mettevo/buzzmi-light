import React, {useState} from 'react';
import {Link} from "react-router-dom";
import PrimaryButton from "../../../reusable/btns/buttons/PrimaryButton.jsx";
import PhoneSelect from "../../../reusable/form/select/PhoneSelect.jsx";
import MobileLayout from "../../../layouts/mobileLayout/MobileLayout.jsx";

const ProvidePhone = () => {
  const [isValid, setIsValid] = useState(false)

  return (
    <MobileLayout>
      <div className='mb-4'>
        <div className='h4'>
          Provide your contact information
        </div>
        <div className='mt-9'>
          <img src="/images/assets/phone.png" alt=""/>
        </div>
        <div className='h6 mt-9 mb-sm-3 mb-2'>
          Your phone number
        </div>
        <PhoneSelect setIsValid={setIsValid}/>
        <Link to='/auth/provide-email' className='h6 text-alt-primary  text-b mt-5 d-inline-block mb-6'>
          or sign up with email
        </Link>
        <div className='text-r text-secondary'>
          Accounts are required to provide a phone number or email for safety and privacy purposes. You can only have one account linked to your phone number
        </div>
      </div>

      <div>
        <PrimaryButton type='submit' className={`mb-7 ${!isValid ? 'button_inactive' : ''}`}  form='phone-code'>Next</PrimaryButton>
        <div className='text-s text-secondary'>
          By continuing, you agree to Buzzmi’s Terms of Service and confirm that you have read Buzzmi’s Privacy Policy.
        </div>
      </div>
    </MobileLayout>
  );
};

export default ProvidePhone;