import React, { useState } from 'react';
import logo from '../../../src/Assets/img/logo.png';

function Login() {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <>
            <div className='login-wrapper'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-5'>
                            <div className='loginform'>
                                <img src={logo} className='brand-logo' />
                                <form className='row form-group'>
                                    <div className='col-md-12'>
                                        <label for="title">Username</label>
                                        <div class="input-group">
                                        <input type="text" class="form-control" id="title" placeholder="Username" />
                                        <div class="input-group-text"><i class="fas fa-user"></i></div>
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <label for="Password">Password</label>
                                        <div class="input-group">
                                           <input type={passwordVisible ? 'text' : 'password'} onChange={handlePasswordChange} class="form-control" id="Password" placeholder="Password" />
                                           <div class="input-group-text"><i class={passwordVisible ? "fas fa-eye-slash" : "fas fa-eye"} onClick={() => setPasswordVisible(!passwordVisible)}></i></div>
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <div className='d-flex justify-content-between gap-3 mt-2'>
                                            <a href="#">Forgot Password?</a>
                                            <input type="submit" className='btn btn-login' value="Login" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;