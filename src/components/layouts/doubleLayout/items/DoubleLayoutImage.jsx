import React from 'react';
import SupportBtn from "../../../reusable/btns/supportBtn/SupportBtn.jsx";
import Tooltip from "../../../reusable/assets/tooltip/Tooltip.jsx";
import {layoutData} from "./mocData.js";
import Slider from "../../../reusable/slider/Slider.jsx";

const DoubleLayoutImage = ({reverse, imageUrl}) => {
  return (
    <div className={`double-layout__intro ${imageUrl ? 'double-layout__intro_bg' : ''}`}>
      <Tooltip position={!reverse ? 'left' : 'right'} tooltipText={'Any problems? Report Please  '}>
        <SupportBtn/>
      </Tooltip>
      {
        imageUrl ?
          <div className='double-layout__bg-wrapper'>
            <img src={imageUrl} alt="bg"/>
          </div>
          :
          <Slider components={layoutData} interval={10000}/>
      }
    </div>
  );
};

export default DoubleLayoutImage;