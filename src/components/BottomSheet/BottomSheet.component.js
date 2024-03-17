import React, {useState} from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import scalling from '../../config/normalize';
import SvgHandler from '../../assets/svgs/SvgHandler';
import {svgXml} from '../../assets/svgs/list';
import Checkbox from '../Checkbox/Checkbox.componnet';
const {normalize, widthScale, heightScale} = scalling;

const origin = [
  {
    id: 1,
    gate: 'A2',
    price: 5000,
    origin: 'Delhi',
    airline: 'IndiGo',
    aircraft: 'Airbus A320',
    duration: '3 hours',
    arrivalTime: '2024-03-15T11:00:00',
    destination: 'Mumbai',
    flightNumber: '6E101',
    departureTime: '2024-03-15T08:00:00',
    seatsAvailable: 120,
  },
  {
    id: 2,
    gate: 'B3',
    price: 6000,
    origin: 'Delhi',
    airline: 'Air India',
    aircraft: 'Boeing 787',
    duration: '3 hours 30 minutes',
    arrivalTime: '2024-03-15T12:30:00',
    destination: 'Bangalore',
    flightNumber: 'AI202',
    departureTime: '2024-03-15T09:00:00',
    seatsAvailable: 100,
  },
  {
    id: 3,
    gate: 'C1',
    price: 5500,
    origin: 'Mumbai',
    airline: 'SpiceJet',
    aircraft: 'Boeing 737',
    duration: '3 hours 30 minutes',
    arrivalTime: '2024-03-15T13:30:00',
    destination: 'Delhi',
    flightNumber: 'SG303',
    departureTime: '2024-03-15T10:00:00',
    seatsAvailable: 90,
  },
  {
    id: 4,
    gate: 'D2',
    price: 4500,
    origin: 'Mumbai',
    airline: 'Vistara',
    aircraft: 'Airbus A320',
    duration: '2 hours 30 minutes',
    arrivalTime: '2024-03-15T13:30:00',
    destination: 'Bangalore',
    flightNumber: 'UK404',
    departureTime: '2024-03-15T11:00:00',
    seatsAvailable: 110,
  },
  {
    id: 5,
    gate: 'A4',
    price: 6500,
    origin: 'Bangalore',
    airline: 'GoAir',
    aircraft: 'Airbus A320',
    duration: '3 hours 30 minutes',
    arrivalTime: '2024-03-15T15:30:00',
    destination: 'Delhi',
    flightNumber: 'G805',
    departureTime: '2024-03-15T12:00:00',
    seatsAvailable: 80,
  },
  {
    id: 6,
    gate: 'B2',
    price: 4000,
    origin: 'Bangalore',
    airline: 'AirAsia',
    aircraft: 'Airbus A320',
    duration: '1 hour 30 minutes',
    arrivalTime: '2024-03-15T14:30:00',
    destination: 'Mumbai',
    flightNumber: 'I505',
    departureTime: '2024-03-15T13:00:00',
    seatsAvailable: 100,
  },
  {
    id: 7,
    gate: 'C3',
    price: 5500,
    origin: 'Delhi',
    airline: 'IndiGo',
    aircraft: 'Airbus A320',
    duration: '3 hours',
    arrivalTime: '2024-03-15T12:30:00',
    destination: 'Chennai',
    flightNumber: '6E107',
    departureTime: '2024-03-15T09:30:00',
    seatsAvailable: 120,
  },
  {
    id: 8,
    gate: 'D4',
    price: 4800,
    origin: 'Mumbai',
    airline: 'Air India',
    aircraft: 'Boeing 737',
    duration: '3 hours',
    arrivalTime: '2024-03-15T14:30:00',
    destination: 'Chennai',
    flightNumber: 'AI208',
    departureTime: '2024-03-15T11:30:00',
    seatsAvailable: 90,
  },
  {
    id: 9,
    gate: 'A6',
    price: 6000,
    origin: 'Bangalore',
    airline: 'SpiceJet',
    aircraft: 'Boeing 737',
    duration: '3 hours',
    arrivalTime: '2024-03-15T16:30:00',
    destination: 'Kolkata',
    flightNumber: 'SG309',
    departureTime: '2024-03-15T13:30:00',
    seatsAvailable: 100,
  },
  {
    id: 10,
    gate: 'B7',
    price: 7000,
    origin: 'Delhi',
    airline: 'Vistara',
    aircraft: 'Airbus A320',
    duration: '3 hours',
    arrivalTime: '2024-03-15T17:00:00',
    destination: 'Kolkata',
    flightNumber: 'UK410',
    departureTime: '2024-03-15T14:00:00',
    seatsAvailable: 120,
  },
  {
    id: 11,
    gate: 'C8',
    price: 6200,
    origin: 'Mumbai',
    airline: 'GoAir',
    aircraft: 'Airbus A320',
    duration: '3 hours',
    arrivalTime: '2024-03-15T18:00:00',
    destination: 'Kolkata',
    flightNumber: 'G811',
    departureTime: '2024-03-15T15:00:00',
    seatsAvailable: 80,
  },
  {
    id: 12,
    gate: 'D1',
    price: 5400,
    origin: 'Chennai',
    airline: 'AirAsia',
    aircraft: 'Airbus A320',
    duration: '3 hours 30 minutes',
    arrivalTime: '2024-03-15T13:30:00',
    destination: 'Delhi',
    flightNumber: 'I513',
    departureTime: '2024-03-15T10:00:00',
    seatsAvailable: 100,
  },
  {
    id: 13,
    gate: 'A3',
    price: 5300,
    origin: 'Chennai',
    airline: 'IndiGo',
    aircraft: 'Airbus A320',
    duration: '3 hours',
    arrivalTime: '2024-03-15T15:00:00',
    destination: 'Mumbai',
    flightNumber: '6E113',
    departureTime: '2024-03-15T12:00:00',
    seatsAvailable: 110,
  },
  {
    id: 14,
    gate: 'B5',
    price: 5500,
    origin: 'Chennai',
    airline: 'Air India',
    aircraft: 'Boeing 787',
    duration: '3 hours',
    arrivalTime: '2024-03-15T16:30:00',
    destination: 'Bangalore',
    flightNumber: 'AI216',
    departureTime: '2024-03-15T13:30:00',
    seatsAvailable: 90,
  },
  {
    id: 15,
    gate: 'C4',
    price: 5900,
    origin: 'Kolkata',
    airline: 'SpiceJet',
    aircraft: 'Boeing 737',
    duration: '3 hours 30 minutes',
    arrivalTime: '2024-03-15T14:30:00',
    destination: 'Delhi',
    flightNumber: 'SG319',
    departureTime: '2024-03-15T11:00:00',
    seatsAvailable: 100,
  },
  {
    id: 16,
    gate: 'D6',
    price: 6100,
    origin: 'Kolkata',
    airline: 'Vistara',
    aircraft: 'Airbus A320',
    duration: '3 hours',
    arrivalTime: '2024-03-15T15:30:00',
    destination: 'Mumbai',
    flightNumber: 'UK424',
    departureTime: '2024-03-15T12:30:00',
    seatsAvailable: 120,
  },
  {
    id: 17,
    gate: 'A7',
    price: 6800,
    origin: 'Kolkata',
    airline: 'GoAir',
    aircraft: 'Airbus A320',
    duration: '3 hours 30 minutes',
    arrivalTime: '2024-03-15T17:30:00',
    destination: 'Bangalore',
    flightNumber: 'G827',
    departureTime: '2024-03-15T14:00:00',
    seatsAvailable: 80,
  },
  {
    id: 18,
    gate: 'B8',
    price: 5200,
    origin: 'Delhi',
    airline: 'AirAsia',
    aircraft: 'Airbus A320',
    duration: '3 hours',
    arrivalTime: '2024-03-15T18:30:00',
    destination: 'Chennai',
    flightNumber: 'I529',
    departureTime: '2024-03-15T15:30:00',
    seatsAvailable: 90,
  },
  {
    id: 19,
    gate: 'C9',
    price: 5400,
    origin: 'Mumbai',
    airline: 'IndiGo',
    aircraft: 'Airbus A320',
    duration: '3 hours',
    arrivalTime: '2024-03-15T19:00:00',
    destination: 'Chennai',
    flightNumber: '6E139',
    departureTime: '2024-03-15T16:00:00',
    seatsAvailable: 100,
  },
  {
    id: 20,
    gate: 'D10',
    price: 6200,
    origin: 'Bangalore',
    airline: 'Air India',
    aircraft: 'Boeing 787',
    duration: '3 hours 30 minutes',
    arrivalTime: '2024-03-15T20:30:00',
    destination: 'Kolkata',
    flightNumber: 'AI230',
    departureTime: '2024-03-15T17:00:00',
    seatsAvailable: 110,
  },
];

const BottomSheet = ({visible, onClose, filterCriteria, data}) => {
  const [selectedAirlines, setSelectedAirlines] = useState({});

  const handleCheck = item => {
    setSelectedAirlines(prevSelected => ({
      ...prevSelected,
      [item]: !prevSelected[item],
    }));
  };

  const handleClear = () => {
    setSelectedAirlines({});
    filterCriteria([]);
  };

  const handleSelectAll = () => {
    const allSelected = data.reduce((acc, item) => {
      acc[item] = true;
      return acc;
    }, {});
    setSelectedAirlines(allSelected);
  };

  const applyFilter = () => {
    const selected = Object.keys(selectedAirlines).filter(
      key => selectedAirlines[key],
    );
    filterCriteria(selected);
    onClose();
  };

  return (
    <Modal visible={visible} transparent={true}>
      <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 'auto',
            paddingTop: heightScale(30),
            borderTopLeftRadius: normalize(32),
            borderTopRightRadius: normalize(32),
          }}>
          <View style={{}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: widthScale(20),
                borderBottomWidth: 1,
                borderColor: '#e3e3e3',
                marginBottom: 12,
                paddingBottom: 12,
              }}>
              <Pressable
                onPress={handleSelectAll}
                style={{
                  backgroundColor: 'green',
                  padding: 10,
                  borderRadius: 8,
                }}>
                <Text style={{color:"black"}}>select all</Text>
              </Pressable>
              <Pressable onPress={onClose}>
                <SvgHandler xml={svgXml.cross} height={20} width={20} />
              </Pressable>
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                flexGrow: 1,
                paddingHorizontal: widthScale(20),
              }}>
              {data.map((item, index) => (
                <Checkbox
                  key={index}
                  label={item}
                  handleCheck={() => handleCheck(item)}
                  initialValue={!!selectedAirlines[item]}
                />
              ))}
            </ScrollView>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderTopWidth: 1,
              borderColor: '#e3e3e3',
              padding: 12,
            }}>
            <TouchableOpacity
              onPress={handleClear}
              style={{
                backgroundColor: '#f3f3f3',
                padding: 12,
                borderRadius: 12,
                minWidth: '30%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color:"black"}}>Clear</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgb(182, 125, 186)',
                padding: 12,
                borderRadius: 12,
                minWidth: '30%',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
              onPress={applyFilter}>
              <SvgHandler xml={svgXml.filter} height={32} width={32} />
              <Text style={{color:"black"}}>Apply filters</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default BottomSheet;
