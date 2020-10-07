import { hot } from 'react-hot-loader/root';
import React from 'react';
import { AppBar } from '@material-ui/core';
import SimpleComponent from './SimpleComponent';

const App = () => (
  <React.StrictMode>
    <div>Hello World!</div>
    <SimpleComponent />
    <AppBar />
  </React.StrictMode>
);
export default (process.env.NODE_ENV === 'development') ? hot(App) : App;
