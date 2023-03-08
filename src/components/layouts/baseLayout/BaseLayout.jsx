import React from 'react';
import {Outlet} from "react-router-dom";
import RequireAuth from "../RequireAuth.jsx";

const BaseLayout = () => {
  return (
    <RequireAuth>
      <Outlet />
    </RequireAuth>
  );
};

export default BaseLayout;