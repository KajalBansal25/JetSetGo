import React, {useState} from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SvgHandler from '../../assets/svgs/SvgHandler';
import {svgXml} from '../../assets/svgs/list';
import Checkbox from '../Checkbox/Checkbox.componnet';
import {styles} from './BottomSheet.style';

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
      <View style={styles.modal}>
        <View style={styles.subContainer}>
          <View>
            <View style={styles.header}>
              <Pressable onPress={handleSelectAll} style={styles.pressable}>
                <Text style={styles.textColor}>select all</Text>
              </Pressable>
              <Pressable onPress={onClose}>
                <SvgHandler xml={svgXml.cross} height={20} width={20} />
              </Pressable>
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollview}>
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
          <View style={styles.bottom}>
            <TouchableOpacity onPress={handleClear} style={styles.clear}>
              <Text style={styles.textColor}>Clear</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.apply} onPress={applyFilter}>
              <SvgHandler xml={svgXml.filter} height={32} width={32} />
              <Text style={styles.textColor}>Apply filters</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default BottomSheet;
