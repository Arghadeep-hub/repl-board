import React, { useRef, useState } from 'react';
import * as FiIcon from 'react-icons/fi';
import * as RiIcon from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Alert, AlertTitle } from '@material-ui/lab';
import { googleProvider, githubProvider, facebookProvider } from '../firebase';

function SignUp({ IconButton }) {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmRef = useRef()
    const { signup, socialMedia } = useAuth()
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== confirmRef.current.value) {
            return setError("Check again why the password did not match")
        }
        try {
            setError('')
            setLoading(true)

            await signup(emailRef.current.value, passwordRef.current.value);

            history.push("/")
        } catch {
            setError("Failed to create an account.")
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
        <form onSubmit={handleSubmit} className="sign-up-form">
            <h2 className="title">Sign up</h2>
            {error && (<Alert severity="error"><AlertTitle>{error}</AlertTitle></Alert>)}

            {/* Email */}
            <div className="input-field">
                <IconButton className="startIcon"><FiIcon.FiAtSign /></IconButton>
                <input type="email" placeholder="Email" ref={emailRef} required />
            </div>

            {/* Password */}
            <div className="input-field">
                <IconButton className="startIcon"><FiIcon.FiUnlock /></IconButton>
                <input type="password" placeholder="Password" ref={passwordRef} required />
            </div>
            {/* Confirm Password */}
            <div className="input-field">
                <IconButton className="startIcon"><FiIcon.FiLock /></IconButton>
                <input type="password" placeholder="Confirm password" ref={confirmRef} required />
            </div>
            {/* Submit Button */}
            <input disabled={loading} type="submit" className="bttn" value="Sign up" />

            {/* Auto Auth */}
            <p className="social-text">Sign up with other platforms</p>
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

export default SignUp
