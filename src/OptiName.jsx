import React, { useState, useEffect } from 'react';
export default function OptiName() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  useEffect(() => {
    setFullName(`${firstName} ${lastName}`);
  }, [firstName, lastName]);

  return (
    <>
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
      <br />
      {fullName}
    </>
  );
}
