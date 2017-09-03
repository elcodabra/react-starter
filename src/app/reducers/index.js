import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { ordersReducer } from '../components/Orders/ordersReducers';

const rootReducer = combineReducers({
  ordersReducer,
  form: formReducer
});

export default rootReducer;

