import React, { Component } from 'react';
import './styles.css';

import {redirectToSignIn} from 'blockstack';

class Login extends Component {
  handleSignIn = () => {
    redirectToSignIn();
  }

  render() {
    return (
        <div className="login">
          <h1>Login Page</h1>
          <button onClick={this.handleSignIn}>Sign in</button>
        </div>
    );
  }
}

export default Login;
