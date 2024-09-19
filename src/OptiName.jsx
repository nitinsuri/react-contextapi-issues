import React from 'react';

export default function OptiName() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  React.useEffect(() => {
    setFullName(`${firstName} ${lastName}`);
  }, [firstName, lastName]);
  const [state, setState] = React.useState({
    name: 'John',
    age: 30,
  });
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
      {firstName} {lastName}
      <br />
      {fullName}
    </>
  );
}
