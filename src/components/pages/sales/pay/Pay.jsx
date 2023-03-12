import React from 'react';
import PaySystems from "./items/PaySystems.jsx";
import PayForm from "./items/PayForm.jsx";

const Pay = () => {
  return (
    <>
      <div className='h3'>
        Become Premium Member
      </div>
      <div className='pay__row'>
        <PaySystems/>
        <div>
          <PayForm subtotal={144} discount={0} tax={6} total={150}/>
        </div>
      </div>
    </>
  );
};

export default Pay;