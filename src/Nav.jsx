import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Nav() {
  return (
    <nav>
      <NavLink to="/">App TR</NavLink>
      <NavLink to="/appnt">App NT</NavLink>
      <NavLink to="/printname">Print name</NavLink>
      <NavLink to="/cart">Cart List</NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/subscriptions">Subscriptions</NavLink>
    </nav>
  );
}
