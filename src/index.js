import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import App from './App';
import AppNT from './AppNT';
import PrintName from './PrintName';
import Search from './Search';
import Subscriptions from './Subscriptions';
import Cart from './Cart';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <h1>Reactivated</h1>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/appnt" element={<AppNT />} />
        <Route path="/printname" element={<PrintName />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
