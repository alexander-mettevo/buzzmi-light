import React from 'react';
import Input from "../../../../reusable/form/items/inputs/Input.jsx";
import Form from "../../../../reusable/form/Form.jsx";
import PrimaryButton from "../../../../reusable/form/items/buttons/PrimaryButton.jsx";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

const PayForm = ({subtotal, discount, tax, total}) => {
  const {register, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {
      cardholderName: '',
      cardNumber: '',
      expiration: '',
      cvv: ''
    }
  });

  const onSubmit = data => console.log(data)

  return (
    <Form onSubmit={handleSubmit(onSubmit)} formClassName='pay-form'>
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