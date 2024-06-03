import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import Quiz from './components/Quiz';

const App = () => {
    return (
        <Router>
            <div className="container">
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/admin" component={AdminPanel} />
                    <Route path="/quiz" component={Quiz} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
