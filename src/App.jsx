import React from 'react';
import AppProvider from './AppContext';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import './style.css';

function AppOne() {
  return (
    <>
      <h1>Context Two</h1>
      <AppProvider>
        <ComponentOne />
        <ComponentTwo />
      </AppProvider>
    </>
  );
}

export default AppOne;
