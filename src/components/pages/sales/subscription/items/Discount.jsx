import React from 'react';

const Discount = ({discount, specialOffer}) => {
  return (
    <div className='subscription-card__discount-wrapper'>
      <div className='subscription-card__discount'>
        <span>
                  {discount}% off
        </span>
      </div>
      <div className='text-primary text-s'>{specialOffer}</div>
    </div>
  );
};

export default Discount;