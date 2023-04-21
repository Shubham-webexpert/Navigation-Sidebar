import React from "react";
import { ItemData } from "../../../data";

const Apple = () => {
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
      <img src={ItemData[0][1].image} width="500px" height="500px" alt={ItemData[0][1].title} />
    </div>
  );
};

export default Apple;
