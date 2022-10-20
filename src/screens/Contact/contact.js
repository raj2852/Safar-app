import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  Dimensions,
  TextInput,
  ToastAndroid
} from 'react-native';
import colors from '../../assets/colors';
import {sendGridEmail} from 'react-native-sendgrid';
import { api_key } from '../../assets/api';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      body: '',
      user: '',
      message: false
    };
  }
  updateTextInput = name => text => {
    this.setState({[name]: text});
  };
  sendmail(){
    const {email,body,user} = this.state;
    const SENDGRIDAPIKEY = api_key;
    const FROMEMAIL = email;
    const TOMEMAIL = 'service.rajprojects@gmail.com';
    const SUBJECT = `${user}'s message from safar app`;
    const BODY = body;
    try{
      if(user==""||email==""||body==""){
        ToastAndroid.show("Please enter your name and email and a valid message",1);
      }
      else{
        const sendRequest = sendGridEmail(SENDGRIDAPIKEY,TOMEMAIL,FROMEMAIL,SUBJECT,BODY);
        sendRequest.then((response) => {
	            console.log("Success");
              ToastAndroid.show("Your email is sent",1);
              this.setState({message:true});
	        }).catch((error) =>{
	            console.log(error);
	        });
	      }
      }
    catch(e){
      console.log(e);
    }
  }
  render() {
    const {user,email,body,message} = this.state;
    return (
      <SafeAreaView style={contactStyle.screen}>
        <Text style={{fontSize: 24, marginBottom: 20}}>
          Have any queries or grieviences? Contact us by filling the details
          below and we will reach to you as soon as possible
        </Text>
        <TextInput
          value={user}
          placeholder="your name"
          style={contactStyle.input}
          onChangeText={value => this.setState({user: value})}
        />
        <TextInput
          value={email}
          placeholder="your email"
          style={contactStyle.input}
          onChangeText={value => this.setState({email: value})}
        />
        <TextInput
          multiline
          value={body}
          placeholder="Enter Message here..."
          style={[contactStyle.input, {height: 150}]}
          onChangeText={value => this.setState({body: value})}></TextInput>
        <Button
          title="Send Message"
          style={contactStyle.btn}
          color={'green'}
          onPress={() => this.sendmail()}></Button>
        {message && (
          <Text style={{color: '#fff', fontSize: 24}}>
            Your message has been received by us! Expect reply within next 2
            working days.
          </Text>
        )}
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

Contact.options = {
  topBar: {
    title: {
      text: 'Contact Us',
      color: 'white',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Contact;
