import React from 'react';

import './Nav.css';

const Nav = (props) =>
  <div id="nav">
    <div className="component" onClick={() => props.handleNav('home')}>
      Home
    </div>
    <div className="component" onClick={() => props.handleNav('wild')}>
      Wild
    </div>
    <div className="component" onClick={() => props.handleNav('create')}>
      Create Pokemon
    </div>
    <div className="logout" onClick={() => props.handleNav('logout')}>
      Logout
    </div>
  </div>

export default Nav;