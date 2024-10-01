import React, { useContext } from 'react';
import { AppContext } from './AppContext';

export default function ComponentOne() {
  console.log('Component ONE');
  const [countOne, setCountOne] = useContext(AppContext);
  const handleReset = () => {
    setCountOne(0);
    console.clear();
  };
  return (
    <>
      <section>
        <h1>Count: {countOne}</h1>
        <button onClick={() => setCountOne((countOne) => countOne + 1)}>
          Increment
        </button>
        <button onClick={() => setCountOne((countOne) => countOne - 1)}>
          Decrement
        </button>
        <button onClick={() => handleReset()}>Reset</button>
      </section>
    </>
  );
}
