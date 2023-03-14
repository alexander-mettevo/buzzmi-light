import React from 'react';
import {Link} from "react-router-dom";

const Role = ({img, title, href}) => {
  return (
    <Link to={href} className='role'>
      <div className='role__img'>
        <img src={img} alt="role"/>
      </div>

      <span className='h4'>{title}</span>
    </Link>
  );
};

export default Role;