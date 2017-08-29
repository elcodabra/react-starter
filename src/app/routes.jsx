import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import Users from './components/Users';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/about' component={About}/>
    <Route exact path='/users/:id' component={Users}/>
    <Route component={PageNotFound}/>
  </Switch>
)

export default Routes;