import React, { useRef, useState } from 'react'
import * as FiIcon from 'react-icons/fi'
import * as RiIcon from 'react-icons/ri'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Alert, AlertTitle } from '@material-ui/lab';
import { googleProvider, githubProvider, facebookProvider } from '../firebase';

function SignIn({ IconButton, ResBtn }) {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, socialMedia } = useAuth()
    const history = useHistory();


    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/")

        } catch {
            setError("Submit the correct E-mail and Password.");
        }
        setLoading(false)
    }

    async function handleAuthClick(provider) {
        try {
            setError("")
            setLoading(true)

            await socialMedia(provider);
            history.push("/")
        } catch {
            setError("User credential is not permitted by authority.");
        }

    }

    return (
        <form onSubmit={handleSubmit} className="sign-in-form">
            <h2 className="title">Log in</h2>
            {error && (<Alert severity="error"><AlertTitle>{error}</AlertTitle></Alert>)}
            {/* Email */}
            <div className="input-field">
                <IconButton className="startIcon">
                    <FiIcon.FiAtSign />
                </IconButton>
                <input type="email" placeholder="Email" ref={emailRef} required />
            </div>
            {/* Password */}
            <div className="input-field">
                <IconButton className="startIcon">
                    <FiIcon.FiLock />
                </IconButton>
                <input type="password" placeholder="Password" ref={passwordRef} required />
            </div>
            {/* Log in Button */}
            <input disabled={loading} type="submit" value="Login" className="bttn" />

            <IconButton color="default" size="small" onClick={() => ResBtn()}>Forgot Password?</IconButton>
            {/* Auto Auth */}
            <p className="social-text">Log in with other platforms</p>
            <div className="social-media">
                <IconButton onClick={() => handleAuthClick(googleProvider)} className="social-icon" disabled={loading}>
                    <RiIcon.RiGoogleFill />
                </IconButton>

                <IconButton onClick={() => handleAuthClick(githubProvider)} className="social-icon" disabled={loading}>
                    <FiIcon.FiGithub />
                </IconButton>

                <IconButton onClick={() => handleAuthClick(facebookProvider)} className="social-icon" disabled={loading}>
                    <FiIcon.FiFacebook />
                </IconButton>
            </div>
        </form>
    )
}

export default SignIn;
