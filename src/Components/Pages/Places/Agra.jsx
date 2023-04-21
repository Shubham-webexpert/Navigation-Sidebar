import React from "react";
import { ItemData } from "../../../data";

const Agra = () => {
  return (
    <div
      style={{
        textAlign: "center",
        position: "absolute",
        top: "10rem",
        right: "5rem",
        left: "25rem",
      }}
    >
      <img src={ItemData[2][2].image} width="500px" height="500px" alt={ItemData[2][2].title} />
    </div>
  );
};

export default Agra;
