import React, { useContext } from 'react';
import { AppContext } from './AppContexts/AppContext';

export default function ComponentOne() {
  console.log('Component ONE');
  const [count, setCount] = useContext(AppContext);
  const handleReset = () => {
    setCount(0);
    console.clear();
  };
  return (
    <>
      <section>
        <h2>Hello from Component ONE</h2>
        <h3>Count: {count}</h3>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
        <button onClick={() => handleReset()}>Reset</button>
      </section>
    </>
  );
}
