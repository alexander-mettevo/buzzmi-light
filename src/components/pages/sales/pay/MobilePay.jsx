import React from 'react';
import PayForm from "./items/PayForm.jsx";

const MobilePay = () => {
  return (
    <>
      <div className={'h3 text-center pay-form__header'}>
        Become Premium Member
      </div>
      <PayForm subtotal={144} discount={0} tax={6} total={150}/>
    </>
  );
};

export default MobilePay;