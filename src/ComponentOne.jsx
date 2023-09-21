import React, { useContext } from 'react';
import { AppContext } from './AppContext';

export default function ComponentOne() {
  console.log('ComponentOne');
  const [count, setCount] = useContext(AppContext);
  return (
    <>
      <section>
        <h1>Hello from ComponentOne</h1>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
      </section>
    </>
  );
}
