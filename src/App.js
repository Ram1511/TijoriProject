import { createBrowserHistory } from '@remix-run/router';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import './App.css';
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-261688946-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  const history = createBrowserHistory();

  return (
    <BrowserRouter history={history}>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
