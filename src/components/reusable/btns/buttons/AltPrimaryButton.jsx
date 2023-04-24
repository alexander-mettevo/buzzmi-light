import React from 'react';
import Button from "./Button.jsx";

const AltPrimaryButton = ({className, children, ...props}) => {
  return (
    <Button className={'_fw button_alt-primary  text-r ' + className} {...props}>
      {children}
    </Button>
  );
};

export default AltPrimaryButton;