import React from 'react';
import {Link} from "react-router-dom";
import PrimaryButton from "../../../reusable/form/items/buttons/PrimaryButton.jsx";
import SearchInput from "../../../reusable/form/items/inputs/SearchInput.jsx";
import UsersList from "../items/UsersList.jsx";
import {contacts} from "../items/mocData.js";

const AddContacts = () => {
  return (
    <div className='profile__wrapper mt-sm-7'>
      <div className='row align-items-center mb-md-6  mb-2 gx-0'>
        <div className='d-flex align-items-center justify-content-center '>
          <div className='col-3 d-none d-sm-block'>
            <img src="/images/add-users/contact.png" alt="rocket" className='img-fluid'/>
          </div>
          <div className='col-7 text-left'>
            <div className='h4 mb-2'>Your contacts</div>
          </div>
        </div>

        <div className='mb-5'>
          <div>
            <SearchInput/>
          </div>
          <div className='profile__content'>
            <UsersList users={contacts}/>
          </div>
        </div>
        <div className='d-none d-sm-block'>
          <Link to='/auth/invite' className='d-block my-sm-8'>
            <PrimaryButton>Next</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddContacts;