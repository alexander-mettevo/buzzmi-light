import React from 'react';
import Button from "./Button.jsx";

const RegularButton = ({children, className, icon, ...props}) => {
  return (
    <Button className={'button_regular ' + className} {...props}>
      {!!icon && icon}
      <span className={'text-r'}>
        {children}
      </span>
    </Button>
  );
};

export default RegularButton;