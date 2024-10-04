import React from 'react';
import SelectorDropDown from './SelectorDropDown';

export default function DrinksList() {
  const options = [
    {
      val: 'a',
      name: 'A',
    },
    {
      val: 'b',
      name: 'B',
    },
  ];
  const [data, setData] = React.useState([]);
  async function getData() {
    const fetcher = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c'
    );
    const captureResponse = await fetcher.json();
    setData(captureResponse.drinks);
  }

  React.useEffect(() => {
    getData();
  }, []);

  const changeCB = (e) => alert(e.target.value);

  return (
    <>
      <SelectorDropDown cb={changeCB} options={options} />
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
