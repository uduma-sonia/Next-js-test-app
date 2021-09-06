import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Animation = () => {
  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360" });
  });

  return (
    <div className="app">
      <div className="box" ref={boxRef}>
        Hello
      </div>
    </div>
  );
};

export default Animation;
