import React from 'react';
import Timer from "../../../reusable/assets/timer/Timer.jsx";
import SubscriptionCard from "./items/SubscriptionCard.jsx";
import {HardCode} from "../../../reusable/assets/showMore/ShowMore.jsx";
import {Link} from "react-router-dom";
import PrimaryButton from "../../../reusable/btns/buttons/PrimaryButton.jsx";
import SubscriptionOffer from "./items/subscriptionOffer/SubscriptionOffer.jsx";

const SubscriptionV2 = () => {
  return (
    <div className='subscription'>
      <div className='h5'>
        One subscription, endless possibilities
      </div>
      <div className='text-r'>
        Unlimited access to 100s+ of creators and all premium features
      </div>
      <div className='subscription__img'>
        <img src="/images/sale/girl.png" alt="img"/>
        <div className='subscription__counter-circle circle-counter'>
          <div className='circle-counter__top'>
            +1K
          </div>
          <div className='circle-counter__bottom'>
            creators
          </div>
        </div>
      </div>
      <div className='h6'>
        Get more of the app and
      </div>
      <div className='h2'>
        SAVE 40%
      </div>
      <div className='text-alt-primary subscription__timer'>
        <Timer eventDate={new Date("2023-03-22T12:00:00")}/>
      </div>
      <div className='test-s text-secondary '>
        Your first 7 days free. No commitment. Cancel anytime
      </div>
      <div className='subscription__promotion'>
        <div className='subscription__cards'>
          <SubscriptionCard
            title='Premium Member'
            discount={40}
            icon={'/images/sale/target.png'}
            text={"Get instant access to the biggest offering of all of Playbooks 1000+ trainers, athletes and coaches."}
            content={<HardCode/>}
            specialOffer='And Special offer'
          />
        </div>
        <SubscriptionOffer/>
      </div>

      <div className='text-s text-secondary subscription__note'>
        <p>
          Billed Yearly. Cancel Anytime.
          The subscription will automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period. You can go to your Account settings to manage your subscription and turn off auto-renew.
        </p>
        <p>
          If any problem, Please Contact Us in “Profile - FAQ & Feedback”.
        </p>
      </div>

      <Link to='/sales/pay' className='subscription__btn'>
        <PrimaryButton>Subscribe</PrimaryButton>
      </Link>
    </div>
  );
};

export default SubscriptionV2;