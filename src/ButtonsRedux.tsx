import React from 'react';
import {counterSlice, randomSlice, store} from './store';

export const ButtonsRedux: React.FC = () => {
  console.log('  ButtonsRedux');
  return <div>
    <button onClick={() => store.dispatch(counterSlice.actions.increment())}>+</button>
    <button onClick={() => store.dispatch(counterSlice.actions.decrement())}>-</button>
    <button onClick={() => store.dispatch(randomSlice.actions.setRandom(Math.random()))}>update random</button>
  </div>;
};