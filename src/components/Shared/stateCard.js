import React from 'react';
import {View, Text, Linking, Image} from 'react-native';
import styles from '../../assets/styles';
import colors from '../../assets/colors';

const StateCard = ({heading, link,linkdesc, description}) => {
  const openLink = url => Linking.openURL(url);
  return (
    <View
      style={{
        minHeight: '100%',
        maxWidth: '45%',
        backgroundColor: colors.cardColor,
        margin: 12,
        borderRadius:12,
        padding: 15
      }}>
      <Text style={{color: '#fff', fontSize: 28}}>{heading}</Text>
      <>
        <Text
          style={{marginTop: 12, marginBottom: 12, color: '#fff', fontSize: 20, fontStyle:"italic"}}
          onPress={() => {
            openLink(link);
          }}
        >{linkdesc}</Text>
      </>
      <Text style={{color: '#fff', fontSize: 16}}>{description}</Text>
    </View>
  );
};

export default StateCard;
