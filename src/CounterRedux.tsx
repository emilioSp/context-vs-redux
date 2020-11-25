import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from './store';

export const CounterRedux: React.FC = () => {
  console.log('  CounterRedux');
  const counterValue = useSelector((state: RootState) => state.counterReducer);
  return <div>counter: {counterValue}</div>
};