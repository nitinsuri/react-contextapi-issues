import React, { useState } from 'react';
import AppProvider, { AppContext } from './AppContext';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentOneOne from './ComponentOneOne';
import ComponentTwoTwo from './ComponentTwoTwo';

function App() {
  const [countOne, setCountOne] = useState(10);
  return (
    <>
      <AppProvider>
        <ComponentOne />
        <ComponentTwo />
      </AppProvider>
      <AppContext.Provider value={[countOne, setCountOne]}>
        <ComponentOneOne />
        <ComponentTwoTwo />
      </AppContext.Provider>
    </>
  );
}

export default App;
