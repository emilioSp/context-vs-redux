import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from './store';

export const RandomRedux: React.FC = () => {
  console.log('  RandomRedux');
  const randomValue = useSelector((state: RootState) => state.randomReducer.random);
  return <div>random: {randomValue}</div>
};