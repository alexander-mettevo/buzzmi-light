import React from 'react';
import OtherServicesButtons from "../../../pages/auth/otherServices/items/otherServicesButtons/OtherServicesButttons.jsx";

const OtherServicesModal = () => {
  return (
    <div className='other-services'>
      <div className='h4 text-center other-services__title'>
        Choose your Social Network
      </div>
      <OtherServicesButtons/>
    </div>
  );
};

export default OtherServicesModal;