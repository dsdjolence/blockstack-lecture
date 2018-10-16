import React, { Component } from 'react';
import './styles.css';
import {
  loadUserData,
  Person,
  signUserOut
} from 'blockstack'
import Todo from '../../organisms/ToDo'

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

    return (
        <div className="profile">
          <header>
            <h1 className={'page-title'}>Profile</h1>
            <button className={'logout-btn'} onClick={this.handleSignOut}>Sign out</button>
          </header>

          <div className="profile-header">
            <div className="avatar-section">
              <img alt={'Not found'} src={avatar()} className="avatar"/>
            </div>
            <h1>Hello, <span id="heading-name">{name()}</span>!</h1>
          </div>
          <Todo/>
        </div>
    );
  }
}

export default Profile;
