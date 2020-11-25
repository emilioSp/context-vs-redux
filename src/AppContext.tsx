import React, {useReducer} from 'react';
import './App.css';
import { Buttons } from './Buttons';
import { Counter } from './Counter';
import { Random } from './Random';
import {counterReducer, randomReducer} from './reducers';
import {CounterContext, CounterDispatchContext} from './contexts';
import {RandomContext, RandomDispatchContext} from './contexts';


function AppContext() {
  console.log('AppContext');
  const [counter, dispatchCounter] = useReducer(counterReducer, 0);
  const [random, dispatchRandom] = useReducer(randomReducer, 0.111);

  return (
    <>
      <CounterDispatchContext.Provider value={dispatchCounter}>
        <RandomDispatchContext.Provider value={dispatchRandom}>
          <Buttons />
        </RandomDispatchContext.Provider>
      </CounterDispatchContext.Provider>
      <CounterContext.Provider value={counter}>
        <Counter />
      </CounterContext.Provider>
      <RandomContext.Provider value={random}>
        <Random />
      </RandomContext.Provider>
    </>
  );
}

export default AppContext;
