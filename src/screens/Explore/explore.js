import React from 'react';
import {View, Text, ScrollView, Dimensions, FlatList} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {ContentBox, MapView} from '../../components/Explore';
import images from '../../assets/images';

const Explore = props => {
  const placesData = [
    {
      Statename: 'Kashmir',
      image: images.kash4,
      screenName: 'Kashmir',
    },
    {
      Statename: 'Himachal Pradesh',
      image: images.him4,
      screenName: 'Himachal',
    },
    {
      Statename: 'Punjab',
      image: images.pun4,
      screenName: 'Punjab',
    },
    {
      Statename: 'Delhi-Haryana',
      image: images.del4,
      screenName: 'Delhi',
    },
    {
      Statename: 'Rajasthan',
      image: images.raj4,
      screenName: 'Rajasthan',
    },
    {
      Statename: 'Gujrat',
      image: images.guj4,
      screenName: 'Gujrat',
    },
    {
      Statename: 'Maharashtra',
      image: images.maha4,
      screenName: 'Maharashtra',
    },
    {
      Statename: 'Karnataka',
      image: images.kar4,
      screenName: 'Karnataka',
    },
    {
      Statename: 'Goa',
      image: images.goa4,
      screenName: 'Goa',
    },
    {
      Statename: 'Kerala',
      image: images.ker4,
      screenName: 'Kerala',
    },
    {
      Statename: 'Tamil Nadu',
      image: images.tam4,
      screenName: 'TamilNadu',
    },
    {
      Statename: 'Andhra Pradesh',
      image: images.andh4,
      screenName: 'Andhra',
    },
    {
      Statename: 'Telengana',
      image: images.tel4,
      screenName: 'Telen',
    },
    {
      Statename: 'Madhya Pradesh',
      image: images.madh4,
      screenName: 'Madhya',
    },
    {
      Statename: 'Chattisgarh',
      image: images.cha4,
      screenName: 'Chattis',
    },
    {
      Statename: 'Orissa',
      image: images.ori4,
      screenName: 'Orissa',
    },
    {
      Statename: 'Jharkhand',
      image: images.jha4,
      screenName: 'Jharkhand',
    },
    {
      Statename: 'Bihar',
      image: images.bi4,
      screenName: 'Bihar',
    },
    {
      Statename: 'Bengal',
      image: images.ben4,
      screenName: 'Bengal',
    },
    {
      Statename: 'Sikkim',
      image: images.si4,
      screenName: 'Sikkim',
    },
    {
      Statename: 'Assam',
      image: images.as4,
      screenName: 'Assam',
    },
    {
      Statename: 'Uttar Pradesh',
      image: images.up4,
      screenName: 'Up',
    },
    {
      Statename: 'Uttarakhand',
      image: images.uk4,
      screenName: 'Uttarakhand',
    },
    {
      Statename: 'Meghalaya',
      image: images.megh4,
      screenName: 'Meghalaya',
    },
    {
      Statename: 'Manipur',
      image: images.mani4,
      screenName: 'Manipur',
    },
    {
      Statename: 'Tripura',
      image: images.tri4,
      screenName: 'Tripura',
    },
    {
      Statename: 'Mizoram and Nagaland',
      image: images.mizo4,
      screenName: 'Mizonaga',
    },
    {
      Statename: 'Arunachal Pradesh',
      image: images.aru4,
      screenName: 'Aru',
    },
  ];
  return (
    <View
      style={{
        height: 'auto',
        width: Dimensions.get('screen').width,
        backgroundColor: '#ffd300',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ScrollView>
        <FlatList
          data={placesData}
          renderItem={({item}) => {
            return (
              <ContentBox
                label={item.Statename}
                bgImage={item.image}
                onPress={() => {
                  Navigation.push(props.componentId, {
                    component: {
                      name: item.screenName,
                    },
                  });
                }}
              />
            );
          }}
        />

        <Text>
          Know the place but don't know the state? Use our{' '}
          <Text style={{fontWeight: 'bold'}}>Help Me Search My state</Text>{' '}
          feature below. Type the initials of the place and find it in the map.
        </Text>

        <MapView />
      </ScrollView>
    </View>
  );
};

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#50807D',
  },
  topBar: {
    title: {
      color: 'white',
    },
    background: {
      color: '#50807D',
    },
  },
  bottomTab: {
    background: {
      color: '#e33745',
    },
    title: {
      color: '#ffffff',
      fontSize: 14,
      selectedFontSize: 14,
    },
  },
});

export default Explore;
