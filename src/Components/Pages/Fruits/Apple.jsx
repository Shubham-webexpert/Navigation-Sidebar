import React from "react";
import { ItemData } from "../../../data";

const Apple = () => {
  return (
    <div style={{textAlign:"center"}}>
      <img src={ItemData[0][1].image} alt={ItemData[0][1].title} />
    </div>
  );
};

export default Apple;
