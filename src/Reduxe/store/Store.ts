import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../slice/productSlice/productSlice'
import { productQuery } from '../api/productQuery'

export const store = configureStore({
  reducer: {
    product: productReducer,
    [productQuery.reducerPath]: productQuery.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productQuery.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;