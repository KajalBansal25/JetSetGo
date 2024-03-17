import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ItemCard.style';
import {getTimeDifference} from '../../utils/commonUtil';
import moment from 'moment';

const ItemCard = ({style, item}) => {
  return (
    <TouchableOpacity style={{...styles.container, ...style}}>
      <View>
        <Text style={styles.text}>{`${item.airline}, ${item.aircraft}`}</Text>
      </View>
      <View style={styles.secondView}>
        <View style={styles.from}>
          <Text style={styles.timeText}>
            {moment(item.departureTime).format('HH:mm')}
          </Text>
          <Text style={styles.textColor}>{item.origin}</Text>
        </View>
        <View style={styles.viewWidth}>
          <Text style={styles.textAlignmnet}>
            {getTimeDifference(item.departureTime, item.arrivalTime)}
          </Text>
          <View style={styles.strokeWidth} />
          <Text style={styles.textAlignmnet}>1 stop</Text>
        </View>
        <View style={styles.to}>
          <Text style={styles.timeText}>
            {moment(item.arrivalTime).format('HH:mm')}
          </Text>
          <Text style={styles.textColor}>{item.destination}</Text>
        </View>
        <View style={styles.money}>
          <Text style={styles.priceText}>₹{item.price}</Text>
          <Text style={styles.seats}>Availability:{item.seatsAvailable}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;
