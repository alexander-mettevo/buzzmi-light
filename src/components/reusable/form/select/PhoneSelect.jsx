import React, {useState} from 'react';
import Select from "react-select";
import {phoneNumbersCode} from "./mocData.jsx";
import {DropdownIndicator} from "./CustomSelect.jsx";

const PhoneSelect = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className='phone-select'>
      <Select
        components={{DropdownIndicator}}
        options={phoneNumbersCode}
        value={selected}
        onChange={setSelected}
        hasSelectAll={false}
        labelledBy="Select"
        className={`phone-select__select`}
        disableSearch={true}
        classNamePrefix='phone-select'
      />
      <input className='phone-select__input' placeholder='Phone number' type="text"/>
    </div>
  );
};

export default PhoneSelect;