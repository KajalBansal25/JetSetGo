import React from 'react';
import { Text, TouchableOpacity, View} from 'react-native';
import styles from './HomeScreen.style';
import {fetchData} from './ducks/data/Home.reducer';

const Home = () => {


  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>Home</Text>
    </View>
  );
};

export default Home;
