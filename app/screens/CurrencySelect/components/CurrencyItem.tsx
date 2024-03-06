import {ICurrenncy} from '#models/Currency';
import {ScalableStyles} from '#services/StyleSheet';
import {Image, Text, Icon} from '#ui';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';

interface ICurrencyItem {
  value: ICurrenncy;
  activeItem?: ICurrenncy;
  onPress: () => void;
}

export const CurrencyItem = ({value, onPress, activeItem}: ICurrencyItem) => {
  const isActiveItem = activeItem?.code === value.code;
  const {goBack} = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.wrapper, isActiveItem && styles.activeItem]}
      onPress={() => {
        onPress();
        goBack();
      }}>
      <View style={styles.info}>
        <Image style={styles.flag} source={{uri: value.flagSrc}} />
        <Text numberOfLines={1} style={styles.text}>
          {value.code} - {value.name}
        </Text>
      </View>
      <Icon name={!isActiveItem ? 'Radio' : 'RadioChecked'} />
    </TouchableOpacity>
  );
};

const styles = ScalableStyles.create({
  wrapper: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  activeItem: {
    backgroundColor: '#DEDEDE',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    flex: 1,
    marginRight: 10,
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 8,
    borderRadius: 4,
  },
});
