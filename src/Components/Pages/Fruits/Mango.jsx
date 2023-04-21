import React from "react";
import { ItemData } from "../../../data";
import Navbar from "../../Header/Navbar";
import Sidebar from "../../Sidebar/Sidebar";

const Mango = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          position:"absolute",
          top:"10rem",
          right:"2rem",
          width: "80%",
          height: "50%",
        }}
        id="mango"
      >
        <img
          src={ItemData[0][0].image}
          width="500px"
          alt={ItemData[0][0].title}
        />
      </div>
    </div>
  );
};

export default Mango;
