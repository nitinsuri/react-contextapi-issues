import React, { useState } from 'react';
import { AppContext } from './AppContext';
import ComponentThree from './ComponentThree';
import ComponentFour from './ComponentFour';
import useFetch from './hooks/useFetch';
import './styles.scss';

function App() {
  const [countOne, setCountOne] = useState(0);
  const [data, loading, error] = useFetch()
  console.debug(data, loading, error)
  return (
    <>
      <h1>Context</h1>
      <AppContext.Provider value={[countOne, setCountOne]}>
        <ComponentThree />
        <ComponentFour />
      </AppContext.Provider>
    </>
  );
}

export default App;
