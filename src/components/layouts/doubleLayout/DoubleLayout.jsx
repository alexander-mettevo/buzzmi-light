import React from 'react';
import DoubleLayoutImage from "./items/DoubleLayoutImage.jsx";
import Tooltip from "../../reusable/assets/tooltip/Tooltip.jsx";
import SupportBtn from "../../reusable/btns/supportBtn/SupportBtn.jsx";

const DoubleLayout = ({children, reverse, imageUrl}) => {
  return (
    <div className='mono-block'>
      <div className={`double-layout __container  ${!!reverse ? 'double-layout__reverse' : ''}`}>
        <DoubleLayoutImage imageUrl={imageUrl}  reverse={reverse}/>
        <div className='double-layout__content'>
          <div className='double-layout__mobile-support'>
            <Tooltip position={'left'} tooltipText={'Any problems? Report Please  '}>
              <SupportBtn/>
            </Tooltip>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DoubleLayout;