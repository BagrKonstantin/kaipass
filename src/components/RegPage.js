import React from 'react';
import {Link, Route, Switch, useHistory} from "react-router-dom";
import '../main_style.css'

import facebook from '../images/svg/facebook.svg';
import google_plus from '../images/svg/google-plus 1.svg';
import right_arrow from '../images/svg/right-arrow.svg';
import svg_wave_pink from '../images/svg/svg-wave_pink.svg';
import svg_wave_white from '../images/svg/svg-wave_white.svg';
import twitter from '../images/svg/twitter 1.png';
import eye_open from '../images/svg/eye-open.svg';
import eye_close from '../images/svg/eye-close.svg';

import LoginPage from "./LoginPage";
import {users} from "../bd";

const RegPage = () => {
    let src = 'eye_open';
    const history = useHistory();
    const handleClick = () => {
        if (document.getElementById('psw').value === document.getElementById('psw_re').value) {
            users[document.getElementById('username').value] = {
                'password' : document.getElementById('psw').value,
                'email' : document.getElementById('email').value
            };
            console.log(users);
            history.push('/login');
        } else {
            alert('Different passwords');
        }
    };
    const showOrHidePassword = (id, selfId) => {
        const password = document.getElementById(id);
        if (password.type === 'password') {
            document.getElementById(selfId).src = eye_open;
            password.type = 'text';
        } else {
            document.getElementById(selfId).src = eye_close;
            password.type = 'password';
        }
    };
    return (
        <div>
            <div className="main-registration">
                <div className="register-container">
                    <div className="register-container__left-box">
                        <img src={svg_wave_white} alt=""
                             className="register-container__svg-wave_pink"/>
                        <div className="register-container__register-path-box">
                            <div className="register-container__register-path-box_container">
                                <div className="register-container__register-path-box_second">
                                    <p className="register-container__header-right">Log in</p>
                                    <p className="register-container__under-header-right">Already have an account
                                        in<br/>
                                        <span className="register-container__under-header_red">Kai</span>Pass?</p>
                                </div>
                                <Link to='/login' className="register_container__log-in-button_right">
                                    <div className="register-container__log-in-button-box_right">
                                        <p className="register-container__log-in-button-box-text">Log In</p>
                                        <div className="register-container__log-in-button-box-img"><img
                                            src={right_arrow} alt="" className=""/></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="register-container__right-box">
                        <img src={svg_wave_pink} alt=""
                             className="register-container__svg-wave_white"/>
                        <div className="register-container__login-box">
                            <p className="register-container__header">Register</p>

                            <div className="register-container__input-block">
                                <p className="register-container__input-header">Email</p>
                                <div className="register-container__input-box">
                                    <input placeholder="Type your email here" id='email' type="email" name="name"
                                           autoComplete="off" required/>
                                </div>
                            </div>
                            <div className="register-container__input-block">
                                <p className="register-container__input-header">Username</p>
                                <div className="register-container__input-box">
                                    <input placeholder="Type your username here" id='username' type="username" name="name"
                                           autoComplete="off" required/>
                                </div>
                            </div>
                            <div className="register-container__input-block">
                                <p className="register-container__input-header">Password</p>
                                <div className="register-container__input-box">
                                    <input placeholder="Type your password here" id='psw' type="password" name="name"
                                           autoComplete="off" required/>
                                    <img src={eye_close} id='toggle_1'
                                         onClick={() => showOrHidePassword('psw', 'toggle_1')} alt=""/>
                                </div>
                            </div>
                            <div className="register-container__input-block">
                                <p className="register-container__input-header">Repeat password</p>
                                <div className="register-container__input-box">
                                    <input placeholder="Type password again" id='psw_re' type="password" name="name"
                                           autoComplete="off" required/>
                                    <img src={eye_close} id='toggle_2'
                                         onClick={() => showOrHidePassword('psw_re', 'toggle_2')} alt=""/>
                                </div>
                                <p className="register_container__forgot-password"></p>

                                <div className="register-container__log-in-button-box" onClick={handleClick}>
                                    <p className="register-container__log-in-button-box-text">Log in</p>
                                    <div className="register-container__log-in-button-box-img"><img
                                        src={right_arrow} alt="" className=""/></div>
                                </div>

                                <div className="register-container__alternate-login-box">
                                    <a href="" className="register_container__alternate-login_without-padding">
                                        <img src={google_plus} alt=""
                                             className="register_container__alternate-login-item"/>
                                    </a>
                                    <a href="" className="register_container__alternate-login">
                                        <img src={facebook} alt=""
                                             className="register_container__alternate-login-item"/>
                                    </a>
                                    <a href="" className="register_container__alternate-login">
                                        <img src={twitter} alt=""
                                             className="register_container__alternate-login-item"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<form name="">*/}
                {/*    <input type="text" name="" id="username" placeholder="введите email"/>*/}
                {/*    <input type="password" name="" id="psw" className='psw' placeholder="введите пароль"/>*/}
                {/*    <input type='checkbox' id='toggle' onClick={() => showOrHidePassword('psw')}/>*/}
                {/*    <input type="password" name="" id="psw_re" className='psw' placeholder="повторите пароль"/>*/}
                {/*    <input type='checkbox' id='toggle' onClick={() => showOrHidePassword('psw_re')}/>*/}
                {/*</form>*/}
                {/*<Link to='/'>*/}
                {/*    <button onClick={handleClick}>*/}
                {/*        Sign Up*/}
                {/*    </button>*/}
                {/*</Link>*/}
                {/*<Link to='/login'>*/}
                {/*    <button>*/}
                {/*        Log In*/}
                {/*    </button>*/}
                {/*</Link>*/}
                <Switch>
                    <Route path="/">
                    </Route>
                    <Route path="/login">
                        <LoginPage/>
                    </Route>
                </Switch>
            </div>
        </div>

    );
};

export default RegPage;