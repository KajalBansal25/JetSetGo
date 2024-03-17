import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
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

const popularAirlines = [
  'IndiGo',
  'Air India',
  'AirAsia',
  'GoAir',
  'Vistara',
  'SpiceJet',
];

const sortOrder = ['Low to High', 'High to Low'];

const Search = ({route}) => {
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

  useEffect(() => {
    setFilteredData(response);
  }, [response]);

  const handleSort = () => {
    setData(sortOrder);
    setShowModal(true);
  };

  const filterCriteria = useCallback(
    criteria => {
      const sortCriteria = criteria.find(
        c => c === 'Low to High' || c === 'High to Low',
      );
      let sortDirectionValue = sortCriteria || sortDirection;

      const airlinesCriteria = criteria.filter(
        c => c !== 'Low to High' && c !== 'High to Low',
      );

      let filtered = response.filter(
        flight =>
          airlinesCriteria.length === 0 ||
          airlinesCriteria.includes(flight.airline),
      );

      filtered.sort((a, b) => {
        return sortDirectionValue === 'Low to High'
          ? a.price - b.price
          : b.price - a.price;
      });

      setFilteredData(filtered);
      if (sortDirection !== sortDirectionValue) {
        setSortDirection(sortDirectionValue);
      }
    },
    [response, sortDirection],
  );

  return (
    <View style={styles.container}>
      <View style={styles.backIconContainer}>
        <TouchableOpacity onPress={handleBack}>
          <SvgHandler xml={svgXml.backIcon} height={32} width={32} />
        </TouchableOpacity>

        <View style={styles.headerRight}>
          <Text
            style={styles.headerText}>{`${origin} --> ${destination}`}</Text>
          <Text>{formatDateToDayMonth(date)}</Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={filteredData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <ItemCard style={{marginBottom: 12}} item={item} />
          )}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#e3e3e3',
        }}>
        <TouchableOpacity
          onPress={() => {
            setData(popularAirlines);
            setShowModal(true);
          }}
          style={{
            flex: 1,
            padding: 12,
            borderRadius: 8,
            marginTop: 8,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <SvgHandler xml={svgXml.filter} height={24} width={24} />
          <Text style={{marginLeft: 8}}>Filter</Text>
        </TouchableOpacity>
        <View style={{height: 40, borderWidth: 1}} />
        <TouchableOpacity
          onPress={handleSort}
          style={{
            flex: 1,
            padding: 12,
            borderRadius: 8,
            marginTop: 8,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <SvgHandler xml={svgXml.sort} height={24} width={24} />
          <Text style={{marginLeft: 8}}>Sort</Text>
        </TouchableOpacity>
      </View>
      <BottomSheet
        visible={showModal}
        onClose={() => setShowModal(false)}
        filterCriteria={filterCriteria}
        data={data}
      />
    </View>
  );
};

export default Search;
