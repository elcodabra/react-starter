import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CreateOrEditOrder from './CreateOrEdit';
import ListOrders from './List';

const Orders = () => (
  <Switch>
    <Route exact path='/orders' component={ListOrders}/>
    <Route exact path='/orders/create' component={CreateOrEditOrder}/>
    <Route path='/orders/view/:id' component={CreateOrEditOrder}/>
  </Switch>
)

export default Orders;