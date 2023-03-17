import React from 'react';

const Tooltip = ({
                   children,
                   tooltipText="Tooltip Text",
                   position="right",
}) => {
  return (
    <div className={`tooltip-wrapper tooltip-wrapper_${position}`}>
      <div className={`tooltip-trigger tooltip-trigger-${position}`}>
        {children}
        <div className={`tooltip tooltip-${position}`}>
          {tooltipText}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;