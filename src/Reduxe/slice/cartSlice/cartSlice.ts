import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  product: object;
  qty: number;
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.cartItems.find((item) => {
        return item.product.id === action.payload.id;
      });
      if (itemExists) {
        itemExists.qty++;
      } else {
        const product = action.payload;
        return {
          ...state,
          cartItems: [...state.cartItems, { product, qty: 1 }],
        };
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.product.id !== action.payload.id
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default cartSlice.reducer;
