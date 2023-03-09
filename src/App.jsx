import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "./components/pages/login/Login.jsx";
import OtherServices from "./components/pages/otherServices/OtherServices.jsx";
import Support from "./components/pages/support/Support.jsx";
import BaseLayout from "./components/layouts/baseLayout/BaseLayout.jsx";
import Dashboard from "./components/pages/dashboard/Dashboard.jsx";
import Modal from "./components/modal/Modal.jsx";
import Registration from "./components/pages/registration/Registration.jsx";
import AuthLayout from "./components/layouts/authLayout/AuthLayout.jsx";
import ForgotPassword from "./components/pages/forgotPassword/ForgotPassword.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout/>}>
          <Route path="/" element={<Dashboard/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/other-services" element={<OtherServices/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/auth" element={<AuthLayout/>}>
          <Route path="/auth/code" element={<></>}/>
          <Route path="/auth/forgot-password" element={<ForgotPassword/>}/>
        </Route>
      </Routes>
      <Modal/>
    </>
  );
};

export default App;