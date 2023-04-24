import React from 'react';
import RegularButton from "../../../../reusable/btns/buttons/RegularButton.jsx";

const MobilePaySystems = () => {
  return (
    <ul className='mobile-pay__list'>
      <li>
        <RegularButton className='w-100 button_pay_icon'>
          <img src="/images/assets/pay-systems/paypal.svg" alt="pay-system"/>
        </RegularButton>
      </li>
      <li>
        <RegularButton className='w-100 button_pay_icon'>
          <img src="/images/assets/pay-systems/apple.svg" alt="pay-system"/>
        </RegularButton>
      </li>
      <li>
        <RegularButton className='w-100 button_pay_icon'>
          <img src="/images/assets/pay-systems/google.svg" alt="pay-system"/>
        </RegularButton>
      </li>
      <li>
        <RegularButton className='w-100 button_pay_icon'>
          <img src="/images/assets/pay-systems/payoner.svg" alt="pay-system"/>
        </RegularButton>
      </li>
    </ul>
  );
};

export default MobilePaySystems;