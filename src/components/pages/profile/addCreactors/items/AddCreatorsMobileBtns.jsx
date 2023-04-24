import React from 'react';
import {Link} from "react-router-dom";
import PrimaryButton from "../../../../reusable/btns/buttons/PrimaryButton.jsx";

const AddCreatorsMobileBtns = () => {
  return (
    <div className='profile__mobile-btns p-5'>
      <div>
        <Link to='/auth/invite' className='text-primary h6 mb-5 d-inline-block'>
          or invite friends induvidualy
        </Link>
        <Link to='/auth/invite' className='d-block my-sm-8'>
          <PrimaryButton>Next</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default AddCreatorsMobileBtns;