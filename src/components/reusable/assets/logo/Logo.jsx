import React from 'react';
import LogoSVG from "./LogoSVG.jsx";
const Logo = ({subtitle}) => {
  return (
    <div className='logo'>
      <div>
        <LogoSVG/>
      </div>
      <div className='logo__text'>
        {subtitle && <div className={'h4'}>{subtitle}</div>}
        <div className={'h2'}>BUZZMI</div>
      </div>
    </div>
  );
};

export default Logo;