import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import PrimaryButton from "../../../reusable/btns/buttons/PrimaryButton.jsx";
import ProfileItemsCollection from "../items/ProfileItemsCollection.jsx";
import AddCreatorsMobileBtns from "./items/AddCreatorsMobileBtns.jsx";
import {creators} from "../items/mocData.js";
import {useDispatch} from "react-redux";
import {setRegistrationData} from "../../../../store/slices/userSlice/userSlice.js";

const AddCreators = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const handleContinue = () => {
    dispatch(setRegistrationData({creators: selectedItems}))
    navigation('/profile/add-interest')
  }


  return (
    <div className='profile__wrapper'>
      <div className='row align-items-center mb-md-6 mb-2 gx-0 mt-sm-7'>
        <div className='col-4 col-sm-3'>
          <img src="/images/assets/rocket.png" alt="rocket" className='img-fluid'/>
        </div>
        <div className='col text-left'>
          <div className='h4 mb-2'>The spotlight's on you!</div>
          <div className='text-r'>Who are your top 3 creators? Let us know!</div>
        </div>
      </div>
      <ProfileItemsCollection setSelectedItems={setSelectedItems} selectedItems={selectedItems} items={creators}/>
      <AddCreatorsMobileBtns/>
      <div className='d-none d-sm-block'>
        <Link to='/profile/add-people' className='text-primary h6'>
          or invite friends induvidualy
        </Link>
        <button onClick={handleContinue} className='d-block my-sm-8 w-100'>
          <PrimaryButton>Next</PrimaryButton>
        </button>
      </div>
    </div>
  );
};

export default AddCreators;