import React from 'react';
import SearchInput from "../../../reusable/form/items/inputs/SearchInput.jsx";

const ProfileItemsCollection = ({items}) => {
  return (
    <div className='mb-5'>
      <div>
        <SearchInput/>
      </div>
      <div className='row g-4 profile__content'>
        {items.map((creator, index) => (
          <div className={'col-sm-3 col-4'} key={index}>
            <div className='profile-image profile-image_1'>
              <img src={creator.avatar} alt={creator.name} className='img-fluid'/>
            </div>
            <div className='mt-1 text-secondary text-s'>{creator.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileItemsCollection;