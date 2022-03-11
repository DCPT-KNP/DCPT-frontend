import React from 'react';
import { Action } from './action';
import { Store } from './store';

export interface Context {
  store: Store;
  dispatch: React.Dispatch<Action>;
}

export interface ProviderProps {
  children: React.ReactNode;
  initialStore: Store;
}
