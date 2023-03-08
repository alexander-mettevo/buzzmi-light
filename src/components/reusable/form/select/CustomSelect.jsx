import React, {useState} from 'react';
import {options} from "./mocData.jsx";
import Select from 'react-select';

// const options = [
//   { label: "Grapes 🍇", value: "grapes" },
//   { label: "Mango 🥭", value: "mango" },
//   { label: "Strawberry 🍓", value: "strawberry", disabled: true },
// ];


const CustomSelect = () => {
  const [selected, setSelected] = useState([]);



  return (
    <>
      <div style={{marginBottom: '30px'}}>
      <Select
        options={options}
        value={selected}
        onChange={setSelected}
        hasSelectAll={false}
        labelledBy="Select"
        className='select '
        disableSearch={true}
        classNamePrefix='select'
      />
      </div>
    </>

  );
};

export default CustomSelect;