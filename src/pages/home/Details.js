import React from 'react'
import { IconButton, Typography } from '@material-ui/core';
import * as FiIcon from 'react-icons/fi'

function Details({ currentUser }) {
    const photo = currentUser.photoURL;
    const userName = currentUser.displayName;
    const userEmail = (currentUser.email);
    const defPhoto = `https://avatars.dicebear.com/api/avataaars/&{currentUser.uid}.svg`
    const createdOn = new Date(currentUser.metadata.creationTime).toLocaleString('en-GB');
    const LastSeen = new Date(currentUser.metadata.lastSignInTime).toLocaleString('en-GB');

    return (
        <div className="modal">
            <div className="modal-header">
                <IconButton color="primary" variant="contained" className="avatar">
                    <img src={photo == null ? defPhoto : photo} alt="Hero" className="avatar-initials" />
                </IconButton>
            </div>
            <div className="modal-body">
                <h4 className="modal-title">
                    <FiIcon.FiUserCheck color="#00D100" /> &nbsp;
                    {userName}
                </h4>
                <h5 className="modal-title">
                    {userEmail}
                </h5>
            </div>
            <div className="modal-body">
                <Typography color="primary" variant="h6" className="modal-title">
                    Created on: {createdOn}
                </Typography>
                <Typography color="primary" variant="h6" className="modal-title">
                    Last SignIn: {LastSeen}
                </Typography>
            </div>
        </div>
    )
}

export default Details
