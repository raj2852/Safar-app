import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
  FlatList,
  SafeAreaView
} from 'react-native';
import {StateCard} from '../../components/Shared';
import styles from '../../assets/styles';
import images from '../../assets/images';
import colors from '../../assets/colors';

//import LinearGradient from 'react-native-linear-gradient';

const uk = () => {
  const mustvisit = [
    {
      place: "",
    },
  ];

const unimportant = [
  {
    place: "",
  },
];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.andhbanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Uttarakhand</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.ukmap} style={styles.map} />
          <Image source={images.uk2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Uttarakhand</Text>
            <Text style={styles.details}></Text>
          </View>
          <Image source={images.uk3} style={styles.img} />
          <View style={styles.places}>
            <Text style={[styles.h3, {marginBottom: 6}]}>
              #Must visit places
            </Text>

            <SafeAreaView>
              <FlatList
                data={mustvisit}
                renderItem={({item}) => {
                  return (
                    <SafeAreaView>
                      <Text>
                        <View style={styles.dot1} />
                        <Text style={styles.placesitem}> {item.place}</Text>
                      </Text>
                    </SafeAreaView>
                  );
                }}
              />
            </SafeAreaView>
          </View>
          <View style={styles.places}>
            <Text style={[styles.h3, {marginBottom: 6}]}>Not so important</Text>

            <SafeAreaView>
              <FlatList
                data={unimportant}
                renderItem={({item}) => {
                  return (
                    <View>
                      <Text>
                        <View style={styles.dot2} />
                        <Text style={styles.placesitem}> {item.place}</Text>
                      </Text>
                    </View>
                  );
                }}
              />
            </SafeAreaView>
            <Text style={styles.h3}>More...</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <StateCard
                heading={'Images'}
                link={''}
                linkdesc={'Uttarakhand images'}
                description={
                  'Find out the images of these places from extensive gallery.'
                }
              />
              <StateCard
                heading={'Uttarakhand official tourism website'}
                link={''}
                linkdesc={'Official uttarakhand tourism website'}
                description={
                  'Learn about the latest developments in the state from the official tourism website and plan your trip accordingly.'
                }
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

uk.options = {
  topBar: {
    title: {
      text: 'Uttarakhand',
      color: 'white',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default uk;
