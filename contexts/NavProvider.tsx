import { navList, NavListMetaDataType } from '@/metadata/nav';
import { createContext, ReactNode, useReducer } from 'react';

type NavItem = NavListMetaDataType;

type NavItemSwitchingAction = {
  type: 'SWITCHING';
  payload: {
    key: NavItem['key'];
    current: boolean;
  };
};

type NavDispatchType = NavItemSwitchingAction;

export const NavStateContext = createContext<NavItem[]>([]);
export const NavDispatchContext = createContext(undefined);

const initContext: NavItem[] = navList;
const initializer = (init: NavItem[]) => init;

const reducer = (state: NavItem[], action: NavDispatchType) => {
  switch (action.type) {
    case 'SWITCHING':
      return [...state];
    default:
      return [...state];
  }
};

export const NavProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initContext, initializer);
  return (
    <NavDispatchContext.Provider value={dispatch}>
      <NavStateContext.Provider value={state}>{children}</NavStateContext.Provider>
    </NavDispatchContext.Provider>
  );
};
