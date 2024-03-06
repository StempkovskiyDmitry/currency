import React from 'react';
import {useAppDispatch, useAppSelector} from '#hooks/redux';
import {ScalableStyles} from '#services/StyleSheet';
import {Icon} from '#ui/Icon';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootRoutes} from '#navigators/types';
import {setFrom, setTo} from '#store/App';
import {Select} from './Select';

interface ISwaper {
  style?: StyleProp<ViewStyle>;
}

export const Swaper = ({style}: ISwaper) => {
  const {from, to} = useAppSelector(store => store.app);
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation();

  const swap = () => {
    dispatch(setFrom(to));
    dispatch(setTo(from));
  };
  return (
    <View style={[[styles.wrapper, StyleSheet.flatten(style)]]}>
      <Select
        label="From:"
        value={from}
        onPress={() => {
          navigate(RootRoutes.CurrencySelect, {
            onSelectCurrency: value => dispatch(setFrom(value)),
            selectItem: from,
          });
        }}
      />

      <TouchableOpacity style={styles.swap} onPress={swap}>
        <Icon name="ArrowsLeftRight" />
      </TouchableOpacity>

      <Select
        label="To:"
        value={to}
        onPress={() => {
          navigate(RootRoutes.CurrencySelect, {
            onSelectCurrency: value => dispatch(setTo(value)),
            selectItem: to,
          });
        }}
      />
    </View>
  );
};

const styles = ScalableStyles.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  swap: {
    marginHorizontal: 16,
    padding: 12,
  },
});
