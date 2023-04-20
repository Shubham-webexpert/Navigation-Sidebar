import React from "react";
import { ItemData } from "../../../data";

const Pune = () => {
  return (
    <div style={{textAlign:"center"}}>
      <img src={ItemData[2][1].image} alt={ItemData[2][1].title} />
    </div>
  );
};

export default Pune;
