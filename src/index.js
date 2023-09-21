import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import AppOne from './App1';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <h2>App</h2>
    <App />
    <h2>App 2</h2>
    <AppOne />
  </StrictMode>
);
