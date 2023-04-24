import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import MobileLayout from "../../../layouts/mobileLayout/MobileLayout.jsx";
import CodeInput from "../../../reusable/form/items/inputs/codeInputs/CodeInput.jsx";
import FinallyMessage from "../../../reusable/form/items/validation/FinallyMessage.jsx";
import ResendCode from "../../../reusable/btns/buttons/ResendCode.jsx";
import PrimaryButton from "../../../reusable/btns/buttons/PrimaryButton.jsx";
import {useFormValidator} from "../../../../../form-validator/hooks/index.js";
import ValidationSchema from "../../../../../form-validator/ValidationSchema.js";

const validationSchema = new ValidationSchema(
  {
    code: [
      {rule: 'required'},
    ]
  }
);

//TODO add handler error from API
const ProvideEmailCode = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState([]);
  const [valid, setValid] = useState(null);


  const {register, handleSubmit, values, setValue} = useFormValidator(validationSchema, async (formData) => {
    //TODO Place for sending data to API
    const res = {}
    if (res.error) {
      setValid('invalid')
      console.error(res.error)
    } else {
      setValid('valid')
      navigate('/auth/bio')
    }
  });

  const handleResendCode = async () => {
    //TODO Place for sending data to API
  }


  return (
    <MobileLayout>
      <div className='mb-4'>
        <div className='h4'>
          Provide your contact information
        </div>
        <div className='mt-9 mb-9 mb-sm-20'>
          <img src="/images/assets/mail.png" alt=""/>
        </div>
        <form id={'input-phone-code'} onSubmit={handleSubmit}>
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
                  regex={/^[0-9]*$/}
                />
              ))}
            </div>
          </label>
          {
            !valid && (
              <div className='text-r text-secondary mt-9'>
                We sent a 6-digit code to {localStorage.getItem('identifier')}. Confirm it belongs to you to keep your account secure.
              </div>
            )}
          <FinallyMessage
            show={valid}
            isValid={valid === 'valid'}
            successTitle='Success!'
            successMessage='Your email address has been verified'
            wrongTitle='Wrong verification code'
            wrongMessage='Re-enter the code'
          />
        </form>
      </div>

      <div>
        <ResendCode handleResendCode={handleResendCode}/>
        <PrimaryButton className={`mb-7 ${(values.code?.length !== 6) ? 'button_inactive' : ''}`} type="submit"
                       form="input-phone-code">Next</PrimaryButton>
      </div>
    </MobileLayout>
  );
};

export default ProvideEmailCode;