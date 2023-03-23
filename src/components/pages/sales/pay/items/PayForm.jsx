import React from 'react';
import OldInput from "../../../../reusable/form/items/inputs/OldInput.jsx";
import Form from "../../../../reusable/form/Form.jsx";
import PrimaryButton from "../../../../reusable/form/items/buttons/PrimaryButton.jsx";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import {useFormValidator} from "../../../../../../form-validator/hooks/index.js";
import Input from "../../../../reusable/form/items/inputs/Input.jsx";
import ValidationSchema from "../../../../../../form-validator/ValidationSchema.js";

const validationSchema = new ValidationSchema(
  {
    cardholderName: [
      { rule: 'required' },
      { rule: 'minLength', value: 3 },
      { rule: 'maxLength', value: 40 },
    ],
    cardNumber: [
      { rule: 'required' },
      { rule: 'minLength', value: 16 },
      { rule: 'maxLength', value: 16 },
    ],
    expiration: [
      { rule: 'required' },
    ],
    cvv: [
      { rule: 'required' },
      { rule: 'minLength', value: 3 },
      { rule: 'maxLength', value: 3 },
    ],
  }
);

const PayForm = ({subtotal, discount, tax, total}) => {
const navigate = useNavigate();

  const {register, handleSubmit, errors} = useFormValidator(validationSchema, async (formData) => {
    //TODO Place for sending data to API
    const res = {}
    if (res.error) {
      console.error(res.error)
    } else {
      navigate('/auth/finish')
    }
  });


  return (
    <Form onSubmit={handleSubmit} formClassName='pay-form'>
      <div>
        <Input name='cardholderName' register={register} label='Cardholder Name'/>
        <Input name='cardNumber' register={register} label='Card Number'/>
        <div className='pay-form__row-input'>
          <Input name='expiration' register={register} label='Expiration'/>
          <Input name='cvv' register={register} label='CVV'/>
        </div>
        <ul className='text-r pay-form__count'>
          <li><span className='text-secondary'>Subtotal:</span><span>${subtotal}</span></li>
          <li><span className='text-secondary'>Discount:</span><span>${discount}</span></li>
          <li><span className='text-secondary'>Tax:</span><span>${tax}</span></li>
        </ul>
      </div>

      <div>
        <PrimaryButton type='submit'><span>Checkout</span><span className='pay-form__total'>${total}</span></PrimaryButton>
        <div className='text-s text-secondary text-center pay-form__note'>
          <p>
            By continuing, you agree to Buzzmi’s <Link to='/terms-of-service' className='text-alert'>Terms of Service</Link> and confirm that you have read Buzzmi’s <Link to='/pilicy' className='text-alert'>Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </Form>
  );
};

export default PayForm;