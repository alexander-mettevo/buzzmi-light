import React, {useEffect, useState} from 'react';
import MobileLayout from "../../../layouts/mobileLayout/MobileLayout.jsx";
import {Link, useNavigate} from "react-router-dom";
import PrimaryButton from "../../../reusable/form/items/buttons/PrimaryButton.jsx";
import {useForm} from "react-hook-form";
import {confirmCodeSchema} from "../../../../validationsSchems/confirmCode.js";
import {yupResolver} from "@hookform/resolvers/yup";
import CodeInput from "../../../reusable/form/items/inputs/codeInputs/CodeInput.jsx";
import ResendCode from "../../../reusable/form/items/buttons/ResendCode.jsx";
import FinallyMessage from "../../../reusable/form/items/validation/FinallyMessage.jsx";

const ProvidePhoneCode = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState([]);
  const [valid, setValid] = useState(null);

  const {handleSubmit, register, setValue, getValues} = useForm({
    resolver: yupResolver(confirmCodeSchema)
  });


  const onSubmit = async ({code}) => {
    navigate('/auth/bio')
  };

  const handleResendCode = async () => {

  }
  // todo remove on production
  useEffect(() => {
    if (getValues('code')?.length === 6) {
      if (getValues('code') === '123456') {
        setValid('valid')
      } else {
        setValid('invalid')
      }
    }
  }, [code])

  return (
    <MobileLayout>
      <div className='mb-4'>
        <div className='h4'>
          Provide your contact information
        </div>
        <div className='mt-9 mb-9 mb-sm-20'>
          <img src="/images/assets/phone.png" alt=""/>
        </div>
        <form id={'input-phone-code'} onSubmit={handleSubmit(onSubmit)}>
          <label className={'input-label'}>
            <div>
              Verify your phone number
            </div>
            <div className={'input-code-wrapper '}>
              <input
                className='input-code-wrapper__hide'
                {...register('code')}
                type="text"/>
              {[...Array(6)].map((_, i) => (
                <CodeInput
                  success={valid === 'valid'}
                  error={valid === 'invalid'}
                  setCode={setCode}
                  key={i}
                  index={i}
                  register={register}
                  label={'Input Label'}
                  setValue={setValue}
                  regex={/^[0-9]*$/}
                />
              ))}
            </div>
          </label>
          {
            !valid && (
              <div className='text-r text-secondary mt-9'>
                We sent a 6-digit code to +987654321012. Confirm it belongs to you to keep your account secure.
              </div>
            )}
          <FinallyMessage
            show={valid}
            isValid={valid === 'valid'}
            successTitle='Success!'
            successMessage='Your phone has been verified'
            wrongTitle='Wrong verification number'
            wrongMessage='Re-enter the code'
          />
        </form>
      </div>

      <div>
        <ResendCode handleResendCode={handleResendCode}/>
        <PrimaryButton className={`mb-7 ${(valid !== 'valid' || getValues('code')?.length !== 6) ? 'button_inactive' : ''}`} type="submit"
                       form="input-phone-code">Next</PrimaryButton>
      </div>
    </MobileLayout>
  );
};

export default ProvidePhoneCode;