import React, { Fragment, } from 'react'
import Contacts from './components/Contacts'
import Contact from './components/Contact'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import { Box } from 'grommet'
import { Switch, Route, } from 'react-router-dom'
import FetchUser from './components/FetchUser'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {

  return (
    <Fragment>
      <Navbar />
      <FetchUser>
        <Box pad='medium'>
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/contacts" component={Contacts} />
            <ProtectedRoute exact path="/contacts/:contact_id" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </Box>
      </FetchUser>
    </Fragment>
  )
}

export default App;
