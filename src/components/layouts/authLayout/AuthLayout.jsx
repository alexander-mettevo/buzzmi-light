import React from 'react';
import RequireAuth from "../RequireAuth.jsx";
import {Outlet} from "react-router-dom";

const AuthLayout = () => {
  return (
    <RequireAuth>
      <Outlet/>
    </RequireAuth>
  );
};

export default AuthLayout;