import React from 'react';
import DoubleLayoutImage from "./items/DoubleLayoutImage.jsx";

const DoubleLayout = ({children, reverse}) => {
  return (
    <div className='mono-block'>
      <div className={`double-layout __container  ${!!reverse ? 'double-layout__reverse' : ''}`}>
        <DoubleLayoutImage/>
        <div className='double-layout__content'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DoubleLayout;