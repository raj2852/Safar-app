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
import Header from './Header';
import styles from './styles';
import images from '../images/images';

//import LinearGradient from 'react-native-linear-gradient';

const Assam = () => {
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
          <ImageBackground source={images.andhbanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Andhra</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.andhmap} style={styles.map} />
          <Image source={images.andh2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Andhra</Text>
            <Text style={styles.details}></Text>
          </View>
          <Image source={images.andh3} style={styles.img} />
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

export default Assam;
