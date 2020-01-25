import React, { Fragment, } from 'react';
import Home from './components/Home'
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import { Box } from 'grommet'
import { Switch, Route, } from 'react-router-dom';
import FetchUser from './components/FetchUser'
import ProtectedRoute from './components/ProtectedRoute'


const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>
      <Box direction="row" pad='medium'>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Box>
    </FetchUser>
  </Fragment>
)

export default App;
