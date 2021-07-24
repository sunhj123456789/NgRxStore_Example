import { createAction, props } from '@ngrx/store';

export const userInformation = createAction(
  '[User Page] UserDetails',
  props<{ name: string; age: number }>()
);
