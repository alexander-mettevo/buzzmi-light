import React from 'react';
import Button from "./Button.jsx";

const RegularButton = ({children, className, icon, ...props}) => {
  return (
    <Button className={'button_regular ' + className} {...props}>
      <div className={'d-flex align-items-center'}>
        {!!icon && icon}
        <span className={'text-r'}>
        {children}
      </span>
      </div>
    </Button>
  );
};

export default RegularButton;