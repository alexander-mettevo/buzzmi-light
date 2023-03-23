import React, {useEffect, useState} from 'react';
import Form from "../../../../reusable/form/Form.jsx";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import OldInput from "../../../../reusable/form/items/inputs/OldInput.jsx";
import DateInput from "../../../../reusable/form/items/inputs/dateInputs/DateInput.jsx";
import InvitationInputs from "../../../../reusable/form/items/inputs/codeInputs/InvitationInputs.jsx";
import * as yup from "yup";
import ValidationSchema from "../../../../../../form-validator/ValidationSchema.js";
import {useFormValidator} from "../../../../../../form-validator/hooks/index.js";
import Input from "../../../../reusable/form/items/inputs/Input.jsx";

const validationSchema = new ValidationSchema(
  {
    name: [
      {rule: 'required'},
    ],
    invitation: [],
    birthday: [
      {rule: 'required'},
      {rule: 'age18Plus'},
    ]
  }
);
const BioPageForm = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState([]);
  const [error, setError] = useState(null);
  const [isInvitation, setIsInvitation] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    if (type === 'invite') {
      setIsInvitation(true)
    }
  }, [])

  const {register, handleSubmit, setValue, errors} = useFormValidator(validationSchema, async (formData) => {
    //TODO Place for sending data to API
    const res = {}
    if (res.error) {
      console.error(res.error)
    } else {
      navigate('/auth/create-password')
    }
  });


  return (
    <Form error={error} formClassName='mb-9' onSubmit={handleSubmit} id='input-bio'>
      <Input label='Your Name' name='name' register={register}/>
      {isInvitation &&
        <InvitationInputs setValue={setValue} setCode={setCode} register={register} name={'invitation'}/>}
      <DateInput label={'When your birthday?'} setValue={setValue} errors={errors.birthday}/>
    </Form>
  );
};

export default BioPageForm;