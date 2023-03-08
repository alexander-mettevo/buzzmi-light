import React from 'react';
import {useDispatch} from "react-redux";
import {openModal} from "../../../../store/slices/modalSlice/modalSlice.js";

const SupportBtn = ({isOppositeColor}) => {
  const dispatch = useDispatch();

  const handleSupportBtnClick = () => {
    dispatch(openModal({
      modalName: 'Report'
    }));
  }

  return (
    <button onClick={handleSupportBtnClick} className={`support__helper  ${isOppositeColor ? 'support__helper_opposite' : ''}`}>
      <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 34C26.8366 34 34 26.8366 34 18C34 9.16344 26.8366 2 18 2C9.16344 2 2 9.16344 2 18C2 26.8366 9.16344 34 18 34Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.3442 13.2003C13.7204 12.131 14.4629 11.2293 15.4402 10.6549C16.4174 10.0806 17.5665 9.87063 18.6837 10.0623C19.801 10.2539 20.8143 10.8348 21.5444 11.702C22.2744 12.5692 22.6739 13.6668 22.6722 14.8003C22.6722 18.0003 17.8722 19.6003 17.8722 19.6003" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 26H18.015" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

export default SupportBtn;