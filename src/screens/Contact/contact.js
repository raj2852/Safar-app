import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  Dimensions,
  TextInput,
  ToastAndroid,
  FlatList,
  ScrollView,
  View,
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
      monthName: '',
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
      states: [
        ' Andhra-Pradesh ,',
        ' Arunachal Pradesh ,',
        ' Assam ,',
        ' West Bengal ,',
        ' Bihar ,',
        ' Chattisgarh ,',
        ' Goa ,',
        ' Gujrat ,',
        ' Himachal Pradesh ,',
        ' Jharkhand ,',
        ' Kerala ,',
        ' Madhya Pradesh ,',
        ' Maharashtra ,',
        ' Manipur ,',
        ' Meghalaya ,',
        ' Mizoram and Nagaland ,',
        ' Orissa ,',
        ' Punjab ,',
        ' Rajasthan ,',
        ' Tamil nadu ,',
        ' Telengana ,',
        ' Tripura ,',
        ' Uttar Pradesh ,',
        ' Uttarakhand ',
      ],
    },
    {
      month: 'February',
      states: [
        ' Andhra Pradesh ,',
        ' Arunachal Pradesh ,',
        ' Assam ,',
        ' West Bengal ,',
        ' Bihar ,',
        ' Chattisgarh ,',
        ' Kerala ,',
        ' Delhi ',
        ' Goa ,',
        ' Guj ,',
        ' Himachal Pradesh ,',
        ' Jharkhand ,',
        ' Madhya Pradesh ,',
        ' Maharashtra ,',
        ' Manipur ,',
        ' Meghalaya ,',
        ' Mizoram and Nagaland ,',
        ' Orissa ,',
        ' Punjab ,',
        ' Rajasthan ,',
        ' Tamil nadu ,',
        ' Telengana ,',
        ' Tripura ,',
        ' Uttar Pradesh ,',
        ' Uttarakhand ',
      ],
    },
    {
      month: 'March',
      states: [
        ' Andhra Pradesh ,',
        ' Arunachal Pradesh ,',
        ' Assam ,',
        ' Bengal ,',
        ' Bihar ,',
        ' Chattisgarh ,',
        ' Kerala ,',
        ' Delhi ,',
        ' Goa ,',
        ' Himachal Pradesh ,',
        ' Jharkhand ,',
        ' Kashmir ,',
        ' Madhya Pradesh ,',
        ' Maharashtra ,',
        ' Manipur ,',
        ' Meghalaya ,',
        ' Mizoram and Nagaland ,',
        ' Punjab ,',
        ' Rajasthan ,',
        ' Tamil nadu ,',
        ' Sikkim ,',
        ' Telengana ,',
        ' Tripura ,',
        ' Uttar Pradesh ,',
        ' Uttarakhand ',
      ],
    },
    {
      month: 'April',
      states: [
        ' Arunachal Pradesh ,',
        ' Assam ,',
        ' Himachal Pradesh ,',
        ' Kashmir ,',
        ' Maharashtra ,',
        ' Meghalaya ,',
        ' Sikkim ,',
        ' Tripura ,',
        ' Uttar Pradesh ,',
        ' Uttarakhand ',
      ],
    },
    {
      month: 'May',
      states: [
        ' Himachal Pradesh ,',
        ' Kashmir ,',
        ' Maharashtra ,',
        ' Meghalaya ,',
        ' Orissa ,',
        ' Sikkim ,',
        ' Tripura ,',
        ' Uttarakhand ,',
        ' Uttar Pradesh ',
      ],
    },
    {
      month: 'June',
      states: [
        ' Himachal Pradesh ,',
        ' Kashmir ,',
        ' Kerala ,',
        ' Maharashtra ,',
        ' Meghalaya ,',
        ' Orissa ,',
        ' Uttar Pradesh ,',
        ' Uttarakhand ',
      ],
    },
    {
      month: 'July',
      states: [
        ' Gujrat ,',
        ' Jharkhand ,',
        ' Kashmir ,',
        ' Kerala ,',
        ' Maharashtra ,',
        ' Orissa ,',
        ' Uttar Pradesh ',
      ],
    },
    {
      month: 'August',
      states: [
        ' Gujrat ,',
        ' Jharkhand ,',
        ' Kashmir ,',
        ' Kerala ,',
        ' Maharashtra ,',
        ' Uttar Pradesh ',
      ],
    },
    {
      month: 'September',
      states: [
        ' Gujrat ,',
        ' Jharkhand ,',
        ' Kashmir ,',
        ' Kerala ,',
        ' Maharashtra ,',
        ' Uttar Pradesh ,',
        ' Uttarakhand ',
      ],
    },
    {
      month: 'October',
      states: [
        ' Arunachal Pradesh ,',
        ' Assam ,',
        ' West bengal ,',
        ' Bihar ,',
        ' Chattisgarh ,',
        ' Delhi ,',
        ' Gujrat ,',
        ' Himachal Pradesh ,',
        ' Jharkhand ,',
        ' Karnataka ,',
        ' Kerala ,',
        ' Kashmir ,',
        ' Madhya Pradesh ,',
        ' Maharashtra ,',
        ' Manipur ,',
        ' Meghalaya ,',
        ' Punjab ,',
        ' Rajasthan ,',
        ' Sikkim ,',
        ' Tripura ,',
        ' Uttar Pradesh ,',
        ' Uttarakhand ',
      ],
    },
    {
      month: 'November',
      states: [
        ' Arunachal Pradesh ,',
        ' Assam ,',
        ' West bengal ,',
        ' Bihar ,',
        ' Chattisgarh ,',
        ' Delhi ,',
        ' Kerala ,',
        ' Goa ,',
        ' Gujrat ,',
        ' Himachal Pradesh ,',
        ' Jharkhand ,',
        ' Karnataka ,',
        ' Kashmir ,',
        ' Madhya Pradesh ,',
        ' Maharashtra ,',
        ' Manipur ,',
        ' Meghalaya ,',
        ' Mizoram and Nagaland ,',
        ' Orissa ,',
        ' Punjab ,',
        ' Rajasthan ,',
        ' Tamil nadu ,',
        ' Sikkim ,',
        ' Tripura ,',
        ' Uttar Pradesh ,',
        ' Uttarakhand ',
      ],
    },
    {
      month: 'December',
      states: [
        ' Andhra Pradesh ,',
        ' Arunachal Pradesh ,',
        ' Assam ,',
        ' Bihar ,',
        ' Bengal ,',
        ' Chattisgarh ,',
        ' Goa ,',
        ' Gujrat ,',
        ' Himachal Pradesh ,',
        ' Jharkhand ,',
        ' Karnataka ,',
        ' Kerala ,',
        ' Madhya Pradesh ,',
        ' Maharashtra ,',
        ' Manipur ,',
        ' Meghalaya ,',
        ' Mizoram and Nagaland ,',
        ' Orissa ,',
        ' Punjab ,',
        ' Rajasthan ,',
        ' Tamil nadu ,',
        ' Sikkim ,',
        ' Telengana ,',
        ' Tripura ,',
        ' Uttar Pradesh ,',
        ' Uttarakhand ',
      ],
    },
  ];

  sendmail = () => {
    ToastAndroid.show('This service is currently unavailable', 1);
  };
  render() {
    const {user, email, body, message, destinations, monthName} = this.state;
    return (
      <View style={contactStyle.screen}>
        <Text
          style={{
            alignSelf: 'flex-start',
            color: '#000',
            fontSize: 40,
            fontWeight: '800',
            marginBottom: 20,
            marginLeft: 5,
          }}>
          Personalize your search and queries{' '}
        </Text>

        <Text style={{color: '#000', fontSize: 20, textAlign: 'center'}}>
          When are you planning your "Safar"?
        </Text>
        <ScrollView>
          {/* <FlatList
          data={this.months}
          style={{marginVertical: 10}}
          renderItem={({item}) => {
            return (
              <View style={{flex: 1,justifyContent: "space-between"}}>
              <Button
                style={{
                  padding: 40,
                  borderWidth: 1,
                  borderRadius: 20,
                  backgroundColor: '#fffcfc',
                  borderColor: '#5c5c5c',
                  margin: 4,
                }}
                onPress={item => {
                  //console.log(item);
                  let result = this.destinationdata.filter(function (ele) {
                    return ele.month == `$item`;
                  });
                  //alert(result);
                  console.log(result);
                  this.setState({destinations: result});
                  console.log(destinations);
                }}
                title={item} />
               </View> 
            );
          }}
        />         */}
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              flexWrap: 'wrap',
              padding: 20,
            }}>
            <View style={{width: '30%', marginVertical: 4}}>
              <Button
                style={{
                  flex: 0.5,
                  padding: 40,
                  borderWidth: 1,
                  borderRadius: 20,
                  color: '#000',
                  borderColor: '#5c5c5c',
                  margin: 10,
                }}
                color={'#5c5c5c'}
                onPress={() => {
                  //console.log(item);
                  let result = this.destinationdata.filter(function (ele) {
                    return ele.month == 'January';
                  });
                  //alert(result);
                  // const {states} = result;
                  // console.log(states);
                  this.setState({
                    destinations: result[0].states,
                    monthName: 'January',
                  });
                  console.log(destinations);
                }}
                title="January"
              />
            </View>
            <View style={{width: '30%', marginVertical: 4}}>
              <Button
                style={{
                  padding: 40,
                  borderWidth: 1,
                  borderRadius: 20,
                  color: '#000',
                  borderColor: '#5c5c5c',
                  margin: 10,
                }}
                color={'#5c5c5c'}
                onPress={() => {
                  //console.log(item);
                  let result = this.destinationdata.filter(function (ele) {
                    return ele.month == 'February';
                  });
                  //alert(result);
                  //console.log(result);
                  this.setState({destinations: result[0].states, monthName: 'February'});
                  console.log(destinations);
                }}
                title="February"
              />
            </View>
            <View style={{width: '30%', marginVertical: 4}}>
              <Button
                style={{
                  padding: 40,
                  borderWidth: 1,
                  borderRadius: 20,
                  color: '#000',
                  borderColor: '#5c5c5c',
                  margin: 10,
                }}
                color={'#5c5c5c'}
                onPress={() => {
                  //console.log(item);
                  let result = this.destinationdata.filter(function (ele) {
                    return ele.month == 'March';
                  });
                  //alert(result);
                  //console.log(result);
                  this.setState({destinations: result[0].states, monthName: 'March'});
                  console.log(destinations);
                }}
                title="March"
              />
            </View>
            <View style={{width: '30%', marginVertical: 4}}>
              <Button
                style={{
                  padding: 40,
                  borderWidth: 1,
                  borderRadius: 20,
                  color: '#000',
                  borderColor: '#5c5c5c',
                  margin: 10,
                }}
                color={'#5c5c5c'}
                onPress={() => {
                  //console.log(item);
                  let result = this.destinationdata.filter(function (ele) {
                    return ele.month == 'April';
                  });
                  //alert(result);
                  //console.log(result);
                  this.setState({destinations: result[0].states, monthName: 'April'});
                  console.log(destinations);
                }}
                title="April"
              />
            </View>
            <View style={{width: '30%', marginVertical: 4}}>
              <Button
                style={{
                  padding: 40,
                  borderWidth: 1,
                  borderRadius: 20,
                  color: '#000',
                  borderColor: '#5c5c5c',
                  margin: 10,
                }}
                color={'#5c5c5c'}
                onPress={() => {
                  //console.log(item);
                  let result = this.destinationdata.filter(function (ele) {
                    return ele.month == 'May';
                  });
                  //alert(result);
                  //console.log(result);
                  this.setState({destinations: result[0].states, monthName: 'May'});
                  console.log(destinations);
                }}
                title="May"
              />
            </View>
            <View style={{width: '30%', marginVertical: 4}}>
              <Button
                style={{
                  padding: 40,
                  borderWidth: 1,
                  borderRadius: 20,
                  color: '#000',
                  borderColor: '#5c5c5c',
                  margin: 10,
                }}
                color={'#5c5c5c'}
                onPress={() => {
                  //console.log(item);
                  let result = this.destinationdata.filter(function (ele) {
                    return ele.month == 'June';
                  });
                  //alert(result);
                  //console.log(result);
                  this.setState({destinations: result[0].states, monthName: 'June'});
                  console.log(destinations);
                }}
                title="June"
              />
            </View>
            <View style={{width: '30%', marginVertical: 4}}>
              <Button
                style={{
                  padding: 40,
                  borderWidth: 1,
                  borderRadius: 20,
                  color: '#000',
                  borderColor: '#5c5c5c',
                  margin: 10,
                }}
                color={'#5c5c5c'}
                onPress={() => {
                  //console.log(item);
                  let result = this.destinationdata.filter(function (ele) {
                    return ele.month == 'July';
                  });
                  //alert(result);
                  //console.log(result);
                  this.setState({destinations: result[0].states, monthName: 'July'});
                  console.log(destinations);
                }}
                title="July"
              />
            </View>
            <View style={{width: '30%', marginVertical: 4}}>
              <Button
                style={{
                  padding: 40,
                  borderWidth: 1,
                  borderRadius: 20,
                  color: '#000',
                  borderColor: '#5c5c5c',
                  margin: 10,
                }}
                color={'#5c5c5c'}
                onPress={() => {
                  //console.log(item);
                  let result = this.destinationdata.filter(function (ele) {
                    return ele.month == 'August';
                  });
                  //alert(result);
                  //console.log(result);
                  this.setState({destinations: result[0].states, monthName: 'August'});
                  console.log(destinations);
                }}
                title="August"
              />
            </View>
            <View style={{width: '30%', marginVertical: 4}}>
              <Button
                style={{
                  padding: 40,
                  borderWidth: 1,
                  borderRadius: 20,
                  color: '#000',
                  borderColor: '#5c5c5c',
                  margin: 10,
                }}
                color={'#5c5c5c'}
                onPress={() => {
                  //console.log(item);
                  let result = this.destinationdata.filter(function (ele) {
                    return ele.month == 'September';
                  });
                  //alert(result);
                  //console.log(result);
                  this.setState({destinations: result[0].states, monthName: 'September'});
                  console.log(destinations);
                }}
                title="September"
              />
            </View>
            <View style={{width: '30%', marginVertical: 4}}>
              <Button
                style={{
                  padding: 40,
                  borderWidth: 1,
                  borderRadius: 20,
                  color: '#000',
                  borderColor: '#5c5c5c',
                  margin: 10,
                }}
                color={'#5c5c5c'}
                onPress={() => {
                  //console.log(item);
                  let result = this.destinationdata.filter(function (ele) {
                    return ele.month == 'October';
                  });
                  //alert(result);
                  //console.log(result);
                  this.setState({destinations: result[0].states, monthName: 'October'});
                  console.log(destinations);
                }}
                title="October"
              />
            </View>
            <View style={{width: '30%', marginVertical: 4}}>
              <Button
                style={{
                  padding: 40,
                  borderWidth: 1,
                  borderRadius: 20,
                  color: '#000',
                  borderColor: '#5c5c5c',
                  margin: 10,
                }}
                color={'#5c5c5c'}
                onPress={() => {
                  //console.log(item);
                  let result = this.destinationdata.filter(function (ele) {
                    return ele.month == 'November';
                  });
                  //alert(result);
                  //console.log(result);
                  this.setState({destinations: result[0].states, monthName: 'November'});
                  console.log(destinations);
                }}
                title="November"
              />
            </View>
            <View style={{width: '30%', marginVertical: 4}}>
              <Button
                style={{
                  padding: 40,
                  borderWidth: 1,
                  borderRadius: 20,
                  color: '#000',
                  borderColor: '#5c5c5c',
                  margin: 10,
                }}
                color={'#5c5c5c'}
                onPress={() => {
                  //console.log(item);
                  let result = this.destinationdata.filter(function (ele) {
                    return ele.month == 'December';
                  });
                  //alert(result);
                  //console.log(result);
                  this.setState({destinations: result[0].states, monthName: 'December'});
                  console.log(destinations);
                }}
                title="December"
              />
            </View>
          </View>

          {destinations && (
            <View>
              
              <Text style={{color: '#000', fontSize: 20, textAlign: 'center'}}>
                Here are the state(s) you can visit during {monthName}:{' '}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#000',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                {destinations}
              </Text>
            </View>
          )}
          {/* {destinations.length != 0 && (
            <FlatList
              data={destinations}
              renderItem={({item}) => {
                return (
                  <Text style={{color: '#000'}}>
                    Here are the state(s) you can visit during this time:{' '}
                    {item}
                  </Text>
                );
              }}
            />
          )} */}
        </ScrollView>
      </View>
    );
  }
}

const contactStyle = StyleSheet.create({
  screen: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    //alignItems: 'center',
    backgroundColor: '#fffcfc',
    paddingTop: 30,
    flex: 1,
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
      fontWeight: 'bold',
      color: 'black',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Contact;
