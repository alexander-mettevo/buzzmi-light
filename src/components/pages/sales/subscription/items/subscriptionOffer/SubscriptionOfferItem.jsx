import React from 'react';
import Discount from "../Discount.jsx";

const SubscriptionOfferItem = (args) => {
  const {name, value, mainPrice, oldPrice, newPrice, isSpecialOffer, checked, discount, specialOffer, ...props} = args;

  return (
    <label className={`offer-item ${checked ? 'offer-item_checked' : ''}`}>
      <div className="offer-item__left">
        <div className='offer-item__radio-wrapper'>
          <input
            className='offer-item__radio'
            type="radio" name={name}
            value={value}
            checked={checked}
            {...props}/>
        </div>

      </div>
      <div className="offer-item__right">
        <div className="offer-item__right-top text-left">
          <div>
            <span className="offer-item__price_main h5 ">
            {mainPrice}
          </span>
            {isSpecialOffer && <span className="offer-item__special_offer text-r h5 text-alt-primary">Special Offer</span>}
          </div>

          {discount && <Discount discount={discount} specialOffer={specialOffer}/>}
        </div>
        {
          !!oldPrice && (
            <div className="offer-item__right-bottom text-r">
              <span className="offer-item__price_old">
                {oldPrice}
              </span>
              <span className="offer-item__price_new">
                {newPrice}
              </span>
            </div>
          )
        }
      </div>
    </label>
  );
};

export default SubscriptionOfferItem;