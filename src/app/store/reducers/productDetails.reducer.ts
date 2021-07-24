import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { User } from '../models/user';
import * as productActions from '../actions/product.action';
import { Product } from '../models/product';

export interface productState {
  productList: Product[];
}

export const initialState: productState = {
  productList: [{ productName: 'HP', price: 45000 }],
};

const productDetailsReducer = createReducer(
  initialState,
  on(productActions.createProduct, (state, action) => ({
    ...state,
    productList: [
      ...state.productList,
      { productName: action.productName, price: action.price },
    ],
  }))
);

export function productReducer(
  state: productState | undefined,
  action: Action
) {
  return productDetailsReducer(state, action);
}

export const getProductState = createFeatureSelector<productState>('product');
export const selectProductList = createSelector(
  getProductState,
  (state: productState) => state.productList
);

// export const selectProduct = (state: productState) => state.productList;
