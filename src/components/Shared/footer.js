import React from "react";
import {
    View,Text,Button,Linking
}from 'react-native';
import styles from "../../assets/styles";

const Footer = ( {footerHeadline,footerDescription,linkURL,linkText,buttonText,buttonURL} ) => {
  const openPaymentLink = url => {
    console.log(url);
    Linking.openURL(url);
  };
    return (
      <View style={styles.footer}>
        <Text style={styles.footertext}>{footerHeadline}</Text>
        <Text
          onPress={() => {
            openPaymentLink(linkURL);
          }}
          style={{color: '#fff'}}>
          {linkText}
        </Text>
        <Text style={styles.footertext}>
          {footerDescription}
          <Button
            color="#e33745"
            title={buttonText}
            style={styles.button}
            onPress={() => {
              openPaymentLink(buttonURL);
            }}></Button>
        </Text>
      </View>
    );
}

export default Footer;