import {ICurrenncy} from '#models/Currency';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type InitStateType = {
  currencyList: ICurrenncy[];
  from: ICurrenncy;
  to: ICurrenncy;
};

const initialState: InitStateType = {
  currencyList: [],
  from: {
    name: 'USD',
    symbol: '$',
    symbolNative: '',
    decimalDigits: 1,
    rounding: 1,
    code: '',
    namePlural: '',
    countryCodeISO2: '',
    flagSrc: '',
  },
  to: {
    name: 'USD',
    symbol: '$',
    symbolNative: '',
    decimalDigits: 1,
    rounding: 1,
    code: '',
    namePlural: '',
    countryCodeISO2: '',
    flagSrc: '',
  },
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCurrencyList: (state, action: PayloadAction<ICurrenncy[]>) => {
      state.currencyList = action.payload;
    },
    setFrom: (state, action: PayloadAction<ICurrenncy>) => {
      state.from = action.payload;
    },
    setTo: (state, action: PayloadAction<ICurrenncy>) => {
      state.to = action.payload;
    },
  },
});

export const {setCurrencyList, setFrom, setTo} = slice.actions;
export default slice.reducer;
