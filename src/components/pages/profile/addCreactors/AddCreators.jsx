import React from 'react';
import {Link} from "react-router-dom";
import PrimaryButton from "../../../reusable/form/items/buttons/PrimaryButton.jsx";
import ProfileItemsCollection from "../items/ProfileItemsCollection.jsx";
import AddCreatorsMobileBtns from "./items/AddCreatorsMobileBtns.jsx";
import {creators} from "../items/mocData.js";

const AddCreators = () => {
  return (
    <div className='profile__wrapper'>
      <div className='row align-items-center mb-md-6 mb-2 gx-0'>
        <div className='col-3'>
          <img src="/images/assets/rocket.png" alt="rocket" className='img-fluid'/>
        </div>
        <div className='col text-left'>
          <div className='h4 mb-2'>The spotlight's on you!</div>
          <div className='text-r'>Who are your top 3 creators? Let us know!</div>
        </div>
      </div>
      <ProfileItemsCollection items={creators}/>
      <AddCreatorsMobileBtns/>
      <div className='d-none d-sm-block'>
        <Link to='/auth/invite' className='text-primary h6'>
          or invite friends induvidualy
        </Link>
        <Link to='/auth/invite' className='d-block my-sm-8'>
          <PrimaryButton>Next</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default AddCreators;