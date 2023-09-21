import React, { useState, createContext } from 'react';
export const AppContext = createContext(null);

const AppProvider = (props) => {
  const [count, setCount] = useState(0);
  return (
    <AppContext.Provider value={[count, setCount]}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
