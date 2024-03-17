import {useEffect, useState} from 'react';
import scalling from '../../config/normalize';
import {Image, Text, TouchableOpacity} from 'react-native';
import images from '../../assets/images';

const Checkbox = ({
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
      style={{flexDirection: 'row', alignItems: 'center', gap: 12}}
      onPress={handleSelect}
      activeOpacity={0.9}>
      <Image
        source={checked ? images.checked : images.unChecked}
        resizeMode="contain"
        style={{width: scalling.moderateScale(18)}}
      />
      <Text style={{fontWeight: 'bold'}} {...textStyle}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
