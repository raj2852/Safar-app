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
import {Header} from '../../components/Shared';
import styles from '../../assets/styles';
import images from '../../assets/images';

//import LinearGradient from 'react-native-linear-gradient';

const Delhi = () => {
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
    <View style={styles.screen}>
      <Header />
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.punbanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Delhi-Haryana</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.punmap} style={styles.map} />
          <Image source={images.pun2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Delhi</Text>
            <Text style={styles.details}></Text>
            <Text style={styles.h3}>About Haryana</Text>
            <Text style={styles.details}>
            </Text>
          </View>
          <Image source={images.pun3} style={styles.img} />
          <View style={styles.places}>
            <Text style={styles.h3}>#Must visit places</Text>
            <Text style={styles.details}>
              <SafeAreaView>
              <FlatList
                data={mustvisit}
                renderItem={({item}) => {
                  return (
                    <Text>  
                        <View style={styles.dot1} />
                        <Text style={styles.placesitem}>  {item.place}</Text>
                    </Text>
                  );
                }}
              />
              </SafeAreaView>
            </Text>
          </View>
          <View style={styles.places}>
            <Text style={styles.h3}>Not so important</Text>
            <Text style={styles.details}>
              <SafeAreaView>
            <FlatList
                data={unimportant}
                renderItem={({item}) => {
                  return (
                    <View>
                      <Text>
                        <View style={styles.dot2} />
                        <Text style={styles.placesitem}>  {item.place}</Text>
                      </Text>
                    </View>
                  );
                }}
              />
              </SafeAreaView>
              </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Delhi;