import {StyleSheet} from 'react-native';
import scalling from '../../config/normalize';

export const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', gap: 12},
  image: {width: scalling.moderateScale(18)},
  text: {fontWeight: 'bold', color: 'black'},
});
