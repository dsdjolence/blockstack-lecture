import React, { Component } from 'react';
import './styles.css';
import {signUserOut} from 'blockstack';

class Profile extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  handleSignOut = () => {
    const orign = window.location.origin
    signUserOut(orign);
  }

  render() {
    return (
        <div className="profile">
          <h1>Profile</h1>
          <button onClick={this.handleSignOut}>Sign out</button>
        </div>
    );
  }
}

export default Profile;
