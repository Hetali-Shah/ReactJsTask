import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './pages/SignUp'
import Login from './pages/Login';
import Home from './pages/Home';
import DashBoard from './pages/DashBoard'

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/signup" component={SignUp}/>
            <Route path="/login" component={Login} />
            <Route path= "/dashboard" component={DashBoard}/>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default Routes;
