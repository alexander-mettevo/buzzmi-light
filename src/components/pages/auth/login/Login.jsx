import React from 'react';
import DoubleLayout from "../../../layouts/doubleLayout/DoubleLayout.jsx";
import {Link} from "react-router-dom";
import LoginForms from "./items/loginForms/LoginForms.jsx";
import QuadServicesButtons from "./items/serviceButtons/QuadServicesButtons.jsx";

const Login = () => {
  return (
    <DoubleLayout imageUrl={'./images/login/intro.png'}>
      <div className='form-wrapper w-100'>
        <div className="form form_bg">
          <LoginForms/>
          <div className='login__assets'>or</div>
          <QuadServicesButtons/>
          <div className='text-center text-r'>
            <span className={'text-secondary'}>Don’t have an account?</span>
            &nbsp;
            <Link className={'text-primary'} to='/registration'>Sign up</Link>
          </div>
        </div>
      </div>
    </DoubleLayout>
  );
};

export default Login;