import React from "react";
import Toolbar from "@mui/material/Toolbar";
import "./navbar.css";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const NavLogo = styled(Link)`
  text-decoration: none;
  color: #ff1493;
  &&:hover,
  &&:active {
    text-decoration: none;
    color: #ff1493;
  }
`;

const LinkTab=styled(Link)`
  text-decoration:none;
  font-weight:bold;
  color:#fff;

  &&:hover{
    text-decoration:none;
    color:#ff7f50;
  }
`;
const Navbar = () => {
  return (
    <>
      <Toolbar className="toolbar">
        <span>
          <NavLogo to="/">
            <img src="/mylogo.png" width="80px" alt="myogo" />
            WebExperts
          </NavLogo>
        </span>
        <nav>
          <ul>
            <LinkTab to="/">
              <li>Home</li>
            </LinkTab>
            <LinkTab to="/aboutus">
              <li>About Us</li>
            </LinkTab>
            <LinkTab to="/contactus">
              <li> Contact Us</li>
            </LinkTab>
          </ul>
        </nav>
      </Toolbar>
    </>
  );
};

export default Navbar;
