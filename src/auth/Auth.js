import React, { useState } from 'react'
import './Auth.css'
import { IconButton } from '@material-ui/core';
import SignIn from './SignIn';
import SignUp from './SignUp'
import UpBtn from './UpBtn';
import InBtn from './InBtn';
import Restpass from './Restpass';

const Auth = () => {
    const [clicked, setClicked] = useState(false);
    const handelClick = () => {
        setClicked(!clicked);
    }
    const [reset, setReset] = useState(false);
    const handleReset = () => {
        setReset(!reset);
    }
    return (
        <div>
            <div className={clicked ? " sign-up-mode main-container" : "sign-in-mode main-container"}>
                <div className="forms-container">
                    <div className="signin-signup">
                        {
                            reset ? <Restpass ResBtn={handleReset} IconButton={IconButton} /> : <SignIn ResBtn={handleReset} IconButton={IconButton} />
                        }
                        <SignUp IconButton={IconButton} />
                    </div>
                </div>

                <div className="panels-container">
                    <UpBtn  handelClick={handelClick} />
                    <InBtn handelClick={handelClick} />
                </div>
            </div>
        </div>
    )
}

export default Auth;
