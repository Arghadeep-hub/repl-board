import React from 'react';
import { IconButton } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import * as FiIcon from "react-icons/fi"
import Avatar from '@material-ui/core/Avatar'
import { Toolbar, AppBar, useStyles } from './SidebarStyle'
import { useAuth } from '../contexts/AuthContext';


const Navbar = ({ showSidebar, theme, setTheme }) => {
    const classes = useStyles();
    const { currentUser } = useAuth()
    const photo = currentUser.photoURL
    const handleTheme=()=>{
        setTheme(!theme)
        console.log(theme);
    }
    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar className="navBar">
                    <IconButton
                        edge="start"
                        className="buttons"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => showSidebar()}
                    >
                        <FiIcon.FiMenu color="#283046" />
                    </IconButton>

                    <div className={classes.grow} />

                    <div className={classes.sectionDesktop && "navIcon"}>
                        <IconButton className="avatar is-md" onClick={handleTheme}>
                            {theme ? <FiIcon.FiMoon color="#283046" fontSize='3rem' className="avatar-initials" /> : <FiIcon.FiSun color="#283046" fontSize="3rem" className="avatar-initials" />}
                        </IconButton>
                        <IconButton className="avatar is-md">
                            <Badge badgeContent={1} color="primary" className="avatar-initials">
                                <FiIcon.FiMail color="#283046" fontSize='25px' className="avatar-initials" />
                            </Badge>
                        </IconButton>
                        <IconButton edge="end" className="avatar is-lg" >
                            <Avatar src={photo} alt="myPhoto" className="avatar-initials" />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Navbar;