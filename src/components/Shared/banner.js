import React from 'react';
import {View, Text, Dimensions, ImageBackground, Image} from 'react-native';
import styles from '../../assets/styles';

const Banner = ({logo, text, bgImage}) => {
  return (
    <ImageBackground
      source={bgImage}
      resizeMode="cover"
      style={{
        borderBottomStartRadius: 50,
        borderBottomEndRadius: 50,
        overflow: 'hidden',
      }}>
      <View style={styles.carousel}>
        <View style={[styles.glasscard,{alignItems: 'center'}]} blurRadius={5}>
          <Image
            source={logo}
            style={{
              marginTop: 15,
              width: Dimensions.get('screen').width-30,
              height: 150,
            }}
          />
        </View>
        <Text style={{padding: 15, fontSize: 26, color: '#fff'}}>
          {text}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Banner;
