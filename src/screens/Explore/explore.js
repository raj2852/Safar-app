import React from 'react';
import {View, Text, ScrollView, Dimensions, FlatList} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {ContentBox, MapView} from '../../components/Explore';
import images from '../../assets/images';
import colors from '../../assets/colors';

const Explore = props => {
  const placesData = [
    {
      Statename: 'Kashmir - a state from the north',
      image: images.kash4,
      screenName: 'Kashmir',
    },
    {
      Statename: 'Himachal Pradesh - a state from the north',
      image: images.him4,
      screenName: 'Himachal',
    },
    {
      Statename: 'Punjab - a state from the north',
      image: images.pun4,
      screenName: 'Punjab',
    },
    {
      Statename: 'Delhi-Haryana - a state from the north',
      image: images.del4,
      screenName: 'Delhi',
    },
    {
      Statename: 'Rajasthan - a state from the north-west',
      image: images.raj4,
      screenName: 'Rajasthan',
    },
    {
      Statename: 'Gujrat - a state from the west',
      image: images.guj4,
      screenName: 'Gujrat',
    },
    {
      Statename: 'Maharashtra - a state from the south-west',
      image: images.maha4,
      screenName: 'Maharashtra',
    },
    {
      Statename: 'Karnataka - a state from the south-west',
      image: images.kar4,
      screenName: 'Karnataka',
    },
    {
      Statename: 'Goa - a state from the south',
      image: images.goa4,
      screenName: 'Goa',
    },
    {
      Statename: 'Kerala - a state from the south',
      image: images.ker4,
      screenName: 'Kerala',
    },
    {
      Statename: 'Tamil Nadu - a state from the south',
      image: images.tam4,
      screenName: 'TamilNadu',
    },
    {
      Statename: 'Andhra Pradesh - a state from the south-east',
      image: images.andh4,
      screenName: 'Andhra',
    },
    {
      Statename: 'Telengana - a state from the south-east',
      image: images.tel4,
      screenName: 'Telen',
    },
    {
      Statename: 'Madhya Pradesh - a state from the central',
      image: images.madh4,
      screenName: 'Madhya',
    },
    {
      Statename: 'Chattisgarh - a state from the central',
      image: images.cha4,
      screenName: 'Chattis',
    },
    {
      Statename: 'Orissa - a state from the south-east',
      image: images.ori4,
      screenName: 'Orissa',
    },
    {
      Statename: 'Jharkhand - a state from the central',
      image: images.jha4,
      screenName: 'Jharkhand',
    },
    {
      Statename: 'Bihar - a state from the east',
      image: images.bi4,
      screenName: 'Bihar',
    },
    {
      Statename: 'Bengal - a state from the east',
      image: images.ben4,
      screenName: 'Bengal',
    },
    {
      Statename: 'Sikkim - a state from the north-east',
      image: images.si4,
      screenName: 'Sikkim',
    },
    {
      Statename: 'Assam - a state from the north-east',
      image: images.as4,
      screenName: 'Assam',
    },
    {
      Statename: 'Uttar Pradesh - a state from the north',
      image: images.up4,
      screenName: 'Up',
    },
    {
      Statename: 'Uttarakhand - a state from the north',
      image: images.uk4,
      screenName: 'Uttarakhand',
    },
    {
      Statename: 'Meghalaya - a state from the north-east',
      image: images.megh4,
      screenName: 'Meghalaya',
    },
    {
      Statename: 'Manipur - a state from the north-east',
      image: images.mani4,
      screenName: 'Manipur',
    },
    {
      Statename: 'Tripura - a state from the north-east',
      image: images.tri4,
      screenName: 'Tripura',
    },
    {
      Statename: 'Mizoram and Nagaland - a state from the north-east',
      image: images.mizo4,
      screenName: 'Mizonaga',
    },
    {
      Statename: 'Arunachal Pradesh - a state from the north-east',
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
    backgroundColor: colors.statusColor,
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

Explore.options = {
  topBar: {
    title: {
      text: 'Explore',
      fontWeight: "bold",
      color: 'black',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Explore;
