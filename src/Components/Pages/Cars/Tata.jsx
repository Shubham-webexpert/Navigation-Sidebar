import React from "react";
import { ItemData } from "../../../data";

const Tata = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={ItemData[1][2].image} alt={ItemData[1][2].title} />
    </div>
  );
};

export default Tata;
