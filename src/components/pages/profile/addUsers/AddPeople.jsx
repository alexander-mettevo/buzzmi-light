import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import PrimaryButton from "../../../reusable/btns/buttons/PrimaryButton.jsx";
import SearchInput from "../../../reusable/form/items/inputs/SearchInput.jsx";
import ChoseSocial from "../items/ChoseSocial.jsx";
import PeopleChoseSocial from "../items/PeopleUsersList.jsx";
import {peoplesData}  from "../items/mocData.js";

const AddPeople = () => {
  const [peoples, setPeoples] = useState({});

  useEffect(() => {
    setPeoples(peoplesData)
  }, [])


  return (
    <div className='profile__wrapper mt-sm-7'>
      <div className='row align-items-center mb-md-6  mb-2 gx-0'>
        <div className='d-flex align-items-center justify-content-center '>
          <div className='d-none d-sm-block '>
            <img src="/images/assets/rocket.png" alt="rocket" className='img-fluid'/>
          </div>
          <div className='h4 ms-2 mb-2'>Invite the people you know</div>
        </div>
        <div className='mb-5'>
          <div>
            <SearchInput/>
          </div>
          <ChoseSocial/>
          <div className='profile__content'>
            <PeopleChoseSocial users={peoples}/>
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

export default AddPeople;