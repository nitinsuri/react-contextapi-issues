import React from 'react';

export default function Cart({ shoppingCart }) {
  return (
    <>
      <h1>Cart</h1>
      <ul style={{ 'list-style-type': 'none', padding: 0 }} class="cart-list">
        {shoppingCart.map((item) => (
          <li>
            {item.name} | Price: {item.price} | Quantity: {item.quantity}
          </li>
        ))}
        <li>
          Total{' '}
          <span class="emphasis">
            {shoppingCart.reduce((a, item) => {
              return (a += item.quantity);
            }, 0)}
          </span>{' '}
          items in cart costing{' '}
          <span class="emphasis">
            $
            {shoppingCart.reduce((a, item) => {
              return (a += item.price);
            }, 0)}
          </span>
        </li>
      </ul>
    </>
  );
}
