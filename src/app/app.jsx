import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeLogo from '../assets/img/WelcomeToSite.jpg';

const Application = () => {

  const title = 'react-starter-app';

  return (
    <div style={{textAlign:'center'}}>
      <h1>
        Welcome to {title}!
      </h1>
      <img src={WelcomeLogo} />
    </div>
  )
}

ReactDOM.render(<Application />, document.getElementById('app-root'));