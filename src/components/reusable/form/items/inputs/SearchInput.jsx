import React from 'react';
import Form from "../../Form.jsx";
import OldInput from "./OldInput.jsx";
import {useForm} from "react-hook-form";

const SearchInput = () => {
  const {register, handleSubmit, formState: {errors}} = useForm({
    mode: 'onBlur',
    defaultValues: {
      search: '',
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} formClassName='search-form'>
      <OldInput placeholder="Search" name="search" register={register}/>
      <button type='submit' className='search-form__btn'><i className="fa-solid fa-magnifying-glass input__icon"/></button>
    </Form>
  );
};

export default SearchInput;