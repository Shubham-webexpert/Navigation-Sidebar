import React from "react";
import Navbar from "../Header/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Page from "../Pages/Page";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="navbar">
        <Navbar />  
      </div>
      <div className="pagecontainer">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="pages">
          <Page />
        </div>
      </div>
    </div>
  );
};

export default Home;
