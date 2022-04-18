import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import AppRouter from './components/AppRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { theme } from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
