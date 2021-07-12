import React, { useRef, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import 'neomorphism/dist/neomorphism.min.css';
import 'neomorphism/dist/neomorphism.css';
import './Update.css';
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom';
import * as FiIcon from "react-icons/fi"
import { Button, Typography } from '@material-ui/core';;

function Profile() {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { currentUser, updateEmail, updatePassword, token, provider } = useAuth()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmRef = useRef()
    const tokenRef = useRef();
    const history = useHistory()

    function tokenGen() {
        const tokenVal = tokenRef.current.value;
        const provider = "github.com"

        if (provider !== null && token !== null) {
            localStorage.removeItem('provider')
            localStorage.removeItem('token')

        }

        localStorage.setItem('token', tokenVal)
        localStorage.setItem('provider', provider)

        history.go(0)
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== confirmRef.current.value) {
            return setError("Check again why the password did not match")
        }

        const promises = []
        setLoading(true)
        setError("")

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }

        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push("/")
        }).catch(() => {
            setError("Failed to Update account")
        }).finally(() => {
            setLoading(false)
        })

    }

    return (
        <div className="profile_body">
            <Sidebar className="bar" />
            <div className="card_profile">
                <div className="profile_form">
                    <form onSubmit={handleSubmit} className="form" autoComplete="off">
                        <h2>Password Update</h2>

                        {error && (<div className="alert">
                            <div className="icon">
                                <FiIcon.FiShieldOff color="#ffc107" />
                            </div>
                            <div className="alert-content">
                                <span>{error}</span>
                            </div>
                        </div>)}

                        <div className="field">
                            <input required ref={emailRef} type="email" defaultValue={currentUser.email} className="input" />

                            <input required ref={passwordRef} type="password" placeholder="Leave blank to keep the same" className="input" />

                            <input required ref={confirmRef} type="password" placeholder="Leave blank to keep the same" className="input" />

                            <label className="checkbox">
                                <input required type="checkbox" className="checkbox-input" />
                                <span className="checkbox-label">I agree to the Terms and Conditions</span>
                            </label>
                        </div>
                        <div className="buttons is-md">
                            <button disabled={loading} className="button">Submit</button>

                            <Link to="/" className="button">Cancel</Link>
                        </div>
                    </form>
                </div>
                {/* Git hub token generator */}
                <div className="profile_form">
                    {provider !== 'github.com' ?
                        (<form onSubmit={tokenGen} className="modal" autoComplete="off">
                            <Typography color="primary" variant="h4" align="center">
                                Give us token 
                            </Typography>

                            <div className="field">
                                <Typography color="error" variant="h6" className="modal-header">
                                    Hello user, We find that this account is not connected with Github!!! So, you can't able to access the actual graph. To  use all features fill the form below.
                                </Typography>

                                <input required ref={tokenRef} type="text" placeholder="Personal access token" className="input" />

                                <label className="checkbox">
                                    <input required type="checkbox" className="checkbox-input" />
                                    <span className="checkbox-label">I agree to generate a GitHub token and give all permission to make graphs.</span>
                                </label>
                            </div>
                            <div className="is-md" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1rem'}}>
                                <Button color="primary" variant="outlined" type="submit" disabled={loading} className="button" startIcon={<FiIcon.FiGithub />}>proceed</Button>
                            </div>
                        </form>)
                        : (<div className="modal">
                            <Typography color="primary" variant="h4" align="center">
                            Notification
                            </Typography>
                            <Typography variant="h6" color="inherit"  className="modal-header"
                            >You have a Github Creadential. Now you are able to use the graph of your commits on Github until or unless log out from our website.</Typography>
                            <Typography variant="h6" color="inherit" className="modal-header" >
                                Because we don't save tokens for the user's privacy. Still, you facing any problem generating graphs tokens let us know immediately.
                            </Typography>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile
