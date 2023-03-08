import React from 'react';
import {Link} from "react-router-dom";

const Policy = () => {
  return (
    <div className='policy'>
      By continuing, you agree to Buzzmi’s <Link className={'policy__link'} to={'/terms-of-service'}>Terms of Service</Link> and confirm that you
      have read Buzzmi’s <Link className={'policy__link'} to={'/terms-of-service'}>Privacy Policy</Link>.
    </div>
  );
};

export default Policy;