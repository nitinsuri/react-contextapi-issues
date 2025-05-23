import React, { useState } from 'react';
import { AppContext } from './AppContexts/AppContext';
import ComponentThree from './ComponentThree';
import ComponentFour from './ComponentFour';
import useFetch from './hooks/useFetch';
import usePaginator from './hooks/usePaginator';
import { default as data } from "./mockdata.json";
import './styles.scss';

function App() {
  const [paginatedData] = usePaginator(data);
  console.info(paginatedData)
  const [countOne, setCountOne] = useState(0);
  // const [data, loading, error] = useFetch()
  // console.debug(data, loading, error)
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
