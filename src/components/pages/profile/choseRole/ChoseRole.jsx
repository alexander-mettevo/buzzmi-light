import React from 'react';
import Role from "./items/Role.jsx";
import {useNavigate} from "react-router-dom";

const ChoseRole = () => {
  return (
    <>
      <div className='h4'>Chose your role</div>
      <div className='text-r text-center role__intro'>
        <div>We're curious:</div>
        <div>Are you a...</div>
      </div>
      <ul className='role-list'>
        <li><Role img='/images/role/explorer.png' title='Explorer' href='/profile/add-creators'/></li>
        <li><Role img='/images/role/creator.png' title='Creator' href='/profile/add-creators'/></li>
        <li><Role img='/images/role/both.png' title='Both' href='/profile/add-creators'/></li>
      </ul>
    </>
  );
};

export default ChoseRole;