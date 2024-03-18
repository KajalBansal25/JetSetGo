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
import Radio from '../Radio/Radio.component';

const BottomSheet = ({visible, onClose, filterCriteria, data}) => {
  const [sorting, setSorting] = useState(null);
  const [filtering, setFiltering] = useState({});

  const handleCheck = (item, isRadio = false) => {
    if (isRadio) {
      setSorting(item);
    } else {
      setFiltering(prevFiltering => ({
        ...prevFiltering,
        [item]: !prevFiltering[item],
      }));
    }
  };

  const handleClear = () => {
    setFiltering({});
    filterCriteria([]);
  };

  const handleSelectAll = () => {
    const allSelected = data.reduce((acc, item) => {
      if (!['Low to High', 'High to Low'].includes(item)) {
        acc[item] = true;
      }
      return acc;
    }, {});
    setFiltering(allSelected);
  };

  const applyFilter = () => {
    const selectedFilters = Object.keys(filtering).filter(
      key => filtering[key],
    );

    filterCriteria(selectedFilters, sorting);

    onClose();
  };

  let check = !['Low to High', 'High to Low']?.includes(data[0]);

  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.modal}>
        <View style={styles.subContainer}>
          <View>
            <View style={styles.header}>
              {check && (
                <Pressable onPress={handleSelectAll} style={styles.pressable}>
                  <Text style={styles.textColor}>select all</Text>
                </Pressable>
              )}
              <Pressable onPress={onClose}>
                <SvgHandler xml={svgXml.cross} height={20} width={20} />
              </Pressable>
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollview}>
              {data.map((item, index) => (
                <>
                  {['Low to High', 'High to Low']?.includes(item) ? (
                    <Radio
                      key={index}
                      label={item}
                      handleCheck={() => handleCheck(item, true)}
                      initialValue={sorting === item}
                    />
                  ) : (
                    <Checkbox
                      key={index}
                      label={item}
                      handleCheck={() => handleCheck(item)}
                      initialValue={!!filtering[item]}
                    />
                  )}
                </>
              ))}
            </ScrollView>
          </View>
          <View style={styles.bottom}>
            {check && (
              <TouchableOpacity onPress={handleClear} style={styles.clear}>
                <Text style={styles.textColor}>Clear</Text>
              </TouchableOpacity>
            )}
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
