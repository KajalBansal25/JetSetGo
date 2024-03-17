import {StyleSheet} from 'react-native';
import scalling from '../../config/normalize';

const {normalize, widthScale, heightScale} = scalling;

export const styles = StyleSheet.create({
  modal: {flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)'},

  subContainer: {
    backgroundColor: '#fff',
    marginBottom: 'auto',
    paddingBottom: heightScale(30),
    borderBottomLeftRadius: normalize(32),
    borderBottomRightRadius: normalize(32),
  },
  header: {
    paddingHorizontal: widthScale(20),

    marginTop: 16,
    paddingTop: 12,
  },
  headerContent: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'center',
  },
  text: {
    color: 'black',
    marginLeft: 16,
    fontWeight: 'bold',
    fontSize: 20,
  },
  scrollview: {
    flexGrow: 1,
    paddingHorizontal: widthScale(20),
  },
});
