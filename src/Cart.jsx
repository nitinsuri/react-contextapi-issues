import React from 'react';
import { TextRA, TextStrongRA } from './StyleUtils';
import cartStyles from './CartStyles';

export default function Cart() {
  const shoppingCart = [
    {
      id: 1,
      name: 'Wireless Mouse',
      price: 19.99,
      quantity: 1,
      image: 'https://example.com/images/mouse.jpg',
    },
    {
      id: 2,
      name: 'Bluetooth Headphones',
      price: 49.99,
      quantity: 2,
      image: 'https://example.com/images/headphones.jpg',
    },
    {
      id: 3,
      name: 'USB-C Charging Cable',
      price: 7.99,
      quantity: 3,
      image: 'https://example.com/images/usb-c-cable.jpg',
    },
    {
      id: 4,
      name: 'Laptop Stand',
      price: 29.99,
      quantity: 1,
      image: 'https://example.com/images/laptop-stand.jpg',
    },
    {
      id: 5,
      name: 'Smartphone Case',
      price: 14.99,
      quantity: 2,
      image: 'https://example.com/images/smartphone-case.jpg',
    },
    {
      id: 6,
      name: 'Desk Organizer',
      price: 24.99,
      quantity: 1,
      image: 'https://example.com/images/desk-organizer.jpg',
    },
    {
      id: 7,
      name: '4K Monitor',
      price: 349.99,
      quantity: 1,
      image: 'https://example.com/images/monitor.jpg',
    },
    {
      id: 8,
      name: 'Portable Power Bank',
      price: 19.99,
      quantity: 1,
      image: 'https://example.com/images/power-bank.jpg',
    },
    {
      id: 9,
      name: 'Gaming Keyboard',
      price: 89.99,
      quantity: 1,
      image: 'https://example.com/images/gaming-keyboard.jpg',
    },
    {
      id: 10,
      name: 'LED Desk Lamp',
      price: 39.99,
      quantity: 1,
      image: 'https://example.com/images/desk-lamp.jpg',
    },
  ];
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
        {shoppingCart.map((item, idx) => (
          <CartListItem key={idx}>
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
