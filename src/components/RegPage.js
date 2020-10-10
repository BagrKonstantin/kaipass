import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import LoginPage from "./LoginPage";

const RegPage = () => {
    const handleClick = () => {
        console.log(document.getElementById('email').value);
        if(document.getElementById('psw').value===document.getElementById('psw_re').value){
            console.log(true);
        }
    };
    const showOrHidePassword = (props) => {
        const password = document.getElementById(props);
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
                <input type="password" name="" id="psw" className='psw' placeholder="введите пароль"/>
                <input type='checkbox' id='toggle' onClick={() => showOrHidePassword('psw')}/>
                <input type="password" name="" id="psw_re" className='psw' placeholder="повторите пароль"/>
                <input type='checkbox' id='toggle' onClick={() => showOrHidePassword('psw_re')}/>
            </form>
            <Link to='/'>
                <button onClick={handleClick}>
                    Sign Up
                </button>
            </Link>
            <Link to='/login'>
                <button>
                    Log In
                </button>
            </Link>
            <Switch>
                <Route path="/">
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
            </Switch>

        </div>
    );
};

export default RegPage;