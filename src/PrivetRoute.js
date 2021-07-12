import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from "./contexts/AuthContext"

function PrivetRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth();

    return (
        <Route {...rest}
            render={(props) => {
                return currentUser ? <Component {...props} /> : <Redirect to="/auth" />
            }}>
        </Route>
    )
}

export default PrivetRoute
