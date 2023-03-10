import React from 'react';
import SubscriptionCard from "./items/SubscriptionCard.jsx";
import {HardCode} from "../../../reusable/assets/showMore/ShowMore.jsx";
import Timer from "../../../reusable/assets/timer/Timer.jsx";
import PrimaryButton from "../../../reusable/form/items/buttons/PrimaryButton.jsx";
import {Link} from "react-router-dom";

const Subscription = () => {
  return (
    <div className='subscription'>
      <div className='h5'>
        One subscription, endless possibilities
      </div>
      <div className='text-r'>
        Unlimited access to 100s+ of creators and all premium features
      </div>
      <div className='subscription__img'>
        <img src="/public/images/sale/girl.png" alt="img"/>
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
        <Timer eventDate={new Date("2023-03-17T12:00:00")}/>
      </div>
      <div className='test-s text-secondary '>
        Your first 7 days free. No commitment. Cancel anytime
      </div>
      <div className='subscription__promotion'>
        <SubscriptionCard
          title='Elite Creator'
          discount={20}
          icon={'/public/images/sale/star.png'}
          text={"You can start to expand your business using our advanced technology, user-friendly platform, and dedicated customer support team."}
          content={<HardCode/>}
        />
        <SubscriptionCard
          title='Premium Member'
          discount={40}
          icon={'/public/images/sale/target.png'}
          text={"Get instant access to the biggest offering of all of Playbooks 1000+ trainers, athletes and coaches."}
          content={<HardCode/>}
          specialOffer='And Special offer'
        />
      </div>

      <Link to='/' className='subscription__btn'>
        <PrimaryButton className=''>Start my 7-days trial</PrimaryButton>
      </Link>
      <Link to='/' className='text-secondary  text-uppercase h6'>
        SKIP TRIAL
      </Link>
    </div>
  );
};

export default Subscription;