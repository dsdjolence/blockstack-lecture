import React, {Component} from 'react'
import './styles.css'

import {redirectToSignIn} from 'blockstack'

class Login extends Component {
  handleSignIn = () => {
    redirectToSignIn()
  }

  render() {
    return (
        <div className="login">
          <div className={'login-page'}>
            <div className="wrap">
              <h1>Welcome</h1>
              <button className={'login-button'}
                      onClick={this.handleSignIn}>Sign in
              </button>
            </div>
          </div>
        </div>
    )
  }
}

export default Login
