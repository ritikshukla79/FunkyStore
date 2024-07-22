import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../store/Store';

export const product = (state: RootState) => state.product;
export const products = createSelector(product, (state) => state?.products);