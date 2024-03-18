import React, {useState} from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import SvgHandler from '../../assets/svgs/SvgHandler';
import {svgXml} from '../../assets/svgs/list';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {selectedDate} from '../../screens/Home/ducks/data/Home.reducer';
import styles from './HomeCard.style';
import {formatDateToDayMonth} from '../../utils/commonUtil';

const HomeCard = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const dispach = useDispatch();

  const routeData = useSelector(state => state.homeSlice);

  const {origin = '', destination = '', date = ''} = routeData;

  const navigation = useNavigation();

  const handleClick = () => {
    if (origin && destination) {
      navigation.navigate('Search');
    }
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    dispach(selectedDate(date.toISOString()));
    hideDatePicker();
  };

  const onPressFrom = () => {
    navigation.navigate('From');
  };
  return (
    <View style={styles.bookFlightCard}>
      <View style={styles.bookFlightCardHeader}>
        <Text style={styles.bookFlightCardHeaderText}>Book flights 🚀</Text>
      </View>
      <Pressable style={styles.fromTo} onPress={onPressFrom}>
        <View>
          <Text style={styles.textColor}>From:</Text>
          <Text style={origin ? styles.fromToText : styles.extraStyle}>
            {origin || 'Select origin'}
          </Text>
        </View>
        <View>
          <Text style={styles.textColor}>To:</Text>
          <Text style={destination ? styles.fromToText : styles.extraStyle}>
            {destination || 'Select destination'}
          </Text>
        </View>
      </Pressable>
      <TouchableOpacity onPress={showDatePicker} style={styles.datePicker}>
        <Text style={styles.datePickerText}>
          📅 {formatDateToDayMonth(date)}
        </Text>
      </TouchableOpacity>
      <DateTimePicker
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        minimumDate={new Date()}
      />
      <TouchableOpacity
        style={styles.searchFlight}
        onPress={handleClick}
        disabled={!origin || !destination}>
        <SvgHandler xml={svgXml.search} height={24} width={24} />
        <Text style={styles.searchFlightText}>Search Flights</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeCard;
