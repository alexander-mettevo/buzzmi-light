import React from 'react';

const Form = ({error, children, className, formClassName, ...props}) => {
  return (
    <form className={formClassName} {...props}>
      {error && <div className={`text-error form__error ${!!className ? className : ''}`}>{error?.message || 'Sorry, there was an error, try again or contact the administration.'}</div>}

      {children}
    </form>
  );
};

export default Form;