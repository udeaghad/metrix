import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store  from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme/theme';
import { ThemeProvider } from '@mui/material/styles';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
      <ThemeProvider  theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
    </Router>
  </React.StrictMode>
);