import React from 'react';
import MobileLayout from "../../../layouts/mobileLayout/MobileLayout.jsx";
import Policy from "../registration/items/Policy.jsx";
import PrimaryButton from "../../../reusable/form/items/buttons/PrimaryButton.jsx";
import BioPageForm from "./items/BioPageForm.jsx";

const BioPage = () => {
  return (
    <MobileLayout>
      <div className='mb-4'>
        <div className='mb-5 mb-sm-9'>
          <div className='h4 mb-2'>Time to buzz into action!</div>
          <div className='text-r mb-6'>
            We just need a few more details to personalize your Buzzmi experience.
          </div>
          <img src="/images/assets/smile.png" alt="smile"/>
        </div>
      </div>
      <BioPageForm/>
      <div>
        <PrimaryButton className={`mb-7`} type="submit" form="input-bio">Next</PrimaryButton>
        <Policy/>
      </div>
    </MobileLayout>
  );
};

export default BioPage;