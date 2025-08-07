import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from './ThemeContext.jsx'; // import this for dark mode

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BrowserRouter> {/* ✅ Important wrapper */}
      <App />
    </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>
);