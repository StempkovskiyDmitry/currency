import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {RootRoutes, RootScreenProps} from '#navigators/types';
import {Input} from '#ui';
import {ScalableStyles} from '#services/StyleSheet';
import {ICurrenncy} from '#models/Currency';
import {CurrencyItem} from './components/CurrencyItem';

export const currenciesData =
  require('../../../currencies.json') as ICurrenncy[];

export const CurrencySelect: React.FC<
  RootScreenProps<RootRoutes.CurrencySelect>
> = ({route}) => {
  const [search, setSearch] = useState('');
  const [founds, setFounds] = useState<ICurrenncy[]>([]);
  const {onSelectCurrency, selectItem} = route.params;

  useEffect(() => {
    setFounds(
      currenciesData.filter(item =>
        item.code.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
      ),
    );
  }, [search]);

  return (
    <View style={styles.wrapper}>
      <Input value={search} onChangeText={setSearch} iconLeft="TablerSearch" />

      <FlatList
        data={founds.length ? founds : currenciesData}
        keyExtractor={item => item.code}
        showsVerticalScrollIndicator={false}
        style={styles.list}
        renderItem={({item}) => (
          <CurrencyItem
            value={item}
            onPress={() => onSelectCurrency(item)}
            activeItem={selectItem}
          />
        )}
      />
    </View>
  );
};

const styles = ScalableStyles.create({
  wrapper: {
    padding: 20,
    flex: 1,
  },
  list: {
    backgroundColor: '#E7E7E7',
    borderRadius: 8,
    marginTop: 16,
  },
});
