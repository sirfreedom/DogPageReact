import React, {Fragment} from 'react';
import {Provider} from 'react-redux';
//import {store} from './store';
//import {saveState} from './localStorage';

/*
store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
    total: store.getState().total,
    amount: store.getState().amount,
  });
});
*/

const cartItems = [
  {
    id: 1,
    title: 'Samsung',
    price: 799.99,
    img: 'shorturl.at/ajkq9',
    amount: 1,
  },
  {
    id: 2,
    title: 'Google pixel Max',
    price: 399.99,
    img: 'shorturl.at/ajkq9',
    amount: 1,
  },
  {
    id: 3,
    title: 'Xiaomi',
    price: 999.99,
    img: 'shorturl.at/ajkq9',
    amount: 1,
  },
];

const TestReducer1 = props => {
  return (
    <Fragment>
      <p> hola mundo </p>

      <div className="container">
        <div className="child"></div>
        <div className="child"></div>
        <div className="child"></div>
        <div className="child"></div>
        <div className="child"></div>
        <div className="child"></div>
        <div className="child"></div>
        <div className="child"></div>
        <div className="child"></div>
      </div>
    </Fragment>
  );
};

export default TestReducer1;
