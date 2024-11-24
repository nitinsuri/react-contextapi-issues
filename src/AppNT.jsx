import React from 'react';
import AppProvider from './AppContext';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import './styles.scss';

function AppNT() {
  return (
    <>
      <h1>Context Non-rerendering</h1>
      <AppProvider>
        <ComponentOne />
        <ComponentTwo />
      </AppProvider>
    </>
  );
}

export default AppNT;
