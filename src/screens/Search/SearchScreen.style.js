import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    margin: 16,
  },
  headerRight: {
    flex: 1,
    borderRadius: 20,
    marginLeft: 12,
    backgroundColor: '#e3e3e3',
    minHeight: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
  itemContainer: {flex: 1, marginHorizontal: 16, marginTop: 16},
  textColor: {
    color: 'black',
  },
});

export default styles;
