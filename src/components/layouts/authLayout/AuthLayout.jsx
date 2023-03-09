import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderLogo from "../../reusable/assets/logo/headerLogo/HeaderLogo.jsx";
import SupportBtn from "../../reusable/btns/supportBtn/SupportBtn.jsx";

const AuthLayout = () => {
  return (
    <div className='auth-layout'>
      <div className='auth-layout__header'>
        <div className='auth-layout__header-container'>
          <div></div>
          <div className='auth-layout__logo h4'>Welcome to <HeaderLogo/></div>
          <div>
            <SupportBtn isOppositeColor/>
          </div>
        </div>
      </div>
      <div className='auth-layout_container'>
        <Outlet/>
      </div>
    </div>
  );
};

export default AuthLayout;