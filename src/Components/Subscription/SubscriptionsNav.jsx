import React from 'react';
import SubscriptionsStyles from './SubscriptionsStyles';

export default function SubscriptionsNav(props){
  const {SubscriptionsNav} = SubscriptionsStyles;
  const {uniqueCategories, filterButtonOnClickHandler} = props;
  return (
      <SubscriptionsNav>
        <button>Show all</button>
        {
          uniqueCategories.map(item => <button key={Math.random()} onClick={e => filterButtonOnClickHandler(item)}>{item}</button>)
        }
      </SubscriptionsNav>
  )
}