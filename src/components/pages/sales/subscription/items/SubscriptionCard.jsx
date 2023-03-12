import React from 'react';
import ShowMore from "../../../../reusable/assets/showMore/ShowMore.jsx";
import Discount from "./Discount.jsx";

const SubscriptionCard = ({title, icon, discount, text, content, specialOffer}) => {
  return (
    <div className='subscription-card'>
        <div className="subscription-card__top">
          <div className="subscription-card__top_left">
            <img className='subscription-card__icon' src={icon} alt={'icon'}/>
            <div className='h5 text-alt-primary'>{title}</div>
          </div>
          <Discount discount={discount} specialOffer={specialOffer}/>
        </div>
      <ShowMore
        text={text}
        content={content}
      />
    </div>
  );
};

export default SubscriptionCard;