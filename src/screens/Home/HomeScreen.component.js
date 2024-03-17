import React, {useState} from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import styles from './HomeScreen.style';
import SvgHandler from '../../assets/svgs/SvgHandler';
import {svgXml} from '../../assets/svgs/list';
import {useNavigation} from '@react-navigation/native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {formatDateToDayMonth} from '../../utils/commonUtil';
import { useSelector } from 'react-redux';

const Home = () => {
  const [from, setFrom] = useState('Hisar');
  const [to, setTo] = useState('Delhi');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const routeData = useSelector(state => state.homeSlice);
  console.log("🚀 ~ Home ~ routeData:", routeData)
  

  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate('Search', {from, to, selectedDate});
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setSelectedDate(date);
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
        <View style={styles.fromTo}>
          <Pressable onPress={onPressFrom}>
            <Text>From:</Text>
            <Text style={styles.fromToText}>{routeData.origin}</Text>
          </Pressable>
          <Pressable onPress={onPressTo}>
            <Text>To:</Text>
            <Text style={styles.fromToText}>{routeData.destination}</Text>
          </Pressable>
        </View>
        <TouchableOpacity onPress={showDatePicker} style={styles.datePicker}>
          <Text style={styles.datePickerText}>
            📅 {formatDateToDayMonth(selectedDate)}
          </Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <TouchableOpacity style={styles.searchFlight} onPress={handleClick}>
          <SvgHandler xml={svgXml.search} height={24} width={24} />
          <Text style={styles.searchFlightText}>Search Flights</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
