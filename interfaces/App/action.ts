export type ActionType = 'app/LOGIN' | 'app/LOGOUT';
export interface Action {
  type: ActionType;
  payload?: any;
}

export interface Actions {
  login: () => { type: 'app/LOGIN' };
  logout: () => { type: 'app/LOGOUT' };
}
