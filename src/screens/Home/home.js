import React, {Component} from 'react';
import Splash from '../Splash';
import images from '../../assets/images';
import styles from '../../assets/styles';
import colors from '../../assets/colors';
import {Banner,Footer} from '../../components/Shared';

import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Linking,
  Image,
  Button,
  BackHandler,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      profile : 'https://rajdip2852.dscnsec.com',
      website : 'https://raj2852.github.io/msafar/explore.html', 
    }
  }

  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.onBack);
  }

  componentWillUnmount(){
    BackHandler.removeEventListener('hardwareBackPress', this.onBack);
  }

  onBack = () => {
    const {componentId} = this.props;
    Navigation.pop(componentId);
  }

  render() {
    const {profile,website} = this.state;
    return (
      <SafeAreaView style={styles.screen}>
        <ScrollView style={{backgroundColor: '#fff'}}>
          <Banner
            bgImage={images.kashbanner}
            logo={images.bannerlogo}
            text={
              'WELCOME TO "SAFAR",YOUR ONE STOP DESTINATION TO ALL INDIA TOURISM'
            }
          />

          <Text style={styles.heading}>Why Safar? How are we unique?</Text>
          <Text style={styles.desc}>
            Safar is India's only travel website that brings to you all the
            information of all the Indian states that is required to plan a
            travel destination under a single platform. We don't want you to
            take the load of searching things individually.No need to type and
            search over the aspects individually, we have got them covered.From
            about the "Best Destinations" to "Best Time To Travel" to "Best
            Route To Start" to "What package to expect", we have got all your
            answers covered.Safar is a statewise search destination planner, so
            if you just know the place and not the state please use our "Help Me
            Search My state" feature available under the "Explore" section. We
            seldom visit just a 'particular' place;rather we tend to visit all
            the nearby sites.So we have categorized all the sites, into either
            "Most Important" or "Somewhat important",in case you are a busy
            traveller and what to skip😉.
          </Text>
          <Image
            source={images.svg}
            style={{margin: 10, width: '90%', height: 500}}
          />
          <Footer
            footerHeadline={' This app is created and maintained by'}
            footerDescription={
              'All the images and text are subject to copyright. The information shown in each page are comprehensively calculated and are updated regularly. Do not forget to check the link to Official State Tourism site before finalizing your tour plan.'
            }
            linkText={'Rajdip Mondal'}
            linkURL={profile}
            buttonText={'VISIT WEBSITE'}
            buttonURL={website}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

Home.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Home;
