import React from 'react';

export default function SelectorDropDown({ cb, options, selectorId }) {
  return (
    <select onChange={(e) => cb(e, selectorId)} id={selectorId}>
      <option value={null} defaultValue disabled>
        Select
      </option>
      {options.map((o, i) => {
        return (
          <option key={i} value={o.val}>
            {o.name}
          </option>
        );
      })}
    </select>
  );
}
