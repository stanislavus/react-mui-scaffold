import { hot } from 'react-hot-loader/root'; // eslint-disable-line import/no-extraneous-dependencies
import React from 'react';
import { AppBar } from '@material-ui/core';

const App = () => (
  <React.StrictMode>
    <div>Hello World!</div>
    <AppBar />
  </React.StrictMode>
);
export default (process.env.NODE_ENV === 'development') ? hot(App) : App;
