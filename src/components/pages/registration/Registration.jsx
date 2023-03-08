import React from 'react';
import DoubleLayout from "../../layouts/doubleLayout/DoubleLayout.jsx";
import Logo from "../../reusable/assets/logo/Logo.jsx";
import QuadServicesButtons from "../login/items/serviceButtons/QuadServicesButtons.jsx";
import PrimaryButton from "../../reusable/form/items/buttons/PrimaryButton.jsx";
import {Link} from "react-router-dom";
import Policy from "./items/Policy.jsx";

const Registration = () => {
  return (
    <DoubleLayout reverse imageUrl={'./images/registration/intro.png'}>
      <div className='registration'>
        <div>
          <Logo subtitle='Welcome to'/>
        </div>
        <div className='h3 text-center registration__title'>Let’s get you set up</div>
        <QuadServicesButtons/>
        <div className='login__or'>or</div>
        <Link to={'/'} className='registration__btn'>
          <PrimaryButton type='submit'>Signup with Phone or Email</PrimaryButton>
        </Link>
        <Policy/>
        <div className='text-center text-r registration__footer'>
          <span className={'text-secondary'}>Already have an account?</span>
          &nbsp;
          <Link className={'text-primary'} to='/login'>Log in</Link>
        </div>
      </div>
    </DoubleLayout>
  );
};

export default Registration;