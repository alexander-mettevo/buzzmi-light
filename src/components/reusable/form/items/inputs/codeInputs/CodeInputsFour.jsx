import React, {useState} from "react";
import CodeInput from "./CodeInput";
import PrimaryButton from "../../../../btns/buttons/PrimaryButton.jsx";
import Form from "../../../Form.jsx";
import userAPI from "../../../../../../store/services/UserService.js";
import ResendCode from "../../../../btns/buttons/ResendCode.jsx";
import {useNavigate} from "react-router-dom";
import ValidationSchema from "../../../../../../../form-validator/ValidationSchema.js";
import {useFormValidator} from "../../../../../../../form-validator/hooks/index.js";

const validationSchema = new ValidationSchema(
  {
    code: [
      {rule: 'required'},
      {rule: 'countDigits', value: 4},
    ],
  }
);
const CodeInputsFour = ({label, formClassName, identifier}) => {
  const navigate = useNavigate();
  const [code, setCode] = useState([]);
  const [sendCode] = userAPI.useForgotPasswordMutation()
  const [confirmCode] = userAPI.useConfirmForgotPasswordMutation()
  const {register, handleSubmit, setValue, values} = useFormValidator(validationSchema, async (formData) => {
    //TODO Place for sending data to API use confirmCode()

    const res = {}
    if (res.error) {
      console.error(res.error)
    } else {
      navigate('/auth/reset-password')
    }
  });

  const handleResendCode = async () => {
    const res = await sendCode({identifier})
    if (res.error) {
      console.error(res.error)
    } else {
      console.log(res)
    }
  }

  return (
    <Form formClassName={formClassName} onSubmit={handleSubmit}>
      <label className={'input-label'}>
        <div>
          {label}
        </div>
        <div className={'input-code-wrapper '}>
          <input
            className='input-code-wrapper__hide'
            {...register('code')}
            type="text"/>
          {[...Array(4)].map((_, i) => (
            <CodeInput
              regex={/^\d{0,1}$/}
              setCode={setCode}
              key={i}
              index={i}
              register={register}
              label={'Input Label'}
              setValue={setValue}
            />
          ))}
        </div>
      </label>
      <div>
        <ResendCode handleResendCode={handleResendCode}/>
        <PrimaryButton className={values?.code?.length !== 4 ? 'button_inactive' : ''} type='submit'>Continue</PrimaryButton>
      </div>
    </Form>
  );
};

export default CodeInputsFour;