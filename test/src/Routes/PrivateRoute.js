import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import isLogin from "../utils/isLogin"

const PrivateRoute = ({ component: Component }) => {
    return (
        <Route render={props => (
            isLogin() ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    )
}

export default PrivateRoute