import React from 'react';
import {Link} from "react-router-dom";

const ChoseSocial = () => {
  return (
    <ul className='chose-social'>
      <li className='mb-2'>
        <Link to={'/profile/add-contacts'} className={'d-flex justify-content-between align-items-center'}>
          <div className='align-items-center d-flex'><img src="/images/add-users/assets/users.svg" alt="" className='chose-social__icon'/><span className='h6'>Your contacts</span></div>
          <i className="fa-solid fa-chevron-right text-primary"/></Link>
      </li>
      <li className='mb-2'>
        <Link to={'/'} className={'d-flex justify-content-between align-items-center'}>
          <div className='align-items-center d-flex'><img src="/images/add-users/assets/facebook.svg" alt="" className='chose-social__icon'/><span className='h6'>Facebook friends</span>
          </div>
          <i className="fa-solid fa-chevron-right text-primary"/></Link>
      </li>
      <li className='mb-2'>
        <Link to={'/'} className={'d-flex justify-content-between align-items-center'}>
          <div className='align-items-center d-flex'><img src="/images/add-users/assets/instagram.svg" alt="" className='chose-social__icon'/><span className='h6'>Instagram friends</span>
          </div>
          <i className="fa-solid fa-chevron-right text-primary"/></Link>
      </li>
      <li className='mb-2'>
        <Link to={'/profile/add-friends'} className={'d-flex justify-content-between align-items-center'}>
          <div className='align-items-center d-flex'><img src="/images/add-users/assets/arrow.svg" alt="" className='chose-social__icon'/><span className='h6'>Invite friends</span></div>
          <i className="fa-solid fa-chevron-right text-primary"/></Link>
      </li>
    </ul>
  );
};

export default ChoseSocial;