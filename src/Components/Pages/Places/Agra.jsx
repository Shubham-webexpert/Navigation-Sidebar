import React from "react";
import { ItemData } from "../../../data";

const Agra = () => {
  return (
    <div style={{textAlign:"center"}}>
      <img src={ItemData[2][2].image} alt={ItemData[2][2].title} />
    </div>
  );
};

export default Agra;
