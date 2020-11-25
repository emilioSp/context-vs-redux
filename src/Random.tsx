import React, {useContext} from 'react';
import {RandomContext} from './contexts';

export const Random: React.FC = React.memo(() => {
  console.log('  Random');
  const randomValue = useContext(RandomContext);
  return <div>random: {randomValue}</div>
})