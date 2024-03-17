import React from 'react';
import {Text, View} from 'react-native';
import styles from './HomeScreen.style';
import SvgHandler from '../../assets/svgs/SvgHandler';
import {svgXml} from '../../assets/svgs/list';

import HomeCard from '../../components/HomeCard/HomeCard.component';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SvgHandler xml={svgXml.profile} height={32} width={32} />
        <SvgHandler xml={svgXml.hamburger} height={24} width={24} />
      </View>
      <View style={styles.greeting}>
        <Text style={styles.greetingText}>Hello UserX!</Text>
      </View>
      <HomeCard />
    </View>
  );
};

export default Home;
