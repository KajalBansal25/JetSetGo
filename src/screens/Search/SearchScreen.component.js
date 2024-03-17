import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './SearchScreen.style';
import SvgHandler from '../../assets/svgs/SvgHandler';
import {svgXml} from '../../assets/svgs/list';
import {useNavigation} from '@react-navigation/native';
import {formatDateToDayMonth} from '../../utils/commonUtil';
import ItemCard from '../../components/ItemCard/ItemCard.component';

const Search = ({route}) => {
  const navigation = useNavigation();
  const {from, to, selectedDate} = route.params;
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.backIconContainer}>
        <TouchableOpacity onPress={handleBack}>
          <SvgHandler xml={svgXml.backIcon} height={32} width={32} />
        </TouchableOpacity>

        <View style={styles.headerRight}>
          <Text style={styles.headerText}>{`${from} --> ${to}`}</Text>
          <Text>{formatDateToDayMonth(selectedDate)}</Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <ItemCard />
      </View>
    </View>
  );
};

export default Search;
