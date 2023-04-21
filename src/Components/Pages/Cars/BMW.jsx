import React from "react";
import { ItemData } from "../../../data";

const BMW = () => {
  return (
    <div style={{ textAlign: "center",position: "absolute",
    top: "10rem",
    right: "5rem",
    left:"25rem", }}>
      <img src={ItemData[1][1].image} width="500px" height="500px" alt="demo" />
    </div>
  );
};

export default BMW;
