import React from 'react';

export default function SubscriptionsNav(props){
    const {uniqueCategories} = props;
    const filterButtonOnClickHandler = (e) => console.log(e.target.childNodes[0]);
    return (
        <nav>
          {
            uniqueCategories.map(item => <button key={Math.random()} onClick={e => filterButtonOnClickHandler(e)}>{item}</button>)
          }
        </nav>
    )
}