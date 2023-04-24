import React, {useRef, useState} from 'react';
import AltPrimaryButton from "../../../../reusable/btns/buttons/AltPrimaryButton.jsx";
import RegularButton from "../../../../reusable/btns/buttons/RegularButton.jsx";
import Button from "../../../../reusable/btns/buttons/Button.jsx";
import {Link} from "react-router-dom";

const PaySystems = () => {
  const [showMore, setShowMore] = useState(false);
  const contentRef = useRef(null);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div>
      <div className='h6'>Choose your Payment method</div>
      <ul className='pay__btns-list'>
        <li>
          <AltPrimaryButton className='button_pay pay__card-btn pay__card-btn_d'>
            <div className='pay__card-btn_text'>
              <img src="/images/assets/pay-systems/pay-card.svg" alt="pay-system"/>
              <span>Pay with Credit Card</span>
            </div>
            <i className="fa-solid fa-chevron-down text-alt-primary select__arrow pay__card-btn_arrow"/>
          </AltPrimaryButton>
          <Link to={'/sales/mobile-pay'}>
            <AltPrimaryButton className='button_pay pay__card-btn pay__card-btn_m'>
              <div className='pay__card-btn_text'>
                <img src="/images/assets/pay-systems/pay-card.svg" alt="pay-system"/>
                <span>Pay with Credit Card</span>
              </div>
              <i className="fa-solid fa-chevron-down text-alt-primary select__arrow pay__card-btn_arrow"/>
            </AltPrimaryButton>
          </Link>
        </li>
        <li>
          <RegularButton className='_fw button_pay_icon'><img src="/images/assets/pay-systems/paypal.svg"
                                                              alt="pay-system"/></RegularButton>
        </li>
        <li>
          <RegularButton className='_fw button_pay_icon'><img src="/images/assets/pay-systems/apple.svg"
                                                              alt="pay-system"/></RegularButton>
        </li>
        <div
          ref={contentRef}
          className={`pay__show-more ${showMore ? 'pay__show-more_a' : ''}`}
          style={{height: showMore ? `${contentRef.current.scrollHeight}px` : 0}}
        >
          <li>
            <RegularButton className='_fw button_pay_icon'><img src="/images/assets/pay-systems/google.svg" alt="pay-system"/></RegularButton>
          </li>
          <li>
            <RegularButton className='_fw button_pay_icon'><img src="/images/assets/pay-systems/payoner.svg" alt="pay-system"/></RegularButton>
          </li>
        </div>

        <div className={`pay__show-more_m`}>
          <li>
            <RegularButton className='_fw button_pay_icon'><img src="/images/assets/pay-systems/google.svg" alt="pay-system"/></RegularButton>
          </li>
          <li>
            <RegularButton className='_fw button_pay_icon'><img src="/images/assets/pay-systems/payoner.svg" alt="pay-system"/></RegularButton>
          </li>
        </div>
        <li>
          <Button onClick={toggleShowMore} className={`text-primary h6 pay__more-services pay__show-btn ${showMore ? 'pay__show-btn_a' : ''}`}>
            <span className='h6'>Choose another Payment Method</span>
            <span> <i className={`fa-solid fa-chevron-down select__arrow `}/></span>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default PaySystems;