import React from 'react';
import AppProvider from './AppContext';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import './styles.scss';

function AppNT() {
  return (
    <>
      <h1>Reactivated</h1>
      <AppProvider>
        <ComponentOne />
        <ComponentTwo />
      </AppProvider>
    </>
  );
}

export default AppNT;
