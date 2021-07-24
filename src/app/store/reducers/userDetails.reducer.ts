import { Action, createFeatureSelector, createReducer, on } from '@ngrx/store';
import { User } from '../models/user';
import * as UserPageActions from '../actions/user.action';

export interface UserState {
  user: User[];
}

export const initialState: UserState = {
  user: [
    {
      name: 'Raj',
      age: 90,
    },
  ],
};
const userDetailsReducer = createReducer(
  initialState,
  on(UserPageActions.userInformation, (state, action) => ({
    ...state,
    user: [...state.user, { name: action.name, age: action.age }],
  }))
);

export function userReducer(state: UserState | undefined, action: Action) {
  return userDetailsReducer(state, action);
}
