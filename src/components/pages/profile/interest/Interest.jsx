import React from 'react';
import ProfileItemsCollection from "../items/ProfileItemsCollection.jsx";
import AddCreatorsMobileBtns from "../addCreactors/items/AddCreatorsMobileBtns.jsx";
import {Link} from "react-router-dom";
import PrimaryButton from "../../../reusable/form/items/buttons/PrimaryButton.jsx";
import {interests} from "../items/mocData.js";

const Interest = () => {
  return (
    <div className='profile__wrapper mt-sm-8'>
      <div className='row align-items-center mb-md-6 mb-2 gx-0'>
        <div className='col-3'>
          <img src="/images/assets/rocket.png" alt="rocket" className='img-fluid'/>
        </div>
        <div className='col text-left'>
          <div className='h4 mb-2'>We're all ears!</div>
          <div className='text-r'>Tell us what sparks your interest.</div>
        </div>
      </div>
      <ProfileItemsCollection items={interests}/>
      <AddCreatorsMobileBtns/>
      <div className='d-none d-sm-block'>
        <Link to='/auth/invite' className='d-block my-sm-8'>
          <PrimaryButton>Next</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default Interest;