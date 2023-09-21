import React, { useState } from 'react';
import AppProvider, { AppContext } from './AppContext';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import './style.css';

function AppOne() {
  return (
    <>
      <AppProvider>
        <ComponentOne />
        <ComponentTwo />
      </AppProvider>
    </>
  );
}

export default AppOne;
