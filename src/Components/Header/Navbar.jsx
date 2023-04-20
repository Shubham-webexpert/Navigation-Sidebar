import React from "react";
import Toolbar from "@mui/material/Toolbar";
import "./navbar.css";
import { Slider } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <>
        <Toolbar className="toolbar" >
          <span>logo</span>
          <nav>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li> Contact Us</li>
            </ul>
          </nav>
        </Toolbar>
      
    </>
  );
};

export default Navbar;
