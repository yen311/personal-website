import { useState, useEffect } from "react";
import { InView } from "react-intersection-observer";

function Skills({ done, children, inView, type }) {
  const [style, setStyle] = useState({});
  let backgroundColor = "darkolivegreen";
  switch (type) {
    case "Software":
      break;
    case "Data":
      // code block
      backgroundColor = "steelblue";
      break;
    case "Tool":
      backgroundColor = "darkkhaki";
      break;
    case "SoftSkill":
      backgroundColor = "indianred";
      break;
    default:
    // code block
  }
  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        const newStyle = {
          backgroundColor: backgroundColor,
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
  }, [inView, done, backgroundColor]);

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
