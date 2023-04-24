import React from 'react';
import Button from "./Button.jsx";

const PrimaryButton = ({children, className, ...props}) => {

  return (
    <Button className={'_fw button_primary btn-text ' + className} {...props}>
      {children}
    </Button>
  );
};

export default PrimaryButton;