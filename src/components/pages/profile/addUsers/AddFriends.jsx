import React, {useEffect, useState} from 'react';
import SearchInput from "../../../reusable/form/items/inputs/SearchInput.jsx";
import {Link} from "react-router-dom";
import PrimaryButton from "../../../reusable/btns/buttons/PrimaryButton.jsx";
import UsersList from "../items/UsersList.jsx";
import {contacts as contactsMoc} from "../items/mocData.js";
import SocialRows from "../items/SocialRows.jsx";

const AddFriends = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    //TODO Place for get data from API

    setContacts(contactsMoc)
  }, [])

  return (
    <div className='profile__wrapper mt-sm-7'>
      <div className='row align-items-center mb-md-6  mb-2 gx-0'>
        <div className='d-flex align-items-center justify-content-center '>
          <div className='d-none d-sm-block '>
            <img src="/images/add-users/contact.png" alt="rocket" className='img-fluid'/>
          </div>
            <div className='h4 ms-2 mb-2'>Invite friends</div>
        </div>
        <div className='mb-5'>
          <SocialRows/>
          <div>
            <SearchInput/>
          </div>
          <div className='profile__content'>
            <UsersList users={contacts}/>
          </div>
          <div className='d-none d-sm-block'>
            <Link to='/sales' className='d-block my-sm-8'>
              <PrimaryButton>Next</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFriends;