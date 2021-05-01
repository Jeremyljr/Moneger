import React from 'react'
import { Button } from '../../components/Buttons'
import './Register.css';


function Register() {
    return (
        <>
            <div className="registerContainer">
                <form className="form">
                    <h3> Sign Up</h3>
                    <div className="formInputs">
                        <label htmlFor="Email" ClassName="formlabel">Email Address</label>
                        <input type="email" name="email" className="formInput" placeholder="Email"/>
                    </div>
                    <div className="formInputs">
                        <label id='username' htmlFor="username" ClassName="formlabel">Username</label>
                        <input type="text" name="username" className="formInput" placeholder="Username"/>
                    </div>
                    <div className="formInputs">
                        <label htmlFor="password" ClassName="formlabel">Password</label>
                        <input type="password" name="username" className="formInput" placeholder="8 Characters"/>
                    </div>
                    <div className="formInputs">
                        <label htmlFor="password2" ClassName="formlabel">Confirm Password</label>
                        <input type="password2" name="username" className="formInput" placeholder="Re-type password"/>
                    </div>
                    <Button className='btn' buttonStyle='btnPrimary'>
                        Create Account
                    </Button>
                    <span className="formLogin">
                        Already have an account? <a href="/login">Login here</a>
                    </span>
                </form>
            </div>
        </>
    )
}

export default Register
