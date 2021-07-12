import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  samll: {
    width: theme.spacing(5),
    height: theme.spacing(5),

  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  gridRoot: {
    flexGrow: 1,
  },
}));


export const AppBar = styled.div`
margin: 0 0.5rem;
color: #283046;
background-color: #e0eaf9;
/*box-shadow: 4px 4px 8px rgb(56 53 85 / 30%), -4px -4px 8px hsl(0deg 0% 100% / 50%), inset 1px 1px 1px rgb(224 234 249 / 50%);*/
border-radius: 1rem;
`;
export const Toolbar = styled.div`
display: flex;
align-items: center;
margin: 0.5rem 0.5rem;
padding: 0 0.5rem;
`;
export const SidebarNav = styled.nav`
  background: #c2d3e1;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  overflow-y: scroll;
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;

export const SidebarLink = styled.li`
  display: flex;
  color: #283046;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  transition: all 0.2s ease 0.2s;

  &:hover {
    cursor: pointer;
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 2px;
  color: #283046;
  font-family: 'Aldrich', sans-serif;
`;

export const DropdownLink = styled.li`
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #283046;
  font-size: 18px;

  &:hover {
    cursor: pointer;
  }
`;
export const SideUl = styled.ul`
padding: 1rem 0;
list-style: none;
display: flex;
align-items: center;
color: #283046;
`;
export const SideLi = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`;
export const SideIcon = styled.div`
.MuiIconButton-root {
    color: #283046;
}
`;
export const SideHeading = styled.div`
font-family: 'Aladin', cursive;
letter-spacing: 5px;
font-size: 2.2rem;
color: #c1c2c3;
filter: drop-shadow(0.1rem 0.1rem 0rem #7367f0);
`;
export const SideTitle = styled.div`
font-size: 1.4rem; 
font-family: 'Actor', sans-serif;
`;
export const Cross = styled.div`
position: absolute;
right: 0;
`;