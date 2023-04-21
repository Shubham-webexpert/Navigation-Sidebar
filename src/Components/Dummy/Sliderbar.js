import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { SlidebarData } from "./SlidebarData";
import SubMenu from "./SubMenu";

const Nav = styled.div`
  background-color: black;
  height: 80px;
  color: #fff;
  padding: 5px;
  font-size: 20px;
  align-items: center;
  display: flex;
  justify-content: flex-start;
`;

const SlidebarNav = styled.nav`
  background: #fb8500;
  color: black;
  width: 20%;
  height:120vh;
  font-size: 17px;
  padding: 5px;
`;

const NavIcon = styled(Link)`
  text-decoration: none;
  color: #fff;
  align-items: center;
`;

const SlidebarNavWrapper = styled.div`
  // background:#ffb703;
  width: 100%;
`;

const Sliderbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <Nav>
        <NavIcon to="#">
          <MenuIcon
            style={{ fontWeight: "bold", fontSize: 25 }}
            onClick={showSidebar}
          />
        </NavIcon>
      </Nav>
      <SlidebarNav>
        <SlidebarNavWrapper>
        {
          SlidebarData.map((item,index)=>{
            return<SubMenu item={item} key={index}/>
          })
        }
        </SlidebarNavWrapper>
      </SlidebarNav>
    </>
  );
};

export default Sliderbar;
