import React from "react";
import HorizontalScroll from "./HorizontalScroll/HorizontalScroll";
import Slider from "./Slider/Slider";

const App = () => {
  return (
    <>
      <div>
        <Slider />
      </div>
      <div>
        <HorizontalScroll />
      </div>
    </>
  );
};

export default App;
