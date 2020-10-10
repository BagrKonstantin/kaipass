import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import LoginPage from './components/LoginPage';

function App() {
    return (
        <Router>
            <div className='vvv'>
                <Link to="/login">Home</Link>
            </div>
            <Switch>
                <Route path="/login">
                    <LoginPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
