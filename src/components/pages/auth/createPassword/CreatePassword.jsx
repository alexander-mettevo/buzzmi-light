import React from 'react';
import MobileLayout from "../../../layouts/mobileLayout/MobileLayout.jsx";
import CreatePasswordForm from "./CreatePasswordForm.jsx";
import PrimaryButton from "../../../reusable/form/items/buttons/PrimaryButton.jsx";

const CreatePassword = () => {
  return (
    <MobileLayout>
      <div className='mb-4'>
        <div className='h5 mb-6'>
          Your security is our top priority. Make sure your password reflects that!
        </div>
        <div className='mb-9'>
          <img src="/images/assets/shield.png" alt="shield"/>
        </div>
        <CreatePasswordForm/>
      </div>

      <div>
        <div className='mb-2 h6 text-secondary'>
          Password requirements:
        </div>
        <div className='mb-6 text-r text-secondary'>
          <span className='fw-bold'>Make it long</span> from 8 to 20 characters. <span className='fw-bold'>Make it diverse.</span> It should contain at
          least one upper case latter and at least one special character
        </div>
        <PrimaryButton className={`mb-7`} type="submit" form="create-password">Next</PrimaryButton>
      </div>
    </MobileLayout>
  );
};

export default CreatePassword;