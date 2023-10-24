import React, { useContext } from 'react';
import { AppContext } from './AppContext';

export default function ComponentThree() {
  console.log('Component THREE');
  const [countOne, setCountOne] = useContext(AppContext);
  const handleReset = () => {
    setCountOne(0);
    console.clear();
  };
  return (
    <>
      <section>
        <h1>Hello from Component THREE</h1>
        <h2>Count: {countOne}</h2>
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
