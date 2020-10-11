import React,{useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import LoginPage from './components/LoginPage';
import RegPage from "./components/RegPage";
import Main from "./components/Main";



function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/registration">
                    <RegPage />
                </Route>
                <Route path="/main">
                    <Main />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
