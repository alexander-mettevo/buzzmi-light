import React, {useState} from 'react';
import DatePicker from 'react-date-picker';
import Arrow from "../../../../assets/arrow/Arrow.jsx";
import CalendarSvg from "./CalendarSVG.jsx";

const DateInput = ({label, setValue, errors}) => {
  const [value, onChange] = useState(null)

  const handleDateChange = (date) => {
    onChange(date)
    setValue('birthday', date)
  }

  return (
    <div className={'input-label'}>
      <div>
        {label}
      </div>
      <div className={'date-wrapper'}>
        <DatePicker
          className={`date-picker ${!value ? 'line-wrapper' : ''} ${errors ? '_form-error' : ''}`}
          onChange={handleDateChange}
          value={value}
          calendarIcon={<Arrow/>}
          clearIcon={null}
          dayPlaceholder={'DD'}
          monthPlaceholder={'MM'}
          yearPlaceholder={'YYYY'}
          format={'dd/MM/yyyy'}
        />
        <CalendarSvg/>
      </div>
      <div>
        {errors && <div className={'text-error text-center'}>{errors[0]}</div>}
      </div>
      <div className={'date-wrapper__subtitle text-r'}>
        Your birthday won’t be shown publicly
      </div>
    </div>
  );
};

export default DateInput;