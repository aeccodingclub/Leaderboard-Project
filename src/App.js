import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Leaderboard from './Components/Pages/leaderboard/leaderboard';
import Signup from './Components/Pages/auth/signup';
import Login from './Components/Pages/auth/login'

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path='/leaderboard' component={Leaderboard} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
      </Switch>
    </Router>
  );
};

export default App;
