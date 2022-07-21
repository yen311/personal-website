import "./Skills.css";
import { useState, useEffect } from "react";
import { InView } from "react-intersection-observer";

function Skills({ done, children, inView }) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        const newStyle = {
          "background-color": "olive",
          opacity: 1,
          width: `${done}%`,
        };
        setStyle(newStyle);
      }, 500);
    } else {
      const newStyle = {
        opacity: 0,
        width: `0%`,
      };
      setStyle(newStyle);
    }
  }, [inView, done]);

  return (
    <InView className='my-3'>
      <p className='m-0'>{children}</p>
      <div className='progress w-100'>
        <div className='progress-done  px-2' style={style}>
          {done}%
        </div>
      </div>
    </InView>
  );
}

export default Skills;
