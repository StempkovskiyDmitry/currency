import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import {ScalableStyles} from '#services';
import {Text} from './Text';
import {Icon, IconNames} from './Icon';

interface IInput extends TextInputProps {
  label?: string;
  iconLeft?: IconNames;
}

export const Input = ({label, iconLeft, ...props}: IInput) => {
  return (
    <View>
      {label && <Text>{label}</Text>}
      <View style={styles.wrapperInput}>
        {iconLeft && <Icon style={styles.iconLeft} name={iconLeft} />}
        <TextInput style={styles.input} {...props} />
      </View>
    </View>
  );
};

export const styles = ScalableStyles.create({
  wrapperInput: {
    marginTop: 8,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  iconLeft: {
    marginRight: 8,
  },
  input: {flex: 1},
});
