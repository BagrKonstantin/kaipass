import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import RegPage from "./RegPage";

const LoginPage = () => {
    const handleClick = () => {
        console.log(document.getElementById('email').value);
        console.log(document.getElementById('psw').value);
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
            <form name="">
                <input type="text" name="" id="email" placeholder="введите email"/>
                <input type="password" name="" id="psw" placeholder="введите пароль"/>
                <input type='checkbox' id='toggle' onClick={showOrHidePassword}/>
            </form>
            <Link to='/'>
                <button onClick={handleClick}>
                    Log in
                </button>
            </Link>
            <Link to='/registration'>
                <button>
                    Sign Up
                </button>
            </Link>
            <Switch>
                <Route path="/">
                </Route>
                <Route path="/registration">
                    <RegPage />
                </Route>
            </Switch>
        </div>
    );
};

export default LoginPage;