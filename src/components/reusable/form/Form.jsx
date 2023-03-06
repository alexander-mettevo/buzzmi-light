import React from 'react';

const Form = ({error, children, className, ...props}) => {
  return (
    <form {...props}>
      {error && <div className={'text-error form__error ' + className}>{error?.message || 'Sorry, there was an error, try again or contact the administration.'}</div>}

      {children}
    </form>
  );
};

export default Form;