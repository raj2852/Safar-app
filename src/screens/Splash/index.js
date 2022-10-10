import React from 'react';
import {View, Image, Text, Dimensions} from 'react-native';
import styles from '../../assets/styles';
import colors from '../../assets/colors';
import images from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';

const Splash = ({}) => {
  <LinearGradient colors={colors.linearGradientColor}>
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width
      }}>
      <Image source={images.logo} />
    </View>
  </LinearGradient>;
};

export default Splash;
