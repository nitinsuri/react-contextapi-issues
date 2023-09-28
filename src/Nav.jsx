import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Nav() {
  return (
    <nav>
      <NavLink to="/">App One</NavLink>
      <NavLink to="/appone">App Two</NavLink>
    </nav>
  );
}
