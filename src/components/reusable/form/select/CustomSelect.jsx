import React, {useState} from 'react';
import Select from 'react-select';

export const DropdownIndicator = () => {
  return (
    <i className="fa-solid fa-chevron-down select__arrow text-secondary"/>
  );
};

const CustomSelect = ({className, options, selected, setSelected}) => {


  return (
    <Select
      components={{DropdownIndicator}}
      options={options}
      value={selected}
      onChange={setSelected}
      hasSelectAll={false}
      labelledBy="Select"
      className={`select ${!!className ? className : ''}`}
      disableSearch={true}
      classNamePrefix='select'
    />
  );
};

export default CustomSelect;