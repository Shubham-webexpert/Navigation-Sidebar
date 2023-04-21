import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const SlidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-styled: none;
  height: 60px;
  text-dexoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
    color: #ffff;
  }
`;

const SlidebarLabel = styled.span`
  color: #ffff;
  margin-left: 20px;
  margin-top:15px;
  text-decoration:none;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-item: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  return (
    <>
      <SlidebarLink onClick={item.subNav && showSubnav}>
        <div>
          <SlidebarLabel>
            <span style={{marginRight:15}}> {item.icon}</span>
            {item.title}
          </SlidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpen
            : item.subNav
            ? item.iconClose
            : null}
        </div>
      </SlidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              <SlidebarLabel>
                <span style={{ marginRight: 15 }}> {item.icon}</span>
                {item.title}
              </SlidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
