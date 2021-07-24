import { createAction, props } from '@ngrx/store';

export const createProduct = createAction(
  '[Product Page] add ProductDetails',
  props<{ productName: string; price: number }>()
);
