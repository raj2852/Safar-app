import React, { Component} from 'react';
import { Navigation } from 'react-native-navigation';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Linking,
  Image,
  Button,
  Dimensions,
  ImageBackground,
} from 'react-native';


class Home extends Component{
  render(){
    return (
      <SafeAreaView style={HomeStyle.screen}>
        <ScrollView style={{backgroundColor: '#fff'}}>
          <ImageBackground
            source={require('./images/kash.jpg')}
            resizeMode="cover"
            style={{
              borderBottomStartRadius: 50,
              borderBottomEndRadius: 50,
              overflow: 'hidden',
            }}>
            <View style={HomeStyle.carousel}>
              <View style={HomeStyle.glasscard} blurRadius={5}>
                <Image
                  source={require('./images/website.jpg')}
                  style={{
                    marginTop: 15,
                    width: Dimensions.get('screen').width,
                    height: 150,
                  }}
                />
              </View>
              <Text style={{padding: 15, fontSize: 26, color: '#fff'}}>
                WELCOME TO "SAFAR",YOUR ONE STOP DESTINATION TO ALL INDIA TOURISM
              </Text>
  
              <Button
                color="#e33745"
                title="EXPLORE"
                style={HomeStyle.button}
                onPress={() => {
                  Linking.openURL('https://raj2852.github.io/msafar/explore.html');
                }}></Button>
            </View>
          </ImageBackground>
          <Text style={HomeStyle.heading}>Why Safar? How are we unique?</Text>
          <Text style={HomeStyle.desc}>
            Safar is India's only travel website that brings to you all the
            information of all the Indian states that is required to plan a travel
            destination under a single platform. We don't want you to take the
            load of searching things individually.No need to type and search over
            the aspects individually, we have got them covered.From about the
            "Best Destinations" to "Best Time To Travel" to "Best Route To Start"
            to "What package to expect", we have got all your answers
            covered.Safar is a statewise search destination planner, so if you
            just know the place and not the state please use our "Help Me Search
            My state" feature available under the "Explore" section.
            We seldom visit just a 'particular' place;rather we tend to visit all
            the nearby sites.So we have categorized all the sites, into either
            "Most Important" or "Somewhat important",in case you are a busy
            traveller and what to skip😉.
          </Text>
          <Image
            source={require('./images/svg.jpg')}
            style={{margin: 10, width: '90%', height: 500}}
          />
          <View style={HomeStyle.footer}>
            <Text style={HomeStyle.footertext}>
              This app is created and maintained by{' '}
              <Text
                onPress={() => {
                  Linking.openURL('https://rajdip2852.dscnsec.com');
                }}>
                Rajdip Mondal
              </Text>
            </Text>
            <Text style={HomeStyle.footertext}>
              All the images and text are subject to copyright. The information
              shown in each page are comprehensively calculated and are updated
              regularly. Don't forget to check the link to Official State Tourism
              site before finalizing your tour plan.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
}
  
Home.options = {
  topBar: {
    text: 'Safar',
    color: '#50807D',
  },
  bottomTab: {
    color: '#fff',
  }
}

const HomeStyle = StyleSheet.create({
  screen: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    /*justifyContent: 'center',*/
  },
  glasscard: {
    marginTop: 5,
    width: Dimensions.get('screen').width,
    height: 200,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 10,
    shadowColor: 'rgba(0,0,0,0.5)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.5)',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(255,255,255,0.5)',
  },
  carousel: {
    width: '100%',
    height: 650,
    flex: 1,
    //borderRadius: '0 0 50% 50%',

    //backgroundColor: '#5c5c5c',
    paddingBottom: 80,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },
  button: {
    borderWidth: '3',
    borderColor: '#fff',
    width: '100%',
    borderRadius: 10,
    fontSize: 16,
  },
  heading: {
    fontSize: 28,
    color: 'green',
    padding: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  desc: {
    fontSize: 20,
    color: 'green',
    padding: 20,
    backgroundColor: '#fff',
  },
  footer: {
    flex: 1,
    backgroundColor: 'indigo',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  footertext: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 12,
  },
  bottomtab: {
    flexDirection: "row",
    backgroundColor: "#e33745",
    justifyContent: "space-around",
    width: Dimensions.get("screen").width,
    padding: 10,
  },
  bottombtn: {
    flex:3,
  },
});

Navigation.setDefaultOptions({
  statusBar: {
      backgroundColor: '#50807D'
  },
  topBar: {
      title: {
          color: 'white'
      },
      background: {
          color: '#50807D'
      }
  },
  bottomTab: {
      background: {
          color: '#e33745'
      },
      title: {
          color: '#ffffff',
          fontSize: 14,
          selectedFontSize: 14
      }

  }
});

export default Home;
