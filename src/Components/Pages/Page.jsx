import React, { useState } from "react";
import "./pages.css";
import Navbar from "../Header/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import Ratings from "../Ratings/Ratings";
import Fruits from "./Fruits/Fruits";
import Mango from "./Fruits/Mango";
import Apple from "./Fruits/Apple";
import { LaptopMac } from "@mui/icons-material";
import Lamborgini from "./Cars/Lamborgini";
import Orange from "./Fruits/Orange";
import NewPage from "./Places/NewPage";

const Page = () => {
  const Navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div style={{ width: "30%" }}>
          <Sidebar />
        </div>

        <div className="new">
          <NewPage />
        </div>
        <div className="rating">
        
        </div>
      </div>
    </div>
  );
};

export default Page;
