import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setRegistrationData} from "../../../../../store/slices/userSlice/userSlice.js";

const Role = ({img, title, href}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChoseRole = () => {
    dispatch(setRegistrationData({role: title}))
    navigate(href)
  }

  return (
    <button onClick={handleChoseRole} className='role w-100'>
      <div className='role__img'>
        <img src={img} alt="role"/>
      </div>

      <span className='h4'>{title}</span>
    </button>
  );
};

export default Role;