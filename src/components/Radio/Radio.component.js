import React from 'react';
import {useEffect, useState} from 'react';
import scalling from '../../config/normalize';
import {Image, Text, TouchableOpacity} from 'react-native';
import images from '../../assets/images';
import {styles} from './Radio.style';

const Radio = ({
  label = '',
  handleCheck = () => {},
  initialValue,
  textStyle = {},
}) => {
  const [checked, setChecked] = useState(initialValue || false);

  const handleSelect = () => {
    setChecked(prev => {
      handleCheck(!prev);
      return !prev;
    });
  };

  useEffect(() => {
    setChecked(initialValue);
  }, [initialValue]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleSelect}
      activeOpacity={0.9}>
      <Image
        source={checked ? images.radioButton : images.radioButtonEmpty}
        resizeMode="contain"
        style={{width: scalling.moderateScale(18)}}
      />

      <Text style={styles.text} {...textStyle}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Radio;
