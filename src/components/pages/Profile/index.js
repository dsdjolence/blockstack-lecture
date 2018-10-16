import React, { Component } from 'react';
import './styles.css';
import {
  loadUserData,
  Person,
  signUserOut
} from 'blockstack'

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png'

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      person: {
        name() {
          return 'Anonymous'
        },
        avatarUrl() {
          return avatarFallbackImage
        },
      },
    }
  }

  handleSignOut = () => {
    const orign = window.location.origin
    signUserOut(orign);
  }

  componentWillMount() {
    this.setState({
      person: new Person(loadUserData().profile),
    })
  }

  render() {
    const {person} = this.state

    const name = () => {
      if (!person.name()) {
        return 'Nameless Person'
      }

      return person.name()
    }

    const avatar = () => {
      if (!person.avatarUrl()) {
        return avatarFallbackImage
      }

      return person.avatarUrl()
    }

    console.log(person);
    return (
        <div className="profile">
          <h1>Profile</h1>
          <button onClick={this.handleSignOut}>Sign out</button>
          <div className="avatar-section">
            <img alt={'Not found'} src={avatar()} className="avatar"/>
          </div>
          <h1>Hello, <span id="heading-name">{name()}</span>!</h1>
        </div>
    );
  }
}

export default Profile;
