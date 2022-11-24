import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  Dimensions,
  TextInput,
  ToastAndroid,
  Flatlist,
} from 'react-native';
import colors from '../../assets/colors';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      body: '',
      user: '',
      message: false,
      destinations: [],
    };
  }
  updateTextInput = name => text => {
    this.setState({[name]: text});
  };

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'Decemeber',
  ];

  destinationdata = [
    {
      month: 'January',
      states: ['', '', ''],
    },
    {
      month: 'February',
      states: ['', '', ''],
    },
    {
      month: 'March',
      states: ['', '', ''],
    },
    {
      month: 'April',
      states: ['', '', ''],
    },
    {
      month: 'May',
      states: ['', '', ''],
    },
    {
      month: 'June',
      states: ['', '', ''],
    },
    {
      month: 'July',
      states: ['', '', ''],
    },
    {
      month: 'August',
      states: ['', '', ''],
    },
    {
      month: 'September',
      states: ['', '', ''],
    },
    {
      month: 'October',
      states: ['', '', ''],
    },
    {
      month: 'November',
      states: ['', '', ''],
    },
    {
      month: 'December',
      states: ['', '', ''],
    },
  ];

  sendmail = () => {
    ToastAndroid.show('This service is currently unavailable', 1);
  };
  render() {
    const {user, email, body, message, destinations} = this.state;
    return (
      <SafeAreaView style={contactStyle.screen}>
        <Text
          style={{
            alignSelf: 'flex-start',
            color: '#000',
            fontSize: 40,
            fontWeight: 800,
            marginBottom: 20,
          }}>
          Personalize your search and queries{' '}
        </Text>
        <Text style={{color: '#000'}}>When are you planning your "Safar"?</Text>
        <Flatlist
          data={this.months}
          style={{marginVertical: 10}}
          renderItem={({item}) => {
            return (
              <Button
                style={{
                  padding: 40,
                  borderWidth: 1,
                  borderRadius: 20,
                  backgroundColor: '#fffcfc',
                  borderColor: '#5c5c5c',
                  marginRight: 4,
                }}
                onclick={item => {
                  let result = this.destinationdata.filter(function (ele) {
                    return ele.month == item;
                  });
                  console.log(result);
                  this.setState({destinations: result});
                  console.log(destinations);
                }}>
                <Text style={{color: '#000'}}>{item}</Text>
              </Button>
            );
          }}
        />
        {destinations.length != 0 && (
          <Flatlist
            data={destinations.states}
            renderItem={({item}) => {
              return (
                <Text style={{color: '#000'}}>
                  Here are the state(s) you can visit during this time:{' '}
                  {item.name}
                </Text>
              );
            }}
          />
        )}

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
    backgroundColor: '#fffcfc',
    paddingTop: 30,
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
