import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '../reducers';

const middleware = [ thunk ];
let composeEnhancers = (v) => (v);

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())

  composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }) : compose;
}

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);

export default store;