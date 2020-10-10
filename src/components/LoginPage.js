import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

const LoginPage = () => {
    const handleClick = () =>{
        console.log(document.getElementById('email').value);
        console.log(document.getElementById('psw').value);
    }
    return (
        <div>
            <form name="">
                <input type="text" name="" id="email" placeholder="введите email"/>
                <input type="password" name="" id="psw" placeholder="введите пароль"/>
            </form>
            <Link to='/'><button value="отправить" onClick={handleClick}/></Link>
            <Switch>
                <Route path="/">
                </Route>
            </Switch>
        </div>
    );
};

export default LoginPage;