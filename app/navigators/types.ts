import {ICurrenncy} from '#models/Currency';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum RootRoutes {
  CurrencyConversion = 'CurrencyConversion',
  CurrencySelect = 'CurrencySelect',
}

export type RootStackParamList = {
  [RootRoutes.CurrencyConversion]: undefined;
  [RootRoutes.CurrencySelect]: {
    onSelectCurrency: (value: ICurrenncy) => void;
    selectItem?: ICurrenncy;
  };
};

export type RootScreenProps<RouteName extends RootRoutes> =
  NativeStackScreenProps<RootStackParamList, RouteName>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
