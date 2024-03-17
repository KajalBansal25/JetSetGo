import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ItemCard.style';

const ItemCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text style={styles.text}>Vistara UK 939,906</Text>
      </View>
      <View style={styles.secondView}>
        <View style={styles.from}>
          <Text style={styles.timeText}>16:35</Text>
          <Text>BOM</Text>
        </View>
        <View style={styles.viewWidth}>
          <Text style={styles.textAlignmnet}>15h 40m</Text>
          <View style={styles.strokeWidth} />
          <Text style={styles.textAlignmnet}>1 stop</Text>
        </View>
        <View style={styles.to}>
          <Text style={styles.timeText}>8:15</Text>
          <Text>Delhi</Text>
        </View>
        <View style={styles.money}>
          <Text style={styles.priceText}>₹11589</Text>
          <Text style={styles.seats}>Availability:3</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;
