import {combineReducers, configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment(counter) {
      counter = counter + 1;
      return counter;
    },
    decrement(counter) {
      counter = counter - 1;
      return counter;
    }
  }
})

export const randomSlice = createSlice({
  name: 'random',
  initialState: {
    random: 0.11
  },
  reducers: {
    setRandom(state, action: PayloadAction<number>) {
      state.random = action.payload;
    }
  }
})

const rootReducers = combineReducers({
  counterReducer: counterSlice.reducer,
  randomReducer: randomSlice.reducer
});

export const store = configureStore({
  reducer: rootReducers
})

export type RootState = ReturnType<typeof rootReducers>;