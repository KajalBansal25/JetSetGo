import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
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
  subHeaderRight: {flexDirection: 'row', alignItems: 'center'},
  marginStyle: {marginBottom: 12},
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e3e3e3',
  },
  filter: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sort: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sortText: {marginLeft: 8, color: 'black'},
  line: {height: 40, borderWidth: 1},
  noData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
