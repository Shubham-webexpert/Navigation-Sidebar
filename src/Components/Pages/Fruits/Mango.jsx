import React from "react";
import { ItemData } from "../../../data";

const Mango = () => {
  return (
    <div style={{textAlign:"center"}}>
      <img src={ItemData[0][0].image} alt={ItemData[0][0].title} />
    </div>
  );
};

export default Mango;
