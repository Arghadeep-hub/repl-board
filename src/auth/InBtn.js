import React from 'react';
import Lottie from 'react-lottie';
import * as registerImg from '../images/laptop.json';

const register = {
    loop: true,
    autoplay: true,
    animationData: registerImg.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

function InBtn({ handelClick }) {
    return (
        <div className="panel right-panel">
            <div className="content">
                <h3>One of us? </h3>
                <p>
                    Are you our REPLY members and have already an account? Click the button below to enjoy us.
                </p>
                <button className="bttn transparent" id="sign-in-btn" onClick={() => handelClick()}>Log in</button>
            </div>
            <div className="image">
            <Lottie options={register} />
            </div>
        </div>
    )
}

export default InBtn
