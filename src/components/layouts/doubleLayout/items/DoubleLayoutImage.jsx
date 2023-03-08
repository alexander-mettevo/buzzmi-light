import React from 'react';
import SupportBtn from "../../../reusable/btns/supportBtn/SupportBtn.jsx";
import Tooltip from "../../../reusable/assets/tooltip/Tooltip.jsx";

const DoubleLayoutImage = ({reverse, imageUrl}) => {
  return (
    <div className='double-layout__image '>
        <Tooltip position={!!reverse ? 'left' : 'right'} tooltipText={'Any problems? Report Please  '}>
          <SupportBtn/>
        </Tooltip>
      <img src={imageUrl} alt="intro"/>
    </div>
  );
};

export default DoubleLayoutImage;