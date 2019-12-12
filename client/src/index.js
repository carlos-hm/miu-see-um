import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/GlobalStyles'
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Routes from './Routes';
import { StyledNavbar } from './styles/componets';
import MyProvider from './context';

ReactDOM.render(
  <>
    <MyProvider>
      <StyledNavbar/>
      <GlobalStyles/>
      <Routes />
    </MyProvider>
  </>,
  document.getElementById('root')
);

serviceWorker.register();
