import React from 'react';
import AppProvider from './AppContexts/AppContext';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import './styles.scss';

function AppNT() {
  return (
    <>
      <h1>Fixed</h1>
      <AppProvider>
        <ComponentOne />
        <ComponentTwo />
      </AppProvider>
    </>
  );
}

export default AppNT;
