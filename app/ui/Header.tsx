import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {ScalableStyles} from '#services/StyleSheet';
import {Icon} from './Icon';
import {Text} from './Text';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface IHeader extends NativeStackHeaderProps {
  title: string;
}

export const Header = ({title, ...props}: IHeader) => {
  const instent = useSafeAreaInsets();

  return (
    <View style={[styles.wrapper, {paddingTop: instent.top}]}>
      <TouchableOpacity onPress={props.navigation.goBack}>
        <Icon name="ArrowLeft" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = ScalableStyles.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12,
  },
});
