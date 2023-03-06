import React from 'react';
import Button from "./Button.jsx";

const SecondaryButton = ({children, className, ...props}) => {
  return (
      <Button className={'button_secondary _fw btn-text ' + className} {...props}>
      <span>
        {children}
      </span>
      </Button>

  );
};

export default SecondaryButton;