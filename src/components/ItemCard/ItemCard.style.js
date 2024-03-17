import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    gap: 4,
    borderColor: 'grey',
  },
  secondView: {flexDirection: 'row', gap: 12},
  text: {fontSize: 16, color: 'black'},
  from: {minWidth: '20%', justifyContent: 'center'},
  to: {minWidth: '20%', marginLeft: 8},
  timeText: {fontWeight: 'bold', color: 'black', fontSize: 20},
  priceText: {fontWeight: 'bold', color: 'black', fontSize: 24},
  seats: {color: 'green'},
  money: {minWidth: '25%', alignItems: 'center'},
  textAlignmnet: {textAlign: 'center', color: 'black'},
  strokeWidth: {
    height: 2,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 2,
  },
  viewWidth: {minWidth: '20%'},
  textColor: {color: 'black'},
});

export default styles;
