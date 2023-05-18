import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import theme from './utils/theme.js';

import '@fontsource/inter/700.css';
import '@fontsource/inter/400.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
