import { Toolbar } from "@mui/material";
import React from "react";
import "./footer.css";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { YouTube } from "@mui/icons-material";
import { FaReact, FaAngular, FaBootstrap } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { DiNodejs } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const IconLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &&:hover {
    text-decoration: none;
    color: #fff;
  }
`;

const Footer = () => {
  return (
    <div>
      <div className="footertoolbar">
        <div>
          <h3>Our Technologies:</h3>
          <div className="technology">
            <IconLink to="https://html.com/">
              <AiFillHtml5 className="htmlogo" />
            </IconLink>
            <IconLink to="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <IoLogoCss3 className="csslogo" />
            </IconLink>

            <IconLink to="https://javascript.info/">
              <TbBrandJavascript className="javascriptlogo" />
            </IconLink>

            <IconLink to="https://getbootstrap.com/">
              <FaBootstrap className="bootstrapicon" />
            </IconLink>

            <IconLink to="https://angular.io/">
              <FaAngular className="angularicon" />
            </IconLink>

            <IconLink to="https://legacy.reactjs.org/">
              <FaReact className="reactlogo" />
            </IconLink>
          </div>
        </div>
        <div>
          <h3>Connect With US :</h3>
          <div className="social">
            <IconLink to="https://www.google.com/account">
              <GoogleIcon />
            </IconLink>
            <IconLink to="https://www.facebook.com/">
              <FacebookIcon className="facebookicon" />
            </IconLink>
            <IconLink to="https://www.instagram.com/accounts/login/">
              <InstagramIcon className="instagramicon" />
            </IconLink>
            <IconLink to="https://twitter.com/i/flow/login">
              <TwitterIcon className="twittericon" />
            </IconLink>
            <IconLink to="https://www.youtube.com/">
              <YouTube className="youtubeicon" />
            </IconLink>
          </div>
        </div>
        <div className="address">
          <h3>Address:</h3>
          <span>
            13 th Flr Commissriat Bldg D N Road Fort, Mumbai,Pune,400001,India
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
