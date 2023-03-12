import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "./components/pages/auth/login/Login.jsx";
import OtherServices from "./components/pages/auth/otherServices/OtherServices.jsx";
import Support from "./components/pages/support/Support.jsx";
import BaseLayout from "./components/layouts/baseLayout/BaseLayout.jsx";
import Dashboard from "./components/pages/dashboard/Dashboard.jsx";
import Modal from "./components/modal/Modal.jsx";
import Registration from "./components/pages/auth/registration/Registration.jsx";
import AuthLayout from "./components/layouts/authLayout/AuthLayout.jsx";
import ForgotPassword from "./components/pages/auth/forgotPassword/ForgotPassword.jsx";
import ForgotCode from "./components/pages/auth/forgotCode/ForgotCode.jsx";
import ResetPassword from "./components/pages/auth/resetPassword/ResetPassword.jsx";
import Test from "./components/pages/test/Test.jsx";
import Subscription from "./components/pages/sales/subscription/Subscription.jsx";
import SubscriptionV2 from "./components/pages/sales/subscription/SubscriptionV2.jsx";

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
        <Route path="/sales" element={<AuthLayout/>}>
          <Route path="/sales" element={<Subscription/>}/>
          <Route path="/sales/v2" element={<SubscriptionV2/>}/>
        </Route>
        <Route path="/auth" element={<AuthLayout/>}>
          <Route path="/auth/forgot-code" element={<ForgotCode/>}/>
          <Route path="/auth/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/auth/reset-password" element={<ResetPassword/>}/>
          <Route path="/auth/test" element={<Test/>}/>
        </Route>
      </Routes>
      <Modal/>
    </>
  );
};

export default App;