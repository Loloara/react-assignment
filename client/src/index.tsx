import 'bootstrap/dist/css/bootstrap.css';
import './css/style.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StoreProvider from './providers/StoreProvider';
import 'moment/locale/ko';

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
