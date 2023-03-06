import React from "react";
import {useForm} from "react-hook-form";
import CodeInput from "./CodeInput";

const CodeInputs = ({label}) => {
  const {handleSubmit, errors, formState, register} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className={'input-label'}>
        <div>
          {label}
        </div>
        <div className={'input-code-wrapper '}>

          {[...Array(6)].map((_, i) => (
            <CodeInput key={i} index={i} register={register} label={'Input Label'}/>
          ))}
        </div>
      </label>
      {errors && errors.code && <p>Введите код</p>}
      <button type="submit" disabled={!formState.isValid}>
        Подтвердить
      </button>
    </form>
  );
};

export default CodeInputs;