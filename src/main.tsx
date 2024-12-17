
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from "./components/theme-provider"

import "./styles/tailwind.css";

import App from './App'
import React from 'react';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
