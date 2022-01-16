import { hot } from 'react-hot-loader/root';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import SimpleComponent from './SimpleComponent';

import styles from './App.scss';

const App = () => {
  console.log(styles);
  return (
    <React.StrictMode>
      <div className={styles.root}>Hello World!</div>
      <SimpleComponent />
      <AppBar>
        123
      </AppBar>
    </React.StrictMode>
  );
};
export default (process.env.NODE_ENV === 'development') ? hot(App) : App;
