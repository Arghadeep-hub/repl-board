import React, { useState } from 'react';
import * as FiIcon from 'react-icons/fi'
import IconButton from '@material-ui/core/IconButton';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { SidebarNav, SidebarWrap, SideUl, SideLi, SideHeading, SideIcon, SideTitle, Cross, SidebarLink, SidebarLabel } from './SidebarStyle';
import Navbar from './Navbar';
import * as FiIcons from "react-icons/fi";
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [error, setError] = useState("")
  const [theme, setTheme] = useState(false)
  const showSidebar = () => setSidebar(!sidebar);
  const timeNow = (new Date()).getHours();
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError('')
    setSidebar()

    try {
      await logout();
      localStorage.removeItem('token');
      localStorage.removeItem('provider');
      history.push("/auth");
    } catch {
      setError("Failed to Log out.")
    }
  }
 
  return (
    <div>
      <IconContext.Provider value={{ color: '#d0d2d6' }}>
        <Navbar showSidebar={showSidebar} theme={theme} setTheme={setTheme} />

        <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
        <SideUl>
          <SideLi style={{ justifyContent: "center" }}>
            <SideHeading className="navbar-item">REPL</SideHeading>
            <SideTitle>{timeNow > 12 ? "Good Morning" : "Good Night"}</SideTitle>
          </SideLi>
          <Cross className="navbar-item">
            <SideIcon>
              <IconButton className="buttons" onClick={() => showSidebar()}>
                <FiIcon.FiChevronLeft color="#283046" />
              </IconButton>
            </SideIcon>
          </Cross>
        </SideUl>


            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
            {/* Log out */}
            <SidebarLink onClick={handleLogout}>
              <div className="button">
                <div className="icon"><FiIcons.FiPower color="#283046" /></div>
                <SidebarLabel>
                  Log out  {error && console.log({ error })}
                </SidebarLabel>
              </div>
            </SidebarLink>
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </div>
  );
};

export default Sidebar;
