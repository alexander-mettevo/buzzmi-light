import React from 'react';
import DoubleLayout from "../../../layouts/doubleLayout/DoubleLayout.jsx";
import OtherServicesButtons from "./items/otherServicesButtons/OtherServicesButttons.jsx";
import BackBtn from "../../../reusable/btns/backBtn/BackBtn.jsx";

const OtherServices = () => {
  return (
    <DoubleLayout reverse>
      <div className='form-wrapper other-services w-100'>
        <div className='h4 text-center other-services__title'>
          Choose your Social Network
        </div>
        <OtherServicesButtons/>
        <BackBtn/>
      </div>
    </DoubleLayout>
  );
};

export default OtherServices;