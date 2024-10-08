import React from 'react';
import SelectorDropDown from './SelectorDropDown';
import { drinksFilerPptions } from './constants.js';

export default function DrinksList() {
  const [data, setData] = React.useState([]);
  const [filter, setFilter] = React.useState('a');
  async function getData(filter) {
    const fetcher = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${filter}`
    );
    const captureResponse = await fetcher.json();
    if (captureResponse.drinks === null) return false;
    setData(captureResponse.drinks);
  }

  React.useEffect(() => {
    getData(filter);
    () => {
      getData(filter);
    };
  }, [filter]);

  const changeCB = (e) => {
    setFilter(e.target.value);
  };
  

  return (
    <>
      <SelectorDropDown
        cb={changeCB}
        options={drinksFilerPptions}
        selectorId={'drinksFilter'}
      />
      <ul>
        {data &&
          data.map((i) => (
            <li>
              {i.strDrink} ({i.strAlcoholic})
            </li>
          ))}
      </ul>
    </>
  );
}
