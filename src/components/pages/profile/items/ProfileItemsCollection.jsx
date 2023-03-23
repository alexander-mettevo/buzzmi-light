import React, {useEffect, useState} from 'react';
import SearchInput from "../../../reusable/form/items/inputs/SearchInput.jsx";
import {useForm} from "react-hook-form";

const ProfileItemsCollection = ({items, selectedItems, setSelectedItems}) => {
  console.log('selectedItems', selectedItems)
  const handleCheckboxChange = (e) => {
    const {name, checked} = e.target;
    if (checked) {
      setSelectedItems([...selectedItems, name]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== name));
    }
  }

  useEffect(() => {
    console.log(selectedItems);

  }, [selectedItems]);

  return (
    <div className='mb-5'>
      <div>
        <SearchInput/>
      </div>
      <form className='row g-4 profile__content'>
        {items.map((creator, index) => (
          <label className={'col-sm-3 col-4'} key={index}>
            <input
              type="checkbox"
              name={creator.name}
              onChange={handleCheckboxChange}
              className='profile__checkbox'
            />
            <div
              className={`profile-image profile-image_1
               ${ selectedItems.find(item => item === creator.name) ? 'profile-image__checked' : ''}
               `}>
              <img src={creator.avatar} alt={creator.name} className='img-fluid'/>
            </div>
            <div className='mt-1 text-secondary text-s'>{creator.name}</div>
          </label>
        ))}
      </form>
    </div>
  );
};

export default ProfileItemsCollection;