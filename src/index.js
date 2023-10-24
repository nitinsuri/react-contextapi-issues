import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import App from './App';
import AppNT from './AppNT';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/appone" element={<AppNT />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
