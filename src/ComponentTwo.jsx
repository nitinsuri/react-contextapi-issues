import  React, { useContext } from 'react';
import { AppContext } from './AppContext';

export default function ComponentTwo() {
  console.log('ComponentTwo');
  return (
    <>
      <p>
        This message is from ComponentTwo and has nothing to do with
        ComponentOne.
      </p>
    </>
  );
}
