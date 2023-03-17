import React, {useRef, useState} from 'react';
import Select from "react-select";
import {phoneNumbersCode} from "./mocData.jsx";
import {DropdownIndicator} from "./CustomSelect.jsx";
import * as yup from "yup";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup.js";
import Form from "../Form.jsx";

const phoneSchema = yup.object({
  countryCode: yup.string()
    .matches(/^\+?[0-9]{1,5}$/, 'Please enter a valid country code')
    .required('Country code is required'),
  otherNumbers: yup.string()
    .matches(/^\d{10}$/, 'Please enter a valid phone number')
    .required('Phone number is required'),
})
const PhoneSelect = () => {
  const navigate = useNavigate();
  const {register, handleSubmit, formState: {errors}, setValue} = useForm({
    resolver: yupResolver(phoneSchema)
  });

  const [selected, setSelected] = useState(null);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  }

  const handleBlur = () => {
    setFocused(false);
  }

  const onSubmit = (data) => {
    console.log(data)
    navigate('/auth/provide-phone-code')
  }

  const handleSelect = (e) => {
    setSelected(e);
    console.log(e)
    setValue('countryCode', e.value);
  }

  return (
    <Form id="phone-code" onSubmit={handleSubmit(onSubmit)}>
      <div
        className={`phone-select ${focused ? 'phone-select_active' : ''} ${errors.countryCode || errors.otherNumbers ? 'phone-select_error' : ''}`}
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
          {...register('otherNumbers')}
        />
      </div>
      <div className='mt-2'>
        {errors.countryCode && <div className={'text-error text-center'}>{errors.countryCode.message}</div>}
        {errors.otherNumbers && <div className={'text-error text-center'}>{errors.otherNumbers.message}</div>}
      </div>
    </Form>
  );
};

export default PhoneSelect;