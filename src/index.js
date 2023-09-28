import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import App from './AppNRR';
import AppOne from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <Nav />
    <App />
    <AppOne />
  </StrictMode>
);
