import React from "react";
import "./style.css";

const HorizontalScroll = () => {
  return (
    <div className="container vertical-scrollable">
      <div className="row text-center">
        <div className="col-sm-8">Hello World 1</div>
        <div className="col-sm-8">Hello World 2</div>
        <div className="col-sm-8">Hello World 3</div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
