import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "./components/pages/auth/login/Login.jsx";
import OtherServices from "./components/pages/auth/otherServices/OtherServices.jsx";
import Support from "./components/pages/support/Support.jsx";
import BaseLayout from "./components/layouts/baseLayout/BaseLayout.jsx";
import Dashboard from "./components/pages/dashboard/Dashboard.jsx";
import Modal from "./components/modal/Modal.jsx";
import Registration from "./components/pages/auth/registration/Registration.jsx";
import ForgotPassword from "./components/pages/auth/forgotPassword/ForgotPassword.jsx";
import ForgotCode from "./components/pages/auth/forgotCode/ForgotCode.jsx";
import ResetPassword from "./components/pages/auth/resetPassword/ResetPassword.jsx";
import Test from "./components/pages/test/Test.jsx";
import Subscription from "./components/pages/sales/subscription/Subscription.jsx";
import SubscriptionV2 from "./components/pages/sales/subscription/SubscriptionV2.jsx";
import Pay from "./components/pages/sales/pay/Pay.jsx";
import MobilePay from "./components/pages/sales/pay/MobilePay.jsx";
import ChoseRole from "./components/pages/profile/choseRole/ChoseRole.jsx";
import AddCreators from "./components/pages/profile/addCreactors/AddCreators.jsx";
import Interest from "./components/pages/profile/interest/Interest.jsx";
import AddContacts from "./components/pages/profile/addUsers/AddContacts.jsx";
import AddFriends from "./components/pages/profile/addUsers/AddFriends.jsx";
import AddPeople from "./components/pages/profile/addUsers/AddPeople.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/other-services" element={<OtherServices/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route element={<BaseLayout bigDesk/>}>
          <Route path="/sales/pay" element={<Pay/>}/>
        </Route>
        <Route element={<BaseLayout/>}>
          <Route path="/auth/forgot-code" element={<ForgotCode/>}/>
          <Route path="/auth/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/auth/reset-password" element={<ResetPassword/>}/>
          <Route path="/auth/test" element={<Test/>}/>
          <Route path="/profile/chose-role" element={<ChoseRole/>}/>
          <Route path="/profile/add-creators" element={<AddCreators/>}/>
          <Route path="/profile/add-interest" element={<Interest/>}/>
          <Route path="/profile/add-contacts" element={<AddContacts/>}/>
          <Route path="/profile/add-friends" element={<AddFriends/>}/>
          <Route path="/profile/add-people" element={<AddPeople/>}/>
          <Route path="/sales" element={<Subscription/>}/>
          <Route path="/sales/v2" element={<SubscriptionV2/>}/>
          <Route path="/sales/mobile-pay" element={<MobilePay/>}/>
        </Route>
      </Routes>
      <Modal/>
    </>
  );
};

export default App;