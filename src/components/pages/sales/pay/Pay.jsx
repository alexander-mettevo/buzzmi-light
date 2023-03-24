import React from 'react';
import PaySystems from "./items/PaySystems.jsx";
import PayForm from "./items/PayForm.jsx";
import DesktopPay from "./DesktopPay.jsx";
import MobilePay from "./MobilePay.jsx";

const Pay = () => {
  return (
    <>
      <DesktopPay/>
      <MobilePay/>
    </>
  );
};

export default Pay;