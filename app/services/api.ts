import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.fxratesapi.com';

const api = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: () => ({}),
  keepUnusedDataFor: 600,
});

export {api};
