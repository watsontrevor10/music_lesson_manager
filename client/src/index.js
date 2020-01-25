import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, } from 'react-router-dom';
import { AuthProvider, } from './providers/AuthProvider';
import {Grommet} from 'grommet'
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
