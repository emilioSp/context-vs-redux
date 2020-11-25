type ActionCounter = {
  type: 'increment' | 'decrement';
}

export const counterReducer = (counter: number, action: ActionCounter) => {
  switch (action.type) {
    case 'increment':
      return counter = counter + 1;
      break;
    case 'decrement':
      return counter = counter - 1;
      break;
  }
}

export const randomReducer = () => {
  return Math.random();
}