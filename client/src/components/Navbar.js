import React, { useEffect, useState, } from 'react'
import axios from 'axios'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Header, Button } from 'grommet'
import { Link, withRouter, } from 'react-router-dom'

const Navbar = (props) => {

  const rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = props;
    

    if (user) {
      return (
        <Header alignSelf='end'>
          <Button
            id='logout'
            label='Logout'
            onClick={ () => handleLogout(props.history) }
          />
        </Header>
      )
    } else {
      return (
        <Header alignSelf='start'>
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
        <Header pointing secondary>
          <Link to='/'>
            <Button
              label='Home'
              id='home'
              active={props.location.pathname === '/'}
            />
          </Link>
          {/* <Link to='/22/contacts'>
            <Button
              label='Contacts'
              id='contacts'
              active={props.location.pathname === '/22/contacts'}
            />
          </Link> */}
            { rightNavItems() }
        </Header>
      </div>
    )
}

const ConnectedNavbar = (props) => {
  const [studios, setStudios] = useState([])

    useEffect(() => {
      async function getStudios() {
        await axios.get('/api/studios')
          .then(res => {
            setStudios(res.data)
            // setCurrentStudio(studios[0])
          })
      }
      getStudios()
    }, [])

    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...props } auth={auth} />
        }
      </AuthConsumer>
    )
}

export default withRouter(ConnectedNavbar);