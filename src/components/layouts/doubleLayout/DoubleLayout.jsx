import React from 'react';
import DoubleLayoutImage from "./items/DoubleLayoutImage.jsx";

const DoubleLayout = ({children, reverse, hideSupportBtn}) => {
  return (
    <div className='mono-block'>
      <div className={`double-layout __container  ${!!reverse ? 'double-layout__reverse' : ''}`}>
        <DoubleLayoutImage hideSupportBtn={hideSupportBtn}/>
        <div className='double-layout__content'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DoubleLayout;