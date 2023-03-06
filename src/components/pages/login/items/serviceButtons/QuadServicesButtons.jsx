import React from 'react';
import RegularButton from "../../../../reusable/form/items/buttons/RegularButton.jsx";
import GoogleSvg from "./icons/GoogleSVG.jsx";
import AppleSvg from "./icons/AppleSVG.jsx";
import FacebookSvg from "./icons/FacebookSVG.jsx";
import {Link} from "react-router-dom";

const QuadServicesButtons = () => {
  const handleGoogleClick = () => {
    //TODO code for auth with Google
  }

  const handleFacebookClick = () => {
    //TODO code for auth with Facebook
  }

  const handleAppleClick = () => {
    //TODO code for auth with Apple
  }


  return (
    <div className='login-service'>
      <RegularButton icon={<GoogleSvg/>} className='_fw' onClick={handleGoogleClick}>Continue with Google</RegularButton>
      <RegularButton icon={<FacebookSvg/>} className='_fw' onClick={handleFacebookClick}>Continue with Facebook</RegularButton>
      <RegularButton icon={<AppleSvg/>} className='_fw' onClick={handleAppleClick}>Continue with Apple</RegularButton>
      <Link to={'/other-services '}>
        <RegularButton className='_fw'>Choose another Social Network</RegularButton>
      </Link>
    </div>
  );
};

export default QuadServicesButtons;