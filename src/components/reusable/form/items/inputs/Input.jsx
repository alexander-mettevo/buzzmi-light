import React from 'react';

const Input = (args) => {
  const {
    errors,
    success,
    inactive,
    label,
    alterAction,
    name,
    register,
    objectValidation,
    validList,
    placeholder,
    ...props
  } = args;
//todo write validation
  return (
    <div className={'input-wrapper'}>
      <label className={'input-label'}>
        <div>
          {label}
        </div>
        <div className='input-border-wrapper'>
          <input
            type="text"
            className={`input input_simple-text ${inactive ? '_inactive' : ''} ${errors ? '_form-error' : ''} ${success ? '_form-success' : ''}`}
            placeholder={placeholder}
            {...register(name, objectValidation)}
            {...props}
          />
        </div>

      </label>
      <div>
        {errors && <div className={'text-error text-center'}>{errors.message}</div>}
      </div>
      {validList && (
        <ul className='validation-list text-s'>
          <li className='validation-list__item validation-list__item_success '> from 8 to 20 characters</li>
          <li className='validation-list__item validation-list__item_error'> contain at least one upper case latter</li>
          <li className='validation-list__item validation-list__item_error'> contain at least one special character</li>
        </ul>
      )}

      <div className={'input-alter-action'}>
        {alterAction}
      </div>
    </div>
  );
};

export default Input;