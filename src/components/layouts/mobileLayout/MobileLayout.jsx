import React from 'react';

const MobileLayout = ({children, classNameWrapper}) => {
  return (
    <div className={`mobile-layout  ${classNameWrapper}`}>
      {children}
    </div>
  );
};

export default MobileLayout;