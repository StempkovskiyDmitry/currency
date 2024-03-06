import React, {useEffect, useState} from 'react';
import {StyleSheet, Image as RNImage} from 'react-native';

import FastImage, {FastImageProps} from 'react-native-fast-image';

export interface IImage extends FastImageProps {
  autoAspectRatio?: boolean;
  style: FastImageProps['style'];
}

export const Image = (props: Partial<IImage>) => {
  const [aspectRatio, setAspectRatio] = useState<number>(1);
  useEffect(() => {
    if (typeof props.source !== 'number' && props.autoAspectRatio) {
      const source =
        typeof props.source === 'object' ? props.source.uri : props.source;
      source &&
        RNImage.getSize(source, (width, height) =>
          setAspectRatio(width / height),
        );
    }
  }, []);

  return (
    <FastImage
      key={aspectRatio}
      {...props}
      style={StyleSheet.flatten([
        props.autoAspectRatio && aspectRatio ? {aspectRatio} : {},
        props.style,
      ])}
    />
  );
};
