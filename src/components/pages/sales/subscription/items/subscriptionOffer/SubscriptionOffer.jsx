import React, {useState} from 'react';
import SubscriptionOfferItem from './SubscriptionOfferItem.jsx';

const SubscriptionOffer = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='subscription-offer'>
      <SubscriptionOfferItem
        mainPrice='Monthly $7'
        value='option1'
        oldPrice='Yearly $144'
        newPrice='Yearly $84'
        checked={selectedOption === 'option1'}
        onChange={handleOptionChange}
        discount={40}
      />
      <SubscriptionOfferItem
        mainPrice='Monthly $12'
        value='option2'
        checked={selectedOption === 'option2'}
        onChange={handleOptionChange}
      />
      <SubscriptionOfferItem
        mainPrice='Daily $0.1'
        value='option3'
        checked={selectedOption === 'option3'}
        onChange={handleOptionChange}
        isSpecialOffer
      />
    </div>
  );
};

export default SubscriptionOffer;