import React from 'react';
import Lottie from 'react-lottie';
import * as loginImg from '../images/office.json'

const logIn = {
    loop: true,
    autoplay: true,
    animationData: loginImg.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

function UpBtn({ handelClick }) {
    return (
        <div className="panel left-panel">
            <div className="content">
                <h3>New here ?</h3>
                <p> Are you new to our page and also
                    Don't have an account?
                    Click here to create an account.</p>
                <button className="bttn transparent" id="sign-up-btn" onClick={() => handelClick()}>Sign up</button>
            </div>
            <div className="image">
                <Lottie options={logIn} />
            </div>
        </div>
    )
}

export default UpBtn
