import React, {Component} from 'react'
import './styles.css'
import {isUserSignedIn} from 'blockstack'
import Login from '../Login'
import Profile from '../Profile'

class Home extends Component {
  constructor() {
    super()

    this.state = {
      user: {},
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
