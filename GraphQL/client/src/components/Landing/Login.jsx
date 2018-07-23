import React from 'react';

import './Landing.css';

const Login = (props) =>
  <div id="landing">
    <h2>Login</h2>
    <form onSubmit={props.handleLogin}>
      <input placeholder="username"/>
      <input placeholder="password"/>
      <br />
      <button type="submit">submit</button>
    </form>
    <br />
    <button type="button" onClick={() => props.handleLogin('signup')}>Go Signup</button>
  </div>

export default Login;