import React, {ReactNode} from 'react';
import {StyleSheet, TextProps, Text as TextRN} from 'react-native';

import {ScalableStyles} from '#services';

interface IText extends TextProps {
  // fontWeight?: keyof typeof fontWeightMap;
  children?: ReactNode;
}

// const fontWeightMap: {[key in '400' | '600' | '900']: string} = {
//   '400': 'OpenSans-Regular',
//   '600': 'OpenSans-SemiBold',
//   '900': 'OpenSans-Bold',
// };

export const Text = (props: IText) => {
  const {style, ...restProps} = props;

  // const _fontWeight: keyof typeof fontWeightMap =
  //   //@ts-expect-error
  //   (style && style?.fontWeight) || fontWeight;

  return (
    <TextRN
      {...restProps}
      style={StyleSheet.flatten([
        styles.container,
        // {fontFamily: fontWeightMap[_fontWeight]},
        style,
      ])}
    />
  );
};
export const styles = ScalableStyles.create({
  container: {
    color: 'black',
    fontSize: 14,
  },
});
