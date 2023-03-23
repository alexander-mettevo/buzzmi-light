import React from 'react';
import {useNavigate} from "react-router-dom";
const BackBtn = () => {
  const navigate = useNavigate();

  return (
   <div className='back-btn back-btn_d' >
     <button className="back-btn__content" onClick={() => navigate(-1)}>
       <i className="back-btn__icon fa-solid fa-arrow-right"></i>
       <span className='text-primary'>Back</span>
     </button>
   </div>
  );
};

export default BackBtn;