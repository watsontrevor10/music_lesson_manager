import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Header, Box, Button } from 'grommet'
import { Link, withRouter, } from 'react-router-dom'

const Navbar = (props) => {

  const rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = props;

    if (user) {
      return (
        <Header alignSelf='end' justify='end'>
          <Button
            id='logout'
            label='Logout'
            onClick={() => handleLogout(props.history)}
          />
        </Header>
      )
    } else {
      return (
        <Header>
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

  return (
    <div>
      <Header pointing secondary alignSelf='start'>
        <Box direction='row-responsive' gap='small'>
          <Link to='/'>
            <Button
              label='Home'
              id='home'
              active={props.location.pathname === '/'}
            />
          </Link>
          <Link to='/contacts'>
            <Button
              label='Contacts'
              id='contacts'
              active={props.location.pathname === '/contacts'}
            />
          </Link>
          <Link to='/expenses'>
            <Button
              label='Expenses'
              id='expenses'
              active={props.location.pathname === '/expenses'}
            />
          </Link>
        </Box>
        <Box>
          {rightNavItems()}
        </Box>
      </Header>
    </div>
  )
}

const ConnectedNavbar = (props) => {

  return (
    <AuthConsumer>
      {auth =>
        <Navbar {...props} auth={auth} />
      }
    </AuthConsumer>
  )
}

export default withRouter(ConnectedNavbar);