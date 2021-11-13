import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function Login() {
    const history = useHistory()
    console.log(history, "history")
    const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const [formdata, setFormdata] = useState({
        username: "",
        password: "",
        message: null,
        submitted: null,
    })
    const handleEmailChange = (e) => {
        {
            setFormdata({
                ...formdata
                , username: e.target.value
            })
        }
    }
    const handlePwdChange = (e) => {
        {
            setFormdata({
                ...formdata
                , password: e.target.value
            })
        }
    }
    const validate = (formdata) => {
        if (formdata.username == "foo" && formdata.password == "bar") {
            return false
        }
        else return true
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = validate(formdata)
        if (!errors) {
            setFormdata({ ...formdata, submitted: true })
            window.sessionStorage.setItem("isLogin", "yes")
            history.push({
                pathname: "/home"
            })

        }
        else {
            setFormdata({ ...formdata, message: "User Name or Password is incorrect " })
        }
    }

    return (
        <>
            <h1 className="text-center">Login Form</h1>
            <form >
                {formdata.submitted && (
                    <div class="alert alert-success" role="alert">
                        <h4 class="alert-heading">Form has been submitted!</h4>
                        <p>
                            You have successfully submitted the form. You will be redirected
                            shortly.
                        </p>
                        <hr />
                        <p class="mb-0">
                            You will be loggedin as *username* and other users will see this
                            name.
                        </p>
                    </div>
                )}
                <div className="form-group">
                    <label htmlFor="usename">User Name</label>
                    <input
                        onChange={(e) => (handleEmailChange(e))}
                        value={formdata.username}
                        type="usename "
                        className="form-control"
                        id="usename"
                        nam="username"
                    />

                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={(e) => (handlePwdChange(e))}
                        value={formdata.password}
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                    />
                </div>
                {formdata.message !== null ? (
                    <div className="alert alert-danger" role="alert">
                        {formdata.message}
                    </div>
                ) : null}
                <button className="btn btn-primary" onClick={(e) => { handleSubmit(e) }}>
                    Login
                </button>
            </form>
        </>
    )
}

export default Login
