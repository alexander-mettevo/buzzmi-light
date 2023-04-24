import React from 'react';
import Logo from "../../../reusable/assets/logo/Logo.jsx";
import PrimaryButton from "../../../reusable/btns/buttons/PrimaryButton.jsx";
import {Link} from "react-router-dom";

const FinishRegistration = () => {
  return (
    <div className='auth-layout'>
      <div className='text-center auth-layout__container mobile-layout pt-6 pt-sm-0'>
        <div>
          <Logo/>
          <img src="/images/assets/finish.png" className='w-100 mb-3 mb-sm-6' alt=""/>
          <div className='h5 mb-3 mb-sm-9'>Hooray!</div>
          <div className='text-r mb-3 mb-sm-6 text-alert'>You're now a part of the buzz-worthy world of Buzzmi.</div>
        </div>
        <div>
          <PrimaryButton className='mb-5'><Link to='/'>Let’s go to your profile</Link></PrimaryButton>
          <div className='text-alt-primary h6'><Link to='/'>Go to start</Link></div>
        </div>
      </div>
    </div>
  );
};

export default FinishRegistration;