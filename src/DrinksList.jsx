import useFetch from './useFetch';

export default function DrinksList() {
  const data = useFetch(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b',
    0
  );
}
