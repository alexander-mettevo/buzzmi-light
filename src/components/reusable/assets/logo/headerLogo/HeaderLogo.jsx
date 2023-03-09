import React from 'react';
import HeaderLogoSvg from "./HeaderLogoSVG.jsx";
import {Link} from "react-router-dom";

const HeaderLogo = () => {
  return (
    <Link to='/' className='logo-h'>
      <HeaderLogoSvg/>
      <span className='h5'>
        BUZZMI
      </span>
    </Link>
  );
};

export default HeaderLogo;