import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/users/1'>User 1</Link></li>
        <li><Link to='/users/2'>User 2</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header;