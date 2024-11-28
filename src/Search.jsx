import React, { useEffect, useState } from 'react';
import useDebounce from './hooks/useDebounce';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [notFound, setNotFound] = useState(false);
  const debouncedTerm = useDebounce(searchTerm, 500);
  function fetchData() {
    const url = `https://wordsapiv1.p.rapidapi.com/words/${searchTerm}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '8bb9726883mshb2f7620f2b6ea16p1d869ajsn263626be1331',
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.message);
        if (!res.success && res.message === 'word not found') {
          setNotFound(true);
        }
      });
  }
  useEffect(() => {
    if (debouncedTerm.length < 1) return;
    fetchData();
  }, [debouncedTerm]);
  return (
    <>
      <h1>Search with DeBounce</h1>
      <input
        autoComplete="off"
        type="text"
        id="searchTerm"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {notFound ?? <p>nothing found</p>}

      {debouncedTerm.length > 0 ?? (
        <p>You searched for the word: {debouncedTerm}</p>
      )}
    </>
  );
}
