import React, {useState} from "react";
import {useForm} from "react-hook-form";
import CodeInput from "./CodeInput";
import PrimaryButton from "../../buttons/PrimaryButton.jsx";
import Form from "../../../Form.jsx";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup.js";
import {confirmCodeSchema} from "../../../../../../validationsSchems/confirmCode.js";
import userAPI from "../../../../../../store/services/UserService.js";
import ResendCode from "../../buttons/ResendCode.jsx";
import {useNavigate} from "react-router-dom";

const CodeInputs = ({label, formClassName, identifier}) => {
  const navigate = useNavigate();
  const [code, setCode] = useState([]);
  const [sendCode] = userAPI.useForgotPasswordMutation()
  const [confirmCode] = userAPI.useConfirmForgotPasswordMutation()

  const {handleSubmit, register, setValue, getValues} = useForm({
    resolver: yupResolver(confirmCodeSchema)
  });

  const onSubmit = async ({code}) => {
    const res = await confirmCode({identifier, code})
    if (res.error) {
      console.error(res.error)
    } else {
      navigate('/auth/reset-password')
    }
  };

  const handleResendCode = async () => {
    const res = await sendCode({identifier})
    if (res.error) {
      console.error(res.error)
    } else {
      console.log(res)
    }
  }

  return (
    <Form formClassName={formClassName} onSubmit={handleSubmit(onSubmit)}>
      <label className={'input-label'}>
        <div>
          {label}
        </div>
        <div className={'input-code-wrapper '}>
          <input
            className='input-code-wrapper__hide'
            {...register('code')}
            type="text"/>
          {[...Array(6)].map((_, i) => (
            <CodeInput
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
        <PrimaryButton className={getValues('code')?.length !== 6 ? 'button_inactive' : ''} type='submit'>Continue</PrimaryButton>
      </div>
    </Form>
  );
};

export default CodeInputs;