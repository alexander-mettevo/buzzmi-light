import React, {useState} from 'react';
import PayForm from "./items/PayForm.jsx";
import AltPrimaryButton from "../../../reusable/btns/buttons/AltPrimaryButton.jsx";
import MobilePaySystems from "./items/MobilePaySystems.jsx";

const MobilePay = () => {
  const [showPayForm, setShowPayForm] = useState(false);

  const togglePayForm = () => setShowPayForm(!showPayForm);

  return (
    <div className='mobile-pay d-lg-none'>
      <div className='pay-form__header'>
        <div className={'h3 text-center mb-5'}>
          Become Premium Member
        </div>
        <AltPrimaryButton onClick={togglePayForm} className='button_pay pay__card-btn w-100'>
          <div className='pay__card-btn_text'>
            <img src="/images/assets/pay-systems/pay-card.svg" alt="pay-system"/>
            <span>Pay with Credit Card</span>
          </div>
          <i className={`fa-solid  text-alt-primary select__arrow pay__card-btn_arrow ${!showPayForm ? 'fa-chevron-right' : 'fa-chevron-left'}`}/>
        </AltPrimaryButton>
      </div>
      {showPayForm ? <PayForm subtotal={144} discount={0} tax={6} total={150}/> : <MobilePaySystems/>}
    </div>
  );
};

export default MobilePay;