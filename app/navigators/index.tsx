import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootRoutes, RootStackParamList} from './types';
import {CurrencyConversion, CurrencySelect} from '#screens';
import {Header} from '#ui';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={RootRoutes.CurrencyConversion}>
      <Stack.Screen
        component={CurrencyConversion}
        options={{headerShown: false}}
        name={RootRoutes.CurrencyConversion}
      />

      <Stack.Screen
        component={CurrencySelect}
        options={{
          header: props => <Header title="Currency Select" {...props} />,
        }}
        name={RootRoutes.CurrencySelect}
      />
    </Stack.Navigator>
  );
};
