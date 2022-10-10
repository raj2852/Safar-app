import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  Dimensions,
  TextInput,
} from 'react-native';

class Contact extends Component {
  render() {
    return (
      <SafeAreaView style={contactStyle.screen}>
        <Text style={{fontSize: 24, marginBottom: 20}}>
          Have any queries or grieviences? Contact us by filling the details
          below and we will reach to you as soon as possible
        </Text>
        <TextInput
          placeholder="your email"
          style={contactStyle.input}></TextInput>
        <TextInput
          multiline
          placeholder="Enter Message here..."
          style={[contactStyle.input, {height: 150}]}></TextInput>
        <Button
          title="Send Message"
          style={contactStyle.btn}
          color={'green'}></Button>
      </SafeAreaView>
    );
  }
}

const contactStyle = StyleSheet.create({
  screen: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    alignItems: 'center',
    backgroundColor: '#a7a3d1',
  },
  input: {
    width: '90%',
    height: 40,
    margin: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  btn: {
    height: 'auto',
    width: 'auto',
    padding: 10,
  },
});

export default Contact;
