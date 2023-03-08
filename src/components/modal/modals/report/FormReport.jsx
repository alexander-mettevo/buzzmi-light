import React, {useState} from 'react';
import {Link} from "react-router-dom";
import CustomSelect from "../../../reusable/form/select/CustomSelect.jsx";
import {options} from "../../../reusable/form/select/mocData.jsx";

const FormReport = () => {
  const [selected, setSelected] = useState([]);

  return (
    <form className='reports'>
      <div className='reports__top'>
        <div className='h4 text-alert reports__title'>Report a problem</div>
        <div>
          <div className='h6 reports__subtitle'>Topics</div>
          <ul className='reports__list'>
            <li><Link to='/'>Logging in</Link></li>
            <li><Link to='/test2'>Forgot password</Link></li>
            <li><Link to='/test3'>Suspended account</Link></li>
            <li><Link to='/test4'>Adding multiply accounts</Link></li>
            <li><Link to='/test5'>Can’t log in with [Social network name]</Link></li>
            <li><Link to='/test6'>Account logged out automatically</Link></li>
            <li><Link to='/test7'>Other</Link></li>
          </ul>
        </div>
      </div>

      <div>
        <div className='h4 text-alert reports__select-title'>Change languge</div>
        <CustomSelect selected={selected} setSelected={setSelected} options={options}/>
      </div>
    </form>
  );
};

export default FormReport;