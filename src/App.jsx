import React, { useState } from 'react';
import { AppContext } from './AppContext';
import ComponentThree from './ComponentThree';
import ComponentFour from './ComponentFour';
import './style.css';

function App() {
  const [countOne, setCountOne] = useState(0);
  return (
    <>
      <h1>Context Rerendering</h1>
      <AppContext.Provider value={[countOne, setCountOne]}>
        <ComponentThree />
        <ComponentFour />
      </AppContext.Provider>
    </>
  );
}

export default App;
