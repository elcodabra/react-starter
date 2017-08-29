import React from 'react';
import Header from './components/Header';
import Routes from './routes';

const App = () => {
  return (
    <div style={{textAlign:'center'}}>
      <Header />
      <Routes />
    </div>
  )
}

export default App;