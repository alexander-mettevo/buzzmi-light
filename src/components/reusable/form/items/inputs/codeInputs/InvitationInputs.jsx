import React from 'react';
import CodeInput from "./CodeInput.jsx";

const InvitationInputs = ({setCode, setValue, register}) => {
  return (
    <div className='input-wrapper mb-5'>
      <label className={'input-label '}>
        <div>
          Invitation Code
        </div>
        <input
          className='input-code-wrapper__hide'
          {...register('code')}
          type="text"/>
        <div className={'input-code-wrapper '}>

          {[...Array(6)].map((_, i) => (
            <CodeInput
              regex={/^[0-9a-zA-Z_]$/}
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
    </div>

  );
};

export default InvitationInputs;