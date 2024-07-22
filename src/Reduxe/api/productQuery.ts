import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

// export function prepareHeaders(headers: Headers): Headers {
//   const token = Cookies.get('access_token');
//   if (token) {
//     headers.set('authorization', `Bearer ${token}`);
//   }
//   return headers;
// }

export const productQuery = createApi({
  reducerPath: 'productQuery',
  baseQuery: async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1/' })(args, api, extraOptions);
    return result;
  },
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () =>'/products',
    }),
  }),
});

export const { useGetProductsQuery} = productQuery;
