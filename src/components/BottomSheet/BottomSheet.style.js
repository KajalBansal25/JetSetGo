import {StyleSheet} from 'react-native';
import scalling from '../../config/normalize';

const {normalize, widthScale, heightScale} = scalling;

export const styles = StyleSheet.create({
  modal: {flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)'},
  subContainer: {
    backgroundColor: '#fff',
    marginTop: 'auto',
    paddingTop: heightScale(30),
    borderTopLeftRadius: normalize(32),
    borderTopRightRadius: normalize(32),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthScale(20),
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
    marginBottom: 12,
    paddingBottom: 12,
  },
  pressable: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
  },
  textColor: {color: 'black'},
  scrollview: {
    flexGrow: 1,
    paddingHorizontal: widthScale(20),
  },
  bottom: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
    padding: 12,
  },
  clear: {
    backgroundColor: '#f3f3f3',
    padding: 12,
    borderRadius: 12,
    minWidth: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginRight: 12,
  },
  apply: {
    backgroundColor: 'rgb(182, 125, 186)',
    padding: 12,
    borderRadius: 12,
    minWidth: '30%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
});
