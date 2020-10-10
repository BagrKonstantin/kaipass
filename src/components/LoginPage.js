import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory,
    Link,
} from "react-router-dom";
import RegPage from "./RegPage";
import facebook from '../images/svg/facebook.svg';
import google_plus from '../images/svg/google-plus 1.svg';
import right_arrow from '../images/svg/right-arrow.svg';
import svg_wave_pink from '../images/svg/svg-wave_pink.svg';
import svg_wave_white from '../images/svg/svg-wave_white.svg';
import twitter from '../images/svg/twitter 1.png';
import {users} from "../bd";
import Main from "./Main";

const LoginPage = () => {
    const history = useHistory();

    const handleClick = () => {
        if (users[document.getElementById('username').value] !== undefined
            &&
            users[document.getElementById('username').value].password === document.getElementById('psw').value) {
            console.log(true);
            history.push('/main');
        } else {
            alert('Wrong password or username');
        }
    };
    const showOrHidePassword = () => {
        const password = document.getElementById('psw');
        if (password.type === 'password') {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    };
    return (
        <div>
            <div className="main">
                <div className="register-container">
                    <div className="register-container__left-box">
                        <img src={svg_wave_pink} alt="" className="register-container__svg-wave_pink"/>
                        <div className="register-container__login-box">
                            <p className="register-container__header">Log in</p>
                            <p className="register-container__under-header">To start using <span
                                className="register-container__under-header_red">Kai</span>Pass you<br/> need to
                                login.</p>
                            <div className="register-container__input-block">
                                <p className="register-container__input-header">Username</p>
                                <div className="register-container__input-box">
                                    <input placeholder="Type your username here" id='username' type="username"
                                           name="name"
                                           autoComplete="off" required/>
                                </div>
                            </div>
                            <div className="register-container__input-block">
                                <p className="register-container__input-header">Password</p>
                                <div className="register-container__input-box">
                                    <input placeholder="Type your password here" id='psw' type="password" name="name"
                                           autoComplete="off" required/>
                                </div>
                            </div>
                            <p className="register_container__forgot-password">Forgot your password? Click here</p>
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
                    <div className="register-container__right-box">
                        <img src={svg_wave_white} alt="" className="register-container__svg-wave_white"/>
                        <div className="register-container__register-path-box">
                            <div className="register-container__register-path-box_container">
                                <div className="register-container__register-path-box_second">
                                    <p className="register-container__header-right">Register</p>
                                    <p className="register-container__under-header-right">To connect with <span
                                        className="register-container__under-header_red">Kai</span>Pass you<br/>need
                                        to create your personal<br/> account.</p>
                                </div>
                                <Link to='/registration' className="register_container__log-in-button_right">
                                    <div className="register-container__log-in-button-box_right">
                                        <p className="register-container__log-in-button-box-text">Sign up</p>
                                        <div className="register-container__log-in-button-box-img"><img
                                            src={right_arrow} alt="" className=""/></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<form name="">*/}
            {/*    <input type="text" name="" id="email" placeholder="введите email"/>*/}
            {/*    <input type="password" name="" id="psw" placeholder="введите пароль"/>*/}
            {/*    <input type='checkbox' id='toggle' onClick={showOrHidePassword}/>*/}
            {/*</form>*/}
            {/*<Link to='/'>*/}
            {/*    <button onClick={handleClick}>*/}
            {/*        Log in*/}
            {/*    </button>*/}
            {/*</Link>*/}
            {/*<Link to='/registration'>*/}
            {/*    <button>*/}
            {/*        Sign Up*/}
            {/*    </button>*/}
            {/*</Link>*/}
            <Switch>
                <Route path="/main">
                    <Main/>
                </Route>
                <Route path="/registration">
                    <RegPage/>
                </Route>
            </Switch>
        </div>
    );
};

export default LoginPage;