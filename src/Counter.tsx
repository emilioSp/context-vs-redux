import React, {useContext} from 'react';
import {CounterContext} from './contexts';

export const Counter: React.FC = React.memo(() => {
  console.log('  Counter');
  const counterValue = useContext(CounterContext);
  return <div>counter: {counterValue}</div>
});