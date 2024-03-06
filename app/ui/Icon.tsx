import React from 'react';

import {SvgProps} from 'react-native-svg';

import ChevronDown from '../theme/assets/icons/ChevronDown.svg';
import ArrowsLeftRight from '../theme/assets/icons/ArrowsLeftRight.svg';
import ArrowLeft from '../theme/assets/icons/ArrowLeft.svg';
import TablerSearch from '../theme/assets/icons/TablerSearch.svg';
import Radio from '../theme/assets/icons/Radio.svg';
import RadioChecked from '../theme/assets/icons/RadioChecked.svg';

const IconFiles = {
  ChevronDown: ChevronDown,
  ArrowsLeftRight: ArrowsLeftRight,
  ArrowLeft: ArrowLeft,
  TablerSearch: TablerSearch,
  Radio: Radio,
  RadioChecked: RadioChecked,
};

export type IconNames = keyof typeof IconFiles;

export interface IIcon extends SvgProps {
  scale: number;
  name: IconNames;
}

export const Icon: React.FC<Partial<IIcon>> = ({
  name = 'ChevronDown',
  scale,
  ...svgProps
}) => {
  const IconComponent = IconFiles[name];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      {...(scale && {
        height: scale,
        width: scale,
      })}
      {...svgProps}
    />
  );
};
