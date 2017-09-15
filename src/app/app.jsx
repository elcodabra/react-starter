import React from 'react';
import Header from './components/Header';
import Routes from './routes';
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="starter-template">
          <Header />
          <Routes />
        </div>
      </div>
    </Provider>
  )
}

export default App;