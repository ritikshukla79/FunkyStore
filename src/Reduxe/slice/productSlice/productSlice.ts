import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products :[]
};

export const productSlice = createSlice({
  name: 'product',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
     setAllProducts: (state, action) => {
      const products = action.payload;
      return {...state, products: products};
  },
  }
})

export const {setAllProducts} = productSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default productSlice.reducer