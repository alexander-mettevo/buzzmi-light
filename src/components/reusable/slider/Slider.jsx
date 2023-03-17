import React, {useState, useEffect} from "react";
import DoubleLayoutItem from "../../layouts/doubleLayout/items/DoubleLayoutItem.jsx";

const Slider = ({components, interval}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timeout = setInterval(() => {
      setCurrent((current + 1) % components.length);
    }, interval);

    return () => clearInterval(timeout);
  }, [current, components, interval]);

  return (
    <div className="slider">
      {components.map((item, index) =>
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
        >
          <DoubleLayoutItem key={index + 'intro'} title={item?.title} description={item?.description}
                            image={item?.image}/>
        </div>
      )}
    </div>
  );
};

export default Slider;
