import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../store/Store';

export const cart = (state: RootState) => state.cart;
export const cartItems = createSelector(cart, (state) => state?.cartItems);
