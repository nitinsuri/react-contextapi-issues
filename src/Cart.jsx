import React from 'react';
import { TextRA, TextStrongRA } from './StyleUtils';
import cartStyles from './CartStyles';

export default function Cart({ shoppingCart }) {
  const { CartList, CartListHeader, CartListItem } = cartStyles;
  return (
    <>
      <h1>Cart</h1>
      <CartList>
        <CartListHeader>
          <span>Product</span>
          <TextRA>Price (ea)</TextRA>
          <TextRA>Qty</TextRA>
        </CartListHeader>
        {shoppingCart.map((item) => (
          <CartListItem>
            <span>{item.name}</span>
            <TextRA>${item.price}</TextRA>
            <TextRA>{item.quantity}</TextRA>
          </CartListItem>
        ))}
        <CartListItem>
          <span>Total:</span>
          <TextStrongRA>
            $
            {shoppingCart.reduce((a, item) => {
              const totalPrice = (a += item.price * item.quantity);
              return Number(totalPrice.toFixed(2));
            }, 0)}
          </TextStrongRA>
          <TextStrongRA>
            {shoppingCart.reduce((a, item) => {
              return (a += item.quantity);
            }, 0)}
          </TextStrongRA>
        </CartListItem>
      </CartList>
    </>
  );
}
