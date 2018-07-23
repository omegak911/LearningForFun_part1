import React from 'react';

import './Landing.css';

const Signup = (props) =>
  <div id="landing">
    <h2>Signup</h2>
    <form onSubmit={props.handleSignup}>
      <input placeholder="username"/>
      <input placeholder="password"/>
      <br />
      <button type="submit">submit</button>
    </form>
    <button type="button" onClick={() => props.handleSignup('login')}>Go Log In</button>
  </div>

export default Signup;