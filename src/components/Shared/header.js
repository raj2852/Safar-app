import React from 'react';
import {View, Text, Linking} from 'react-native';
import styles from '../../assets/styles';
import colors from '../../assets/colors';

const Header = ({name,direction}) => {
  return (
    <View
      style={{
        height: 'auto',
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#5c5c5c',
      }}>
     <Text>{name}</Text>
     <Text>A state from the {direction}</Text>
    </View>
  );
};

export default Header;
