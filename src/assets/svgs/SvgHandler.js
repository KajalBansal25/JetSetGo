import React from 'react';
import {View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import scaling from '../../config/normalize';

const SvgHandler = ({xml, style, width, height, isFullwidth = false}) => {
  return (
    <View>
      <SvgXml
        xml={xml}
        style={style}
        width={
          isFullwidth
            ? '100%'
            : scaling.widthScale(width) || scaling.widthScale(14)
        }
        height={scaling.heightScale(height) || scaling.heightScale(14)}
      />
    </View>
  );
};
export default SvgHandler;
