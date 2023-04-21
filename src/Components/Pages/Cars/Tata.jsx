import React from "react";
import { ItemData } from "../../../data";

const Tata = () => {
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
      <img src={ItemData[1][2].image} height="500px" width="500px" alt={ItemData[1][2].title} />
    </div>
  );
};

export default Tata;
