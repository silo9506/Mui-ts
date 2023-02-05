import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import GlobalStyle from 'styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from 'styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
