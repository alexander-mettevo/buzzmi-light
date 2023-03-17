import React from 'react';

const FinallyMessage = ({show, isValid, successTitle, successMessage, wrongTitle, wrongMessage}) => {

  if (!show) return null
  return (
    <div className='row justify-content-center mt-9'>
      {
        isValid ? (
          <div className='d-flex col-11 col-sm-10 g-0 align-items-center'>
            <div className=' me-2'>
              <img src="/images/assets/success.png" alt=""/>
            </div>
            <div className=' text-left'>
              <div className='h6 mb-2'>{successTitle}</div>
              <div className='text-s text-secondary'>{successMessage}</div>
            </div>
          </div>
        ) : (
          <div className='d-flex col-11 col-sm-10  g-0 align-items-center'>
            <div className=' me-2'>
              <img src="/images/assets/wrong.png" alt=""/>
            </div>
            <div className=' text-left'>
              <div className='h6 mb-2'>{wrongTitle}</div>
              <div className='text-s text-secondary'>{wrongMessage}</div>
            </div>
          </div>
          )
      }
    </div>
  )
};

export default FinallyMessage;