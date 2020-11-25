import React, {useContext} from 'react';
import {CounterDispatchContext, RandomDispatchContext} from './contexts';

export const Buttons: React.FC = React.memo(() => {
  console.log('  Buttons');
  const dispatchCounter = useContext(CounterDispatchContext);
  const dispatchRandom = useContext(RandomDispatchContext);
  return <div>
    <button onClick={() => dispatchCounter({type: 'increment'})}>+</button>
    <button onClick={() => dispatchCounter({type: 'decrement'})}>-</button>
    <button onClick={() => dispatchRandom()}>update random</button>
  </div>;
});