import React from 'react';
import {useNavigate} from "react-router-dom";
const BackBtn = () => {
  const navigate = useNavigate();

  return (
   <button className='back-btn' onClick={() => navigate(-1)}>
     <span className='text-primary'>To Back</span>
   </button>
  );
};

export default BackBtn;