import React from 'react';
import ShowMore from "../../../../reusable/assets/showMore/ShowMore.jsx";

const SubscriptionCard = ({title, icon, discount, text, content, specialOffer}) => {
  return (
    <div className='subscription-card'>
        <div className="subscription-card__top">
          <div className="subscription-card__top_left">
            <img className='subscription-card__icon' src={icon} alt={'icon'}/>
            <div className='h5 text-alt-primary'>{title}</div>
          </div>
          <div>
            <div className='subscription-card__discount'>
              {discount}% off
            </div>
            <div className='text-primary text-s'>{specialOffer}</div>
          </div>

        </div>
      <ShowMore
        text={text}
        content={content}
      />
    </div>
  );
};

export default SubscriptionCard;
// <div className="square"></div>
// .square {
//   position: relative;
//   width: 100px;
//   height: 100px;
//   background-color: #f00;
//   margin: 0 auto;
//   background: linear-gradient(113.36deg, #FF41B3 19.17%, #7E00E0 84.92%);
// }
// .square:before {
//   content: "";
//   position: absolute;
//   top: 39%;
//   left: -61px;
//   width: 75px;
//   height: 74px;
//   transform: rotate(45deg) translateY(-50%);
//   background: red;
//   border-radius: 7px;
//   background: #FF41B3;
//   z-index: -1;
// }