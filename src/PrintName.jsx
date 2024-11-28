import React, { useState, useEffect } from 'react';
export default function PrintName() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  useEffect(() => {
    setFullName(`${firstName} ${lastName}`);
  }, [firstName, lastName]);

  return (
    <>
      <h1>Print name</h1>
      <input
        type="text"
        id="firstName"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        id="lastName"
        onChange={(e) => setLastName(e.target.value)}
      />
      <h4>{fullName}</h4>
    </>
  );
}
