import {
  Dimensions,
  ImageStyle,
  PixelRatio,
  TextStyle,
  ViewStyle,
  StyleSheet as _StyleSheet,
} from 'react-native';

type StylesScalable = ViewStyle | TextStyle | ImageStyle;

type StylesIgnoreScaling = {
  [P in keyof StylesScalable]: string | number;
};

type NamedStyles<T> = {
  [P in keyof T]: StylesScalable | StylesIgnoreScaling;
};

const {height, width} = Dimensions.get('window');

const designWidth: number = 393;
const designHeight: number = 852;

const factorWidth = width / designWidth;
const factorHeight = height / designHeight;
const factorAverage = (factorWidth + factorHeight) / 2;

export class ScalableStyles {
  static w(n: number, degree = 1) {
    return PixelRatio.roundToNearestPixel(Math.pow(factorWidth, degree) * n);
  }

  static h(n: number, degree = 1) {
    return PixelRatio.roundToNearestPixel(Math.pow(factorHeight, degree) * n);
  }

  static wh(n: number, degree = 1) {
    return PixelRatio.roundToNearestPixel(Math.pow(factorAverage, degree) * n);
  }

  static __modify(obj: any) {
    const getProp = (o: any, withFactorAverage = false) => {
      for (let prop in o) {
        if (typeof o[prop] === 'object') {
          getProp(o[prop], !!o[prop]?.useAverageFactor);
        } else {
          if (typeof o[prop] !== 'string') {
            switch (prop) {
              case 'useAverageFactor':
                delete o[prop];
                break;
              case 'lineHeight':
              case 'height':
              case 'paddingVertical':
              case 'paddingTop':
              case 'paddingBottom':
              case 'marginVertical':
              case 'marginTop':
              case 'marginBottom':
              case 'borderBottomLeftRadius':
              case 'borderBottomRighRadius':
              case 'borderTopLeftRadius':
              case 'borderTopRightRadius':
              case 'top':
              case 'bottom':
                if (!withFactorAverage) {
                  o[prop] = this.h(o[prop]);
                } else {
                  o[prop] = this.wh(o[prop]);
                }
                break;
              case 'paddingHorizontal':
              case 'width':
              case 'paddingLeft':
              case 'paddingRight':
              case 'marginHorizontal':
              case 'marginLeft':
              case 'marginRight':
              case 'right':
              case 'left':
              case 'minWidth':
                if (!withFactorAverage) {
                  o[prop] = this.w(o[prop]);
                } else {
                  o[prop] = this.wh(o[prop]);
                }
                break;
              case 'square':
                o.width = this.wh(o[prop]);
                o.height = this.wh(o[prop]);
                delete o[prop];
                break;
              case 'borderRadius':
                o[prop] = this.wh(o[prop]);
            }
          } else {
            if (!isNaN(o[prop])) {
              if (prop !== 'fontWeight') {
                o[prop] = Number(o[prop]);
              }
            }
          }
        }
      }
    };

    getProp(obj);

    return obj;
  }

  static create<T extends NamedStyles<T> | NamedStyles<any>>(
    obj: T | NamedStyles<T>,
  ) {
    return _StyleSheet.create(this.__modify(obj)) as T;
  }
}
