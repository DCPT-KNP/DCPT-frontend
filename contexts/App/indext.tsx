import { createContext, useContext, useReducer } from 'react';
import { getStorageItem, setStorageItem } from 'hooks/useLocalStorage';
import { Action, Actions, Context, ProviderProps, Store } from '@/interfaces/App';

const LOGIN = 'app/LOGIN' as const;
const LOGOUT = 'app/LOGOUT' as const;

const reducer = (previousState: Store, action: Action) => {
  const { type } = action;

  if (type === 'app/LOGIN') {
    const newState: Store = {
      ...previousState,
      isLoggedIn: true
    };

    return newState;
  } else if (type === 'app/LOGOUT') {
    const newState: Store = {
      ...previousState,
      isLoggedIn: false
    };

    setStorageItem('accessToken', '');

    return newState;
  }

  return previousState;
};

const AppContext = createContext<Context>({
  store: {
    isLoggedIn: false
  },
  dispatch: () => undefined
});

const AppProvider = ({ children, initialStore }: ProviderProps) => {
  const token = getStorageItem('accessToken', '');
  const [store, dispatch] = useReducer(reducer, {
    ...initialStore,
    isLoggedIn: token.length > 0
  });

  return (
    <AppContext.Provider value={{ store, dispatch }}>{children}</AppContext.Provider>
  );
};

const actions: Actions = {
  login: () => ({ type: LOGIN }),
  logout: () => ({ type: LOGOUT })
};

export { AppContext, AppProvider, actions };

export default function useAppContext() {
  return useContext(AppContext);
}
