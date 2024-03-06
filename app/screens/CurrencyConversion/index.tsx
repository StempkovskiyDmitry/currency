import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Input} from '#ui/Input';
import {ScalableStyles} from '#services';
import {Swaper} from './components/Swaper';
import {Text} from '#ui/Text';
import {RootRoutes, RootScreenProps} from '#navigators/types';
import {useAppSelector} from '#hooks/redux';
import {useLazyConvertQuery} from '#services/models/rates';
import moment from 'moment';

export const CurrencyConversion: React.FC<
  RootScreenProps<RootRoutes.CurrencyConversion>
> = () => {
  const [amount, setAmount] = useState('0');
  const [convert, setConvert] = useState(0);
  const {to, from} = useAppSelector(store => store.app);
  const [lazyConvertQuery] = useLazyConvertQuery();

  const convertAmount = async () => {
    try {
      const date = new Date();
      date.setDate(date.getDate() - 1);
      const response = await lazyConvertQuery({
        from: from.code,
        to: to.code,
        amount: +amount,
        date: moment(date).format('YYYY-MM-DD'),
      }).unwrap();
      setConvert(+response.result.toFixed(2));
    } catch (error) {}
  };

  useEffect(() => {
    convertAmount();
  }, [amount, to]);

  return (
    <View style={styles.wrapper}>
      <Swaper style={styles.swaper} />
      <Input
        keyboardType="numeric"
        label="Amount:"
        value={amount}
        onChangeText={setAmount}
      />
      <Text style={styles.currency}>
        {amount}
        {from.symbol} =
      </Text>
      <Text style={styles.currencyConvert}>
        {convert} {to.symbol}
      </Text>
    </View>
  );
};

const styles = ScalableStyles.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  swaper: {
    marginBottom: 16,
  },
  currency: {
    marginTop: 24,
    marginBottom: 4,
    fontSize: 16,
  },
  currencyConvert: {
    fontSize: 42,
  },
});
