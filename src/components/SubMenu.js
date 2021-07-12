import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarLink, SidebarLabel, DropdownLink } from './SidebarStyle';

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  return (
    <div>
      <NavLink exact to={item.path} style={{textDecoration: 'none'}}>
        <SidebarLink onClick={item.subNav && showSubnav}>
        <div className="button">
          <div className="icon">{item.icon}</div>
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div className="buttons">
          {(item.subNav && subnav) ? (item.iconOpened) : (item.subNav) ? (item.iconClosed) : null}
        </div>
        </SidebarLink>
      </NavLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink key={index}>
              <NavLink className="button" exact to={item.path} style={{textDecoration: 'none',}}>
                <div className="icon">{item.icon}</div>
                <SidebarLabel>
                  {item.title}
                </SidebarLabel>
              </NavLink>
            </DropdownLink>
          );
        })}
    </div>
  );
};

export default SubMenu;
