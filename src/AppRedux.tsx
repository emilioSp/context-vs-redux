import React from 'react';
import './App.css';
import {ButtonsRedux} from './ButtonsRedux';
import {Provider} from 'react-redux';
import {store} from './store';
import {CounterRedux} from './CounterRedux';
import {RandomRedux} from './RandomRedux';

function AppRedux() {
  console.log('AppRedux');

  return (
    <Provider store={store}>
      <ButtonsRedux />
      <CounterRedux />
      <RandomRedux />
    </Provider>
  );
}

export default AppRedux;
