import React from 'react';
import RegularButton from "../../../../../reusable/btns/buttons/RegularButton.jsx";
import GoogleSvg from "./icons/GoogleSVG.jsx";
import AppleSvg from "./icons/AppleSVG.jsx";
import FacebookSvg from "./icons/FacebookSVG.jsx";
import {Link} from "react-router-dom";
import useWindowSize from "../../../../../../hooks/useWindowSize.js";
import {useDispatch} from "react-redux";
import {openModal} from "../../../../../../store/slices/modalSlice/modalSlice.js";

const QuadServicesButtons = () => {
  const {width} = useWindowSize();
  const dispatch = useDispatch();
  const handleGoogleClick = () => {
    //TODO code for auth with Google
  }

  const handleFacebookClick = () => {
    //TODO code for auth with Facebook
  }

  const handleAppleClick = () => {
    //TODO code for auth with Apple
  }

  const handleOtherServicesClick = () => {
    dispatch(openModal({
      modalName: 'OtherServicesModal'
    }));
  }


  return (
    <div className='services'>
      <RegularButton icon={<GoogleSvg/>} className='_fw' onClick={handleGoogleClick}>Continue with Google</RegularButton>
      <RegularButton icon={<FacebookSvg/>} className='_fw' onClick={handleFacebookClick}>Continue with Facebook</RegularButton>
      <RegularButton icon={<AppleSvg/>} className='_fw' onClick={handleAppleClick}>Continue with Apple</RegularButton>
      {
        width > 992 ? (
          <Link to={'/other-services '} className={'d-flex w-100 justify-content-center'}>
            <RegularButton className='_fw'>Choose another Social Network</RegularButton>
          </Link>
        ) : (
          <RegularButton onClick={handleOtherServicesClick} className='_fw'>Choose another Social Network</RegularButton>
        )
      }

    </div>
  );
};

export default QuadServicesButtons;