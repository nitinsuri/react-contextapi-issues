import React, { useContext } from 'react';
import { AppContext } from './AppContext';

export default function ComponentTwo() {
  console.log('Component TWO');
  return (
    <>
      <section>
        <p>
          This message is from Component TWO and has nothing to do with
          Component ONE.
        </p>
      </section>
    </>
  );
}
