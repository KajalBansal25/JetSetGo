import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  backIconContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    // marginBottom: 24,
    // marginTop:12
  },
  headerRight: {
    // flex: 1,
    borderRadius: 20,
    marginLeft: 12,
    backgroundColor: '#e3e3e3',
    minHeight: 60,
    justifyContent: 'center',
    paddingLeft: 12,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
  },
  list: {flex: 1},
  itemContainer: {
    flex: 1,
    padding: 12,
    borderBottomWidth: 1,
    margin: 8,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#d3d3d3d3',
  },
  gate: {
    borderWidth: 1,
    padding: 16,
    borderRadius: 12,
    marginRight: 16,
    borderColor: '#c3c3c3',
    backgroundColor: '#d3d3d3d3',
  },
  origin: {color: 'black', fontWeight: 'bold', fontSize: 20},
  textColor: {color: 'black'},
});

export default styles;
