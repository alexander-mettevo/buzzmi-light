import React, {useState} from 'react';
import Select from "react-select";
import {phoneNumbersCode} from "./mocData.jsx";
import {DropdownIndicator} from "./CustomSelect.jsx";
import {useNavigate} from "react-router-dom";
import Form from "../Form.jsx";
import {useFormValidator} from "../../../../../form-validator/hooks/index.js";
import ValidationSchema from "../../../../../form-validator/ValidationSchema.js";

const validationSchema = new ValidationSchema(
  {
    countryCode: [
      {rule: 'required'},
      {rule: 'countryPhoneCode'},
    ],
    phone: [
      {rule: 'required'},
      {rule: 'phone'},
    ],
  }
);
const PhoneSelect = () => {
  const navigate = useNavigate();
  const {register, handleSubmit, setValue, errors} = useFormValidator(validationSchema, async (formData) => {
    //TODO Place for sending data to API
    const res = {}
    if (res.error) {
      console.error(res.error)
    } else {
      localStorage.setItem('identifier', formData.countryCode + formData.phone)
      navigate('/auth/provide-phone-code')
    }
  });
  const [selected, setSelected] = useState(null);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  }

  const handleBlur = () => {
    setFocused(false);
  }

  const handleSelect = (e) => {
    setSelected(e);
    setValue('countryCode', e.value);
  }

  return (
    <Form id="phone-code" onSubmit={handleSubmit}>
      <div
        className={`phone-select ${focused ? 'phone-select_active' : ''} ${errors.countryCode || errors.phone ? 'phone-select_error' : ''}`}
        onClick={handleFocus} onBlur={handleBlur}>
        <Select
          components={{DropdownIndicator}}
          options={phoneNumbersCode}
          value={selected}
          onChange={handleSelect}
          hasSelectAll={false}
          labelledBy="Select"
          className={`phone-select__select`}
          disableSearch={true}
          classNamePrefix='phone-select'
        />
        <input
          className='phone-select__input'
          placeholder='Phone number'
          type="text"
          {...register('phone')}
        />
      </div>
      <div className='mt-2'>
        {errors.countryCode && <div className={'text-error text-center'}>{errors.countryCode}</div>}
        {errors.phone && <div className={'text-error text-center'}>{errors.phone}</div>}
      </div>
    </Form>
  );
};

export default PhoneSelect;