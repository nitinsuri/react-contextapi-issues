import React, { useState, createContext } from 'react';
export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <AppContext.Provider value={[count, setCount]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
