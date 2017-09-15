import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import ListTweets from './components/Tweets';

const Routes = () => (
  <Switch>
    <Redirect exact from='/' to='/tweets'/>
    <Route exact path='/home' component={Home}/>
    <Route exact path='/about' component={About}/>
    <Route path='/tweets' component={ListTweets}/>
    <Route component={PageNotFound}/>
  </Switch>
)

export default Routes;