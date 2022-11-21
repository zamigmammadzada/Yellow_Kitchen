import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ColorModeContextProvider from './context/ColorModeContext';
import './index.css'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ColorModeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ColorModeContextProvider>
  </React.StrictMode>
);

