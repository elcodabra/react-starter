import React from 'react';
import WelcomeLogo from '../../../assets/img/WelcomeToSite.jpg';

const Home = () => {

  const title = 'react-starter-app';

  return (
    <div>
      <h1>
        Welcome to {title}!
      </h1>
      <img src={WelcomeLogo} />
    </div>
  )
}

export default Home;