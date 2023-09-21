import React, { useContext } from 'react';
import { AppContext } from './AppContext';

export default function ComponentThree() {
  const [countOne, setCountOne] = useContext(AppContext);
  console.log('ComponentThree');
  return (
    <>
      <section>
        <h1>Hello from ComponentThree</h1>
        <h2>Count: {countOne}</h2>
        <button onClick={() => setCountOne((countOne) => countOne + 1)}>
          Increment
        </button>
        <button onClick={() => setCountOne((countOne) => countOne - 1)}>
          Decrement
        </button>
        <button onClick={() => setCountOne(10)}>Reset</button>
      </section>
    </>
  );
}
