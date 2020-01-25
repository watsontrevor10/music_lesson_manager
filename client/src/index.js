import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, } from 'react-router-dom';
import { AuthProvider, } from './providers/AuthProvider';
// import { withStyles } from '@material-ui/core/styles'
import {Grommet} from 'grommet'
// import 'semantic-ui-css/semantic.min.css'
import { initMiddleware, } from 'devise-axios';

initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <Grommet plain>
        <App />
      </Grommet>
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);

// registerServiceWorker();
