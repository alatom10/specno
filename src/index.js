
import { StyledEngineProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import './App.css';
import './index.css';
import { persistor, store } from './redux/store';




ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
      <StyledEngineProvider injectFirst>
      <App/>
  </StyledEngineProvider>
        
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);