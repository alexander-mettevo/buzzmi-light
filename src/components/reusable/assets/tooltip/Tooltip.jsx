import React from 'react';

const Tooltip = ({
                   children,
                   tooltipText="Tooltip Text",
                   position="right",
}) => {
  return (
    <div className='tooltip-trigger'>
      {children}
      <div className={`tooltip tooltip-${position}`}>
        {tooltipText}
      </div>
    </div>
  );
};

export default Tooltip;