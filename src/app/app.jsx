import React from 'react';
import Header from './components/Header';
import Routes from './routes';

import '../styles.css';
import '../assets/css/fonts.css';
import '../assets/css/forms.css';

const App = () => {
  return (
    <div style={{textAlign:'center'}}>
      <Header />
      <Routes />
    </div>
  )
}

export default App;