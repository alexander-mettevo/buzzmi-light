import React from 'react';
import Logo from "../../../reusable/assets/logo/Logo.jsx";

const DoubleLayoutItem = ({title, description, image}) => {
  return (
    <div className='text-center double-layout__item'>
      <Logo/>
      {title && <div className='h4 mb-2 mb-lg-6'>{title}</div>}
      {description && <div className='h6'>{description}</div>}
      <div className={'double-layout__image mt-3 mt-lg-10'}>
        <img src={image} alt="intro"/>
      </div>
    </div>
  );
};

export default DoubleLayoutItem;