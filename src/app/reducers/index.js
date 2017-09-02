import { combineReducers } from 'redux';
import { ordersReducer } from '../components/Orders/ordersReducers';

const rootReducer = combineReducers({
  ordersReducer
});

export default rootReducer;

