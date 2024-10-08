import React, { useState } from 'react';
import { AppContext } from './AppContext';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import DrinksList from './DrinksList';
import './style.css';

function App() {
  const [countOne, setCountOne] = useState(0);
  return (
    <>
      {/* <h1>Rerendering</h1>
      <AppContext.Provider value={[countOne, setCountOne]}>
        <ComponentOne />
        <ComponentTwo />
      </AppContext.Provider>
     */}
      <DrinksList />
    </>
  );
}

export default App;
