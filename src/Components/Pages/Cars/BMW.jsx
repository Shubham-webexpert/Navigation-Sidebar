import React from "react";
import { ItemData } from "../../../data";

const BMW = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={ItemData[1][1].image} alt="demo" />
    </div>
  );
};

export default BMW;
