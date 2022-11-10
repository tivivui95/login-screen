/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Dimensions, View } from 'react-native';
import styles from './style';
import Svg, { Image } from 'react-native-svg';

export default function App() {
  const { height, width } = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <Svg height={height} width={width}>
        <Image 
          href={require('./assets/background-img.jpg')} 
          width={width} 
          height={height}
          preserveAspectRatio="xMidYMid slice" />
      </Svg>
      <View>
        <View>
          
        </View>
      </View>
    </View>
  );
}