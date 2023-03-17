import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {confirmCodeSchema} from "../../../../validationsSchems/confirmCode.js";
import MobileLayout from "../../../layouts/mobileLayout/MobileLayout.jsx";
import CodeInput from "../../../reusable/form/items/inputs/codeInputs/CodeInput.jsx";
import FinallyMessage from "../../../reusable/form/items/validation/FinallyMessage.jsx";
import ResendCode from "../../../reusable/form/items/buttons/ResendCode.jsx";
import PrimaryButton from "../../../reusable/form/items/buttons/PrimaryButton.jsx";

const ProvideEmailCode = () => {
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
          <img src="/images/assets/mail.png" alt=""/>
        </div>
        <form id={'input-phone-code'} onSubmit={handleSubmit(onSubmit)}>
          <label className={'input-label'}>
            <div>
              Verify your email
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
                />
              ))}
            </div>
          </label>
          {
            !valid && (
              <div className='text-r text-secondary mt-9'>
                We sent a 6-digit code to youremail@mail.com. Confirm it belongs to you to keep your account secure.
              </div>
            )}
          <FinallyMessage
            show={valid}
            isValid={valid === 'valid'}
            successTitle='Success!'
            successMessage='Your email address has been verified'
            wrongTitle='Wrong verification email'
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

export default ProvideEmailCode;