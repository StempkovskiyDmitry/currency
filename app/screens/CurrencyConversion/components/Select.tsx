import {ScalableStyles} from '#services';

import React from 'react';
import {TouchableOpacity, View, ViewProps} from 'react-native';
import {Icon} from '../../../ui/Icon';
import {Text} from '../../../ui/Text';
import {Image} from '../../../ui/Image';
import {ICurrenncy} from '#models/Currency';

interface ICurrencySelect extends ViewProps {
  label: string;
  onPress: () => void;
  value: ICurrenncy;
}

export const Select = ({label, value, onPress}: ICurrencySelect) => {
  return (
    <View>
      <Text>{label}</Text>
      <TouchableOpacity onPress={onPress} style={styles.select}>
        <Image style={styles.image} source={{uri: value?.flagSrc}} />
        <Text numberOfLines={1}>{value?.code}</Text>
        <Icon style={styles.icon} name="ChevronDown" />
      </TouchableOpacity>
    </View>
  );
};

const styles = ScalableStyles.create({
  select: {
    flexDirection: 'row',
    marginTop: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#DEDEDE',
    borderRadius: 8,
  },
  image: {
    width: 30,
    height: 20,
    borderRadius: 4,
    backgroundColor: 'red',
    marginRight: 8,
    borderWidth: 1,
  },
  icon: {
    marginLeft: 17.5,
  },
});
