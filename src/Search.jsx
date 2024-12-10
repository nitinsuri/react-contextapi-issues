import React, { useEffect, useState } from 'react';
import useDebounce from './hooks/useDebounce';
import List from './List';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [notFound, setNotFound] = useState(false);
  const [results, setResults] = useState();
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
        if (!res.success && res.message == 'word not found') {
          setNotFound(true);
        } else {
          setResults(res.results);
        }
      });
  }
  useEffect(() => {
    if (debouncedTerm.length < 1) return;
    fetchData();
  }, [debouncedTerm]);

  const onChangeHandlerSearchInput = (e) => {
    const val = e.target.value;
    if (val.length < 1) {
      setSearchTerm('');
      setNotFound(false);
      setResults();
    }
    setSearchTerm(val);
  };
  return (
    <>
      <h1>Dictionary Search</h1>
      <section>
        <input
          autoComplete="off"
          type="text"
          id="searchTerm"
          onChange={(e) => onChangeHandlerSearchInput(e)}
        />
        <p>{notFound ? `No results to found for: ${debouncedTerm}` : null}</p>
        <p>
          {debouncedTerm.length > 0 && !notFound
            ? `You searched for: ${debouncedTerm}`
            : null}
        </p>
        {results ? <List data={results} /> : null}
      </section>
    </>
  );
}
