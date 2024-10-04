import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

async function getData() {
  const fetcher = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b'
  );
  const captureResponse = await fetcher.json();
  console.log(captureResponse.drinks);
}

// getData();
