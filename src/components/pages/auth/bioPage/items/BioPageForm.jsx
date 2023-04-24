import React, {useEffect, useState} from 'react';
import Form from "../../../../reusable/form/Form.jsx";
import {useNavigate} from "react-router-dom";
import DateInput from "../../../../reusable/form/items/inputs/dateInputs/DateInput.jsx";
import InvitationInputs from "../../../../reusable/form/items/inputs/codeInputs/InvitationInputs.jsx";
import ValidationSchema from "../../../../../../form-validator/ValidationSchema.js";
import {useFormValidator} from "../../../../../../form-validator/hooks/index.js";
import Input from "../../../../reusable/form/items/inputs/Input.jsx";
import PrimaryButton from "../../../../reusable/btns/buttons/PrimaryButton.jsx";
import Policy from "../../registration/items/Policy.jsx";

const validationSchema = new ValidationSchema(
  {
    name: [
      {rule: 'required'},
    ],
    invitation: [],
    birthday: [
      {rule: 'required'},
      {rule: 'dateOfBirth'},
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

  const {register, handleSubmit, setValue, errors, isValid} = useFormValidator(validationSchema, async (formData) => {
    //TODO Place for sending data to API

    const res = {}
    if (res.error) {
      console.error(res.error)
    } else {
      navigate('/auth/create-password')
    }
  }, {showErrorsOnSubmit: false});


  return (
    <>
      <Form error={error} formClassName='mb-9' onSubmit={handleSubmit} id='input-bio'>
        <Input label='Your Name' name='name' register={register}/>
        {isInvitation &&
          <InvitationInputs setValue={setValue} setCode={setCode} register={register} name={'invitation'}/>}
        <DateInput register={register}  label={'When your birthday?'} setValue={setValue} errors={errors.birthday}/>
      </Form>
      <div>
        <PrimaryButton className={`mb-7 ${!isValid ? 'button_inactive' : ''}`} type="submit" form="input-bio">Next</PrimaryButton>
        <Policy/>
      </div>
    </>
  );
};

export default BioPageForm;