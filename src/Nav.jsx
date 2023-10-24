import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Nav() {
  return (
    <nav>
      <NavLink to="/">App TR</NavLink>
      <NavLink to="/appnt">App NT</NavLink>
    </nav>
  );
}
