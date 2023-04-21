import React from "react";
import { ItemData } from "../../../data";

const Lamborgini = () => {
  return (
    <div style={{ textAlign: "center",position: "absolute",
    top: "10rem",
    right: "5rem",
    left:"25rem", }}>
      <img src={ItemData[1][0].image} width="500px" height="500px" alt={ItemData[1][0].title} />
    </div>
  );
};

export default Lamborgini;
