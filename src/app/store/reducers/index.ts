import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

import { environment } from '../../../environments/environment';

import { productState, productReducer } from './productDetails.reducer';
import { UserState, userReducer } from './userDetails.reducer';

export interface AppState {
  user: UserState;
  // product: productState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];

export const selectUser = (state: AppState) => state.user;
//export const getProductState = createFeatureSelector<productState>('product');
