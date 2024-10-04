import React from 'react';

export default function SelectorDropDown({ cb, options }) {
  return (
    <select onChange={(e) => cb(e)}>
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
