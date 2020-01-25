import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Header, Button, Anchor } from 'grommet'
import { Link, withRouter, } from 'react-router-dom'

class Navbar extends React.Component {
  
  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    
    if (user) {
      return (
        <Header alignSelf='end'>
          <Button
            id='logout'
            label='Logout'
            onClick={ () => handleLogout(this.props.history) }
          />
        </Header>
      )
    } else {
      return (
        <Header alignSelf='end'>
          <Link to='/login'>
            <Button
              id='login'
              label='Login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Button
              id='register'
              label='Register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Header>
      )
    }
  }
  
  render() {
    return (
      <div>
        <Header pointing secondary>
          <Link to='/'>
            <Button
              label='Home'
              id='home'
              active={this.props.location.pathname === '/'}
            />
          </Link>
            { this.rightNavItems() }
        </Header>
      </div>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);