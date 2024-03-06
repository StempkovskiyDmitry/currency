import {Dimensions, Platform, StyleSheet} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const IS_IOS = Platform.OS === 'ios';

export const Colors = {
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  black: '#393939',
  gray: '#F5F5F5',
  darkGray: '#DEDEDE',
};

export const shadow = StyleSheet.create({
  style: {
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowRadius: 2.22,
    shadowOpacity: 0.22,
  },
}).style;
