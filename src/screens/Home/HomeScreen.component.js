import React, {useEffect, useState} from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import styles from './HomeScreen.style';
import SvgHandler from '../../assets/svgs/SvgHandler';
import {svgXml} from '../../assets/svgs/list';
import {useNavigation} from '@react-navigation/native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {formatDateToDayMonth} from '../../utils/commonUtil';
import {useDispatch, useSelector} from 'react-redux';
import {selectedDate} from './ducks/data/Home.reducer';

const Home = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [err, setErr] = useState('');

  const dispach = useDispatch();

  const routeData = useSelector(state => state.homeSlice);

  const {origin = '', destination = '', date = ''} = routeData;

  const navigation = useNavigation();

  useEffect(() => {}, [err]);

  const handleClick = () => {
    if (origin && destination) {
      setErr('');
      navigation.navigate('Search');
    } else {
      setErr(true);
    }
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    dispach(selectedDate(date));
    hideDatePicker();
  };

  const onPressFrom = () => {
    navigation.navigate('From');
  };

  const onPressTo = () => {
    navigation.navigate('From');
  };

  const formatDate = currentDate => {
    return currentDate.toLocaleDateString('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SvgHandler xml={svgXml.profile} height={32} width={32} />
        <SvgHandler xml={svgXml.hamburger} height={24} width={24} />
      </View>
      <View style={styles.greeting}>
        <Text style={styles.greetingText}>Hello UserX!</Text>
      </View>
      <View style={styles.bookFlightCard}>
        <View style={styles.bookFlightCardHeader}>
          <Text style={styles.bookFlightCardHeaderText}>Book flights 🚀</Text>
        </View>
        <Pressable style={styles.fromTo} onPress={onPressFrom}>
          <View>
            <Text style={styles.textColor}>From:</Text>
            <Text
              style={
                origin ? styles.fromToText : {color: 'grey', fontSize: 16}
              }>
              {origin || 'Select origin'}
            </Text>
          </View>
          <View>
            <Text style={styles.textColor}>To:</Text>
            <Text
              style={
                destination ? styles.fromToText : {color: 'grey', fontSize: 16}
              }>
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
        <TouchableOpacity style={styles.searchFlight} onPress={handleClick}>
          <SvgHandler xml={svgXml.search} height={24} width={24} />
          <Text style={styles.searchFlightText}>Search Flights</Text>
        </TouchableOpacity>
      </View>
      {err && (
        <View>
          <Text style={{color: 'red'}}>
            Plz select origin,destination first
          </Text>
        </View>
      )}
    </View>
  );
};

export default Home;
