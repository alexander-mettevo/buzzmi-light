import React from 'react';
import RegularButton from "../../../../../reusable/btns/buttons/RegularButton.jsx";
import GoogleSvg from "../../../login/items/serviceButtons/icons/GoogleSVG.jsx";
import FacebookSvg from "../../../login/items/serviceButtons/icons/FacebookSVG.jsx";
import AppleSvg from "../../../login/items/serviceButtons/icons/AppleSVG.jsx";

const OtherServicesButtons = () => {

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
    <div className='services'>
      <RegularButton icon={<GoogleSvg/>} className='_fw' onClick={handleGoogleClick}>Continue with Google</RegularButton>
      <RegularButton icon={<FacebookSvg/>} className='_fw' onClick={handleFacebookClick}>Continue with Facebook</RegularButton>
      <RegularButton icon={<AppleSvg/>} className='_fw' onClick={handleAppleClick}>Continue with Apple</RegularButton>
      <RegularButton icon={<GoogleSvg/>} className='_fw' onClick={handleGoogleClick}>Continue with Google</RegularButton>
      <RegularButton icon={<FacebookSvg/>} className='_fw' onClick={handleFacebookClick}>Continue with Facebook</RegularButton>
      <RegularButton icon={<AppleSvg/>} className='_fw' onClick={handleAppleClick}>Continue with Apple</RegularButton>
      <RegularButton icon={<GoogleSvg/>} className='_fw' onClick={handleGoogleClick}>Continue with Google</RegularButton>
      <RegularButton icon={<FacebookSvg/>} className='_fw' onClick={handleFacebookClick}>Continue with Facebook</RegularButton>
      <RegularButton icon={<AppleSvg/>} className='_fw' onClick={handleAppleClick}>Continue with Apple</RegularButton>
    </div>
  );
};

export default OtherServicesButtons;