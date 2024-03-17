import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  greeting: {marginBottom: 20},
  greetingText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  bookFlightCard: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 12,
    gap: 8,
    width: '100%',
  },
  bookFlightCardHeader: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    padding: 12,
  },
  bookFlightCardHeaderText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  fromTo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  fromToText: {color: 'black', fontWeight: 'bold', fontSize: 20},
  datePicker: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  datePickerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  searchFlight: {
    padding: 12,
    backgroundColor: '#fc790d',
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderTopWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  searchFlightText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 16,
  },
  textColor: {
    color: 'black',
  },
  errorColor: {color: 'red'},
  extraStyle: {color: 'grey', fontSize: 16},
  subHeaderRight:{flexDirection: 'row', alignItems: 'center'}
});

export default styles;
