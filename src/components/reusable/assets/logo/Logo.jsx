import React from 'react';
import LogoSVG from "./LogoSVG.jsx";
import {Link} from "react-router-dom";
const Logo = ({subtitle}) => {
  return (
    <Link to='/' className='logo'>
      <div>
        <LogoSVG/>
      </div>
      <div className='logo__text'>
        {subtitle && <div className={'h4'}>{subtitle}</div>}
        <div className={'h2'}>BUZZMI</div>
      </div>
    </Link>
  );
};

export default Logo;