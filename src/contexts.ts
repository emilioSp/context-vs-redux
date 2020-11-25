import React, {Dispatch} from 'react';
export const CounterContext = React.createContext<number | null>(null);
export const RandomContext = React.createContext<number | null>(null);
export const CounterDispatchContext = React.createContext<Dispatch<any>>(() => null);
export const RandomDispatchContext = React.createContext<Dispatch<void>>(() => null);