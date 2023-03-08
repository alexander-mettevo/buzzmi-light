import React from 'react';
import SupportBtn from "../../../reusable/btns/supportBtn/SupportBtn.jsx";
import Tooltip from "../../../reusable/assets/tooltip/Tooltip.jsx";

const DoubleLayoutImage = ({hideSupportBtn}) => {
  return (
    <div className='double-layout__image text-right'>
      {!hideSupportBtn &&
        <Tooltip position={'left'} tooltipText={'Any problems? Report Please  '}>
          <SupportBtn/>
        </Tooltip>
      }
      <img src="/images/login/intro.png" alt="intro"/>
    </div>
  );
};

export default DoubleLayoutImage;