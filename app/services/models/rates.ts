import {IConvertResponce} from '#models';
import {api} from '../api';

const ratesApi = api.injectEndpoints({
  endpoints: build => ({
    convert: build.query<
      IConvertResponce,
      {from: string; to: string; date: string; amount: number}
    >({
      query: args => ({
        url: `/convert?from=${args.from}&to=${args.to}&date=${args.date}&amount=${args.amount}&format=json`,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {useLazyConvertQuery} = ratesApi;
