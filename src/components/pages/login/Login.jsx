import React from 'react';
import Logo from "../../reusable/assets/logo/Logo.jsx";
import DoubleLayout from "../../layouts/doubleLayout/DoubleLayout.jsx";
import {Link} from "react-router-dom";
import LoginForms from "./items/loginForms/LoginForms.jsx";
import QuadServicesButtons from "./items/serviceButtons/QuadServicesButtons.jsx";


const Login = () => {
  return (
    <DoubleLayout hideSupportBtn>
      <div>
        <Logo subtitle='Welcome to'/>
      </div>
      <div className='form-wrapper'>
        <div className="form form_bg">
          <LoginForms/>
          <div className='login__or'>or</div>
          <QuadServicesButtons/>
          <div className='text-center text-r'>
            <span className={'text-secondary'}>Don’t have an account?</span>
            &nbsp;
            <Link className={'text-primary'} to='/registration'>Sign up</Link>
          </div>
          {/*<DateInput label={'Input Label'}/>*/}
          {/*<CodeInputs label={'Input Label'}/>*/}

          {/*<input className="input input__alt"/>*/}
          {/*<RegularButton className={'_fw'}>Test</RegularButton>*/}
          {/*<RegularButton>Test</RegularButton>*/}
          {/*<SecondaryButton>Test</SecondaryButton>*/}

        </div>
      </div>
    </DoubleLayout>
  );
};

export default Login;