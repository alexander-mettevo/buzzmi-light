import React from 'react';
import Button from "./Button.jsx";

const SecondaryButton = ({children, className, ...props}) => {
  return (
      <Button className={'button_secondary  btn-text ' + className} {...props}>
      <span>
        {children}
      </span>
      </Button>

  );
};

export default SecondaryButton;