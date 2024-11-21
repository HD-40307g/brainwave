import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

// Get the root element
const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        {/* App wrapped with router */}
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
} else {
  console.error('Root element not found. Ensure an element with id="root" is present in your HTML.');
}
