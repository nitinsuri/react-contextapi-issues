import React, { useContext } from 'react';
import { AppContext } from './AppContext';

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
        <h1>Hello from Component ONE</h1>
        <h2>Count: {count}</h2>
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
