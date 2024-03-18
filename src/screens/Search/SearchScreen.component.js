import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './SearchScreen.style';
import SvgHandler from '../../assets/svgs/SvgHandler';
import {svgXml} from '../../assets/svgs/list';
import {useNavigation} from '@react-navigation/native';
import {formatDateToDayMonth} from '../../utils/commonUtil';
import ItemCard from '../../components/ItemCard/ItemCard.component';
import useFetchFlightList from './ducks/customHook';
import {useSelector} from 'react-redux';
import BottomSheet from '../../components/BottomSheet/BottomSheet.component';
import UpperModal from '../../components/UpperModal/UpperModal.component';

const popularAirlines = [
  'IndiGo',
  'Air India',
  'AirAsia',
  'GoAir',
  'Vistara',
  'SpiceJet',
];

const sortOrder = ['Low to High', 'High to Low'];

const Search = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const handleBack = () => {
    navigation.goBack();
  };
  useFetchFlightList();

  const seacrhScreenData = useSelector(state => state.homeSlice);
  const {loading, err, response, destination, origin, date} = seacrhScreenData;
  const [filteredData, setFilteredData] = useState(response);
  const [sortDirection, setSortDirection] = useState('Low to High');

  const isToday = someDate => {
    const today = new Date();
    return (
      someDate.getDate() === today.getDate() &&
      someDate.getMonth() === today.getMonth() &&
      someDate.getFullYear() === today.getFullYear()
    );
  };

  useEffect(() => {
    const selectedDate = new Date(date);

    const matchingFlights = response.filter(flight => {
      const flightDepartureDate = new Date(flight.departureTime);
      return (
        flight.origin === origin &&
        flight.destination === destination &&
        (isToday(selectedDate) ||
          flightDepartureDate.toDateString() === selectedDate.toDateString())
      );
    });

    setFilteredData(matchingFlights);
  }, [response, origin, destination, date]);

  const handleSort = () => {
    setData(sortOrder);
    setShowModal(true);
  };

  const filterCriteria = useCallback(
    (selectedFilters, sorting) => {
      let filtered = filteredData.filter(
        flight =>
          selectedFilters.length === 0 ||
          selectedFilters.includes(flight.airline),
      );

      if (sorting) {
        filtered.sort((a, b) => {
          return sorting === 'Low to High'
            ? a.price - b.price
            : b.price - a.price;
        });
      }

      setFilteredData(filtered);
      if (sortDirection !== sorting) {
        setSortDirection(sorting);
      }
    },
    [filteredData, sortDirection],
  );

  return (
    <>
      {loading ? (
        <View style={styles.mainContainer}>
          <ActivityIndicator color="green" size="large" />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.backIconContainer}>
            <TouchableOpacity onPress={handleBack}>
              <SvgHandler xml={svgXml.backIcon} height={32} width={32} />
            </TouchableOpacity>

            <View style={styles.headerRight}>
              <View style={styles.subHeaderRight}>
                <Text style={styles.headerText}>{origin}</Text>
                <SvgHandler xml={svgXml.rightArrow} height={32} width={32} />
                <Text style={styles.headerText}>{destination}</Text>
              </View>

              <Text style={styles.textColor}>{formatDateToDayMonth(date)}</Text>
            </View>
          </View>
          <>
            {filteredData?.length > 0 ? (
              <>
                <View style={styles.itemContainer}>
                  <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={filteredData}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                      <ItemCard style={styles.marginStyle} item={item} />
                    )}
                  />
                </View>
                <View style={styles.bottom}>
                  <TouchableOpacity
                    onPress={() => {
                      setData(popularAirlines);
                      setShowModal(true);
                    }}
                    style={styles.filter}>
                    <SvgHandler xml={svgXml.filter} height={24} width={24} />
                    <Text style={styles.sortText}>Filter</Text>
                  </TouchableOpacity>
                  <View style={styles.line} />
                  <TouchableOpacity onPress={handleSort} style={styles.sort}>
                    <SvgHandler xml={svgXml.sort} height={24} width={24} />
                    <Text style={styles.sortText}>Sort</Text>
                  </TouchableOpacity>
                </View>
                <BottomSheet
                  visible={showModal}
                  onClose={() => setShowModal(false)}
                  filterCriteria={filterCriteria}
                  data={data}
                />
              </>
            ) : (
              <View style={styles.noData}>
                <Text style={styles.textColor}>
                  No Flight data available for this route...
                </Text>
              </View>
            )}
          </>
        </View>
      )}
    </>
  );
};

export default Search;
