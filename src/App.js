import React from 'react';
import './App.css';
import './login_style.css'
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


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                   <LoginPage />
                </Route>
                <Route path='/registration'>
                    <RegPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
