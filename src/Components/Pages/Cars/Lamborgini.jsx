import React from "react";
import { ItemData } from "../../../data";

const Lamborgini = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={ItemData[1][0].image} alt={ItemData[1][0].title} />
    </div>
  );
};

export default Lamborgini;
