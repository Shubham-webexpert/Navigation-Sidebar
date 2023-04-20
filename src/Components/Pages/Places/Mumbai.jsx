import React from "react";
import { ItemData } from "../../../data";

const Mumbai = () => {
  return (
    <div style={{textAlign:"center"}}>
      <img src={ItemData[2][0].image} alt={ItemData[2][0].title} />
    </div>
  );
};

export default Mumbai;
