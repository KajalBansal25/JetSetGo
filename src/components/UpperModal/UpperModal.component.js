import React from 'react';
import {Modal, Pressable, Text, View} from 'react-native';
import SvgHandler from '../../assets/svgs/SvgHandler';
import {svgXml} from '../../assets/svgs/list';
import {styles} from './UpperModal.style';
import HomeCard from '../HomeCard/HomeCard.component';

const UpperModal = ({visible, onClose}) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.modal}>
        <View style={styles.subContainer}>
          <View>
            <View style={styles.header}>
              <View style={styles.headerContent}>
                <Pressable onPress={onClose}>
                  <SvgHandler xml={svgXml.cross} height={20} width={20} />
                </Pressable>
                <Text style={styles.text}>Modify Flight Search</Text>
              </View>

              <HomeCard />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default UpperModal;
