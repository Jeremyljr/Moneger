import React from 'react'
import { Button } from '../../components/Buttons'
import './Login.css'

function login() {
    return (
        <>
            <div className="registerContainer">
                <form className="formLogins">
                    <h3> Login</h3>
                    <div className="formInputs">
                        <label id='username' htmlFor="username" ClassName="formlabel">Username</label>
                        <input type="text" name="username" className="formInput" placeholder="Username"/>
                    </div>
                    <div className="formInputsPass">
                        <label htmlFor="password" ClassName="formlabel">Password</label>
                        <input type="password" name="username" className="formInput" placeholder="8 Characters"/>
                    </div>
                    <div className="checkers">
                        <input type="checkbox" name="vehicle1"/>
                        <label className="remember" htmlFor="remember"> Remember Me? </label>
                    </div>
                    <Button className='btn' buttonStyle='btnPrimary'>
                        Log In
                    </Button>
                    <span className="formLogin">
                        <a href="/">Forgot Password?</a>
                    </span>
                    <span className="formLogin">
                        Don't have an account? <a href="/signup">Sign Up</a>
                    </span>
                </form>
            </div>
        </>
    )
}

export default login
