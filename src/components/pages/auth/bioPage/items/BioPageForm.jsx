import React, {useEffect, useState} from 'react';
import Form from "../../../../reusable/form/Form.jsx";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Input from "../../../../reusable/form/items/inputs/Input.jsx";
import DateInput from "../../../../reusable/form/items/inputs/dateInputs/DateInput.jsx";
import InvitationInputs from "../../../../reusable/form/items/inputs/codeInputs/InvitationInputs.jsx";
import * as yup from "yup";

const bioSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  invitation: yup.string(),
  birthday: yup.date().required('Birthday is required').max(new Date(new Date().setFullYear(new Date().getFullYear() - 18)), 'Sorry, looks like you\'re not eligible for Buzzmi... But thanks for checking us out!')
})

const BioPageForm = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState([]);
  const [error, setError] = useState(null);
  const [isInvitation, setIsInvitation] = useState(false);
  //check ?type=invite in url

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    if (type === 'invite') {
      setIsInvitation(true)
    }
  }, [])


  const {register, handleSubmit, formState: {errors}, setValue} = useForm({
    resolver: yupResolver(bioSchema)
  });

  const onSubmit = async (data) => {
    navigate('/auth/create-password')
  }



  return (
    <Form error={error} formClassName='mb-9' onSubmit={handleSubmit(onSubmit)} id='input-bio'>
      <Input errors={errors.name} label='Your Name' name='name' register={register}/>
      {isInvitation && <InvitationInputs setValue={setValue} setCode={setCode} register={register} name={'invitation'}/>}
      <DateInput label={'When your birthday?'} setValue={setValue} errors={errors.birthday}/>
    </Form>
  );
};

export default BioPageForm;