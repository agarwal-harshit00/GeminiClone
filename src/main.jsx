import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import ContextProvider, { Context } from './context/Context.jsx';

createRoot(document.getElementById('root')).render(
  <ContextProvider >
    <App />

  </ContextProvider>
)
