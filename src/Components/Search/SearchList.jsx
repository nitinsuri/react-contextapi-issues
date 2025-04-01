import React from 'react';
import listStyles from './SearchListStyles';

export default function List({ data }) {
  const { ListWrapper, ListItem } = listStyles;
  return (
    <>
      <h2>Total definitions found: {data.length}</h2>
      <ListWrapper>
        {data.map((item, idx) => (
          <ListItem key={idx}>{item.definition}</ListItem>
        ))}
      </ListWrapper>
    </>
  );
}
