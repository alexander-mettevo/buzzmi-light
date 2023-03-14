import React from 'react';
import {Link} from "react-router-dom";
import {socials} from "./mocData.js";
import ScrollContainer from 'react-indiana-drag-scroll'

const SocialRows = () => {
  return (

      <ScrollContainer vertical={false} className="profile-social__row py-4 my-3 my-sm-9">
        {socials.map((social, index) => (
            <Link key={index} to={social.link} className='mb-1'>
              <div className='profile-social__icon mb-2 '>
                <img src={social.icon} alt="social icon"/>
              </div>
              <div>
                {social.name}
              </div>
            </Link>
        ))}
      </ScrollContainer>

  );
};

export default SocialRows;