import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderLogo from "../../reusable/assets/logo/headerLogo/HeaderLogo.jsx";
import SupportBtn from "../../reusable/btns/supportBtn/SupportBtn.jsx";
import BackBtnMobile from "../../reusable/btns/backBtn/BackBtnMobile.jsx";
import BackBtn from "../../reusable/btns/backBtn/BackBtn.jsx";

const BaseLayout = ({bigDesk}) => {
  return (
    <div className='auth-layout'>
      <div className='auth-layout__header_m'>
        <BackBtnMobile/>
        <SupportBtn/>
      </div>
      <div className='auth-layout__header'>
        <div className='auth-layout__header-container'>
          <div></div>
          <div className='auth-layout__logo h4'>Welcome to <HeaderLogo/></div>
          <div>
            <SupportBtn isOppositeColor/>
          </div>
        </div>
      </div>
      <div className={`auth-layout__container ${bigDesk ? 'auth-layout__container_b' : ''}`}>
          <Outlet/>
        <BackBtn/>
      </div>
    </div>
  );
};

export default BaseLayout;