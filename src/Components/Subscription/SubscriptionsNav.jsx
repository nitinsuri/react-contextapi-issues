import React from 'react';

export default function SubscriptionsNav(props){
    const {uniqueCategories, filterButtonOnClickHandler} = props;
    return (
        <nav>
          {
            uniqueCategories.map(item => <button key={Math.random()} onClick={e => filterButtonOnClickHandler(item)}>{item}</button>)
          }
        </nav>
    )
}