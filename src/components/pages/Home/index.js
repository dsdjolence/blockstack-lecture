import React, {Component} from 'react'
import './styles.css'
import {isUserSignedIn, isSignInPending, handlePendingSignIn} from 'blockstack'
import Login from '../Login'
import Profile from '../Profile'

class Home extends Component {
  componentWillMount() {
    if (isSignInPending()) {
      handlePendingSignIn().then(() => {
        window.location = window.location.origin;
      });
    }
  }

  render() {
    return (
        <div className="application">
          {isUserSignedIn() ? <Profile/> : <Login/>}
        </div>
    )
  }
}

export default Home
