import React from 'react';

const Input = ({errors, success, inactive, label, alterAction, name, register, objectValidation, ...props}) => {
//todo write validation
  return (
    <div className={'input-wrapper'}>
      <label className={'input-label'}>
        <div>
          {label}
        </div>

        <input
          type="text"
          className={`input input_simple-text ${inactive ? '_inactive' : ''} ${errors ? '_form-error' : ''} ${success ? '_form-success' : ''}`}
          placeholder={'Test placeholder'}
          {...register(name, objectValidation)}
          {...props}
        />
      </label>
      <div>
        {errors && <div className={'text-error text-center'}>{errors.message}</div>}
      </div>
      {/*<ul>*/}
      {/*  validation list*/}
      {/*</ul>*/}

      <div className={'input-alter-action'}>
        {alterAction}
      </div>
    </div>
  );
};

export default Input;