import React, { useContext } from 'react';
import { AppContext } from './AppContext';

export default function ComponentOneOne() {
  const [countOne, setCountOne] = useContext(AppContext);
  console.log('ComponentOneOne');
  return (
    <>
      <h1>Hello from ComponentOne</h1>
      <h2>Count: {countOne}</h2>
      <button onClick={() => setCountOne((countOne) => countOne + 1)}>
        Increment
      </button>
      <button onClick={() => setCountOne((countOne) => countOne - 1)}>
        Decrement
      </button>
      <button onClick={() => setCountOne(10)}>Reset</button>
    </>
  );
}
