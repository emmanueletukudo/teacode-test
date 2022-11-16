import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CssBaseline } from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import theme from './team';
import reportWebVitals from './reportWebVitals';
import UserProvider from './contexts/userContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
  <UserProvider>
  <React.StrictMode>
    <CssBaseline/>
    <App />
  </React.StrictMode>
  </UserProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
