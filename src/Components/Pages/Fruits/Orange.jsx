import React from "react";
import { ItemData } from "../../../data";

const Orange = () => {
  return (
    <div
      style={{
        textAlign: "center",
        position: "absolute",
        top: "10rem",
        right: "5rem",
        left:"25rem",
      }}
    >
      <img src={ItemData[0][2].image} height="500px" width="800px" alt={ItemData[0][2].title} />
    </div>
  );
};

export default Orange;
