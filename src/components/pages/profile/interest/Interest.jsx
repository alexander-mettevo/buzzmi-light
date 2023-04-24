import React, {useState} from 'react';
import ProfileItemsCollection from "../items/ProfileItemsCollection.jsx";
import AddCreatorsMobileBtns from "../addCreactors/items/AddCreatorsMobileBtns.jsx";
import {Link, useNavigate} from "react-router-dom";
import PrimaryButton from "../../../reusable/btns/buttons/PrimaryButton.jsx";
import {interests} from "../items/mocData.js";
import {useDispatch} from "react-redux";
import {setRegistrationData} from "../../../../store/slices/userSlice/userSlice.js";

const Interest = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const handleContinue = () => {
    dispatch(setRegistrationData({creators: selectedItems}))
    navigation('/sales')
  }


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
      <ProfileItemsCollection selectedItems={selectedItems} setSelectedItems={setSelectedItems} items={interests}/>
      <AddCreatorsMobileBtns/>
      <div className='d-none d-sm-block'>
        <buttin onClick={handleContinue} className='d-block my-sm-8 w-100'>
          <PrimaryButton>Next</PrimaryButton>
        </buttin>
      </div>
    </div>
  );
};

export default Interest;