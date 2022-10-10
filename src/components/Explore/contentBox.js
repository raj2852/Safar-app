import React from "react";
import {
    View,Text,ImageBackground,Dimensions
}from 'react-native';
import styles from "../../assets/styles";
import Navigation from 'react-native-navigation';

const ContentBox =({bgImage,label,onPress}) => {
  
  const openScreen = (componentId,link) =>{  
    Navigation.push(componentId, {
      component: {
        name: link,
      },
    });
  }

    return (
      <View
        style={{
          height: 200,
          width: Dimensions.get('screen').width - 10,
          margin: 5,
          borderWidth: 3,
          borderColor: '#fff',
        }}>
        <ImageBackground
          source={bgImage}
          resizeMode="cover"
          style={{flex: 1}}>
          <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
            {label}
          </Text>
          <Text
            style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
            onPress={onPress}>
            Visit
          </Text>
        </ImageBackground>
      </View>
    );
}

export default ContentBox;