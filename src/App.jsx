import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "./components/pages/login/Login.jsx";
import OtherServices from "./components/pages/otherServices/OtherServices.jsx";
import Support from "./components/pages/support/Support.jsx";
import BaseLayout from "./components/layouts/baseLayout/BaseLayout.jsx";
import Dashboard from "./components/pages/dashboard/Dashboard.jsx";
import Modal from "./components/modal/Modal.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout/>}>
          <Route path="/" element={<Dashboard/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/other-services" element={<OtherServices/>}/>
        <Route path="/support" element={<Support/>}/>
      </Routes>
      <Modal/>
    </>
  );
};

export default App;