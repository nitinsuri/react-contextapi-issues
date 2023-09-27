import React from 'react';

export default function Events() {
  function lookUnderTheHood() {
    console.log('First console log.');
    setTimeout(() => {
      console.log('Second conole log');
    });
    const p = new Promise((resolve, reject) => {
      resolve('Third console log.');
    }).then((val) => {
      console.log(val);
    });
    console.log('Last console log.');
  }
  lookUnderTheHood();
  return (
    <>
      <p>Look under the hood</p>
    </>
  );
}
