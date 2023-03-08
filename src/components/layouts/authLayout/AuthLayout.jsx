import React from 'react';
import {Outlet} from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className='auth-layout'>
      <div className='auth-layout__header'>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;