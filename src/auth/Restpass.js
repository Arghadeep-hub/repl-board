import React, { useRef, useState } from 'react';
import * as FiIcon from 'react-icons/fi';
import { useAuth } from '../contexts/AuthContext';
import { Alert, AlertTitle } from '@material-ui/lab';

function Restpass({ IconButton, ResBtn }) {
    const emailRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const { resetPassword } = useAuth()

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setMessage('')
            setError("")
            setLoading(true)

            await resetPassword(emailRef.current.value);
            setMessage("Check Your mail for complite this processes.")

        } catch {
            setError("Failed to reset passowrd.");
        }
        setLoading(false)
    }

    return (
        <form onSubmit={handleSubmit} className="sign-in-form">
            <h2 className="title">Find Your account</h2>
            
            {error && (<Alert severity="error"><AlertTitle>{error}</AlertTitle></Alert>)}
            
            {message && (<Alert severity="success"><AlertTitle>{message}</AlertTitle></Alert>)}

            {/* Email */}
            <div className="input-field">
                <IconButton color="primary"><FiIcon.FiKey /></IconButton>
                <input type="email" ref={emailRef} placeholder="Enter your e-mail" required />
            </div>
            {/* Reset */}
            <input disabled={loading} type="submit" value="Reset" className="bttn" />
            <IconButton color="default" size="small" onClick={() => ResBtn()}>Remember Password?</IconButton>
        </form>
    )
}

export default Restpass
