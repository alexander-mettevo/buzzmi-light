import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import SecondaryButton from "../../../reusable/btns/buttons/SecondaryButton.jsx";

const UsersList = ({users}) => {
  const handleInviteButton = () => {
    //TODO Place for send data to API
  }


  return (
    <div>
      {users.map((user, index) => (
        <div key={index + 'user'} className='row g-0 mb-3 w-100 pe-sm-2'>
            <div className='col-3 col-sm-2 '>
              <img src={user.avatar} className='profile-user__img' alt="avatar"/>
            </div>
            <div className='col-9 col-sm-10 text-left '>
              <div className='mb-2 d-flex  justify-content-between align-items-center w-100'>
                <span className='h6'>
                     {user.name}
                </span>
                  <SecondaryButton onClick={handleInviteButton} className='p-1 button_secondary_invite'>invite</SecondaryButton>
              </div>
              <div className='text-r text-secondary'>
                {user.description}
              </div>
          </div>

        </div>
        ))}
    </div>
  );
};

export default UsersList;