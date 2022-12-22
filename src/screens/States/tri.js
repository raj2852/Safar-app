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
import {StateCard, TourDetails} from '../../components/Shared';
import styles from '../../assets/styles';
import images from '../../assets/images';
import colors from '../../assets/colors';

//import LinearGradient from 'react-native-linear-gradient';

const Tripura = () => {
  const mustvisit = [
    {
      place: "Ujjayanta palace - royal palace situated at the core of Agartala.Te name of this place was given by Rabindranath tagore who used to visit here regularly",
    },
    {
      place: "Sepahijala wildlife sanctuary - home to the variety of birds and primates.",
    },
    {
      place: "Chittangong hills - mini mountain range with multiple valleys and a small canyon",
    },
    {
      place: "Tripura sundari temple - primitive artificial terracotta design temple",
    },
    {
      place: "Neemmahal - situated in the middle of rudrasagar lake,thus called water palace. Mainly famous as the summer resort of the king",
    },
    {
      place: "Ummaneshwar temple - west bengal cultured temple",
    },
    {
      place: "Gondacherra wildlife sanctuary - untained habitat for wildlife, mainly for the bisons.",
    },
    {
      place: "Jagannath temple - islamic style of architecture at the exterior with hindu worship",
    },
    {
      place: "Buddha temple - important religious site showing influence of buddhism on the people of tripura",
    },
    {
      place: "Raima valley - motherland of the tribals of tripura",
    },
  ];

const unimportant = [
  {
    place: "Jampui hills - eternal hills of spring having pleasant weather throughout the year",
  },
  {
    place: "Kunjaban palace - built by the king Birendra Kishore it is now the official residency of governor of Tripura",
  },
];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.tribanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Tripura</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.trimap} style={styles.map} />
          <TourDetails
            duration={'4 nights and 5 days'}
            cost={'Within 15,000'}
            months={'From October to May (ensure that you avoid the rainy season)'}
            route={'West tripura - Dhalai - Unakoti - North Tripura - South Tripura'}/>
          <Image source={images.tri2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Tripura</Text>
            <Text style={styles.details}>Tripura is a state in northeastern India. The third-smallest state in the country, it covers 10,491 km2 (4,051 sq mi) and is bordered by Bangladesh to the north,south, and west, and the Indian states of Assam and Mizoram to the east. In 2011 the state had 3,671,032 residents, constituting 0.3% of the country's population.The area of modern Tripura—ruled for several centuries by the Manikya dynasty—was part of an independent princely state under the protectorate of the British Empire. The independent Tripuri Kingdom (also known as Hill Tippera) joined the newly independent India in 1949. Tripura lies in a geographically disadvantageous location in India, as only one major highway, the National Highway 8, connects it with the rest of the country. Five mountain ranges—Boromura, Atharamura, Longtharai, Shakhan and Jampui Hills—run north to south, with intervening valleys; Agartala, the capital, is located on a plain to the west. The state has a tropical savanna climate, and receives seasonal heavy rains from the south west monsoon. Forests cover more than half of the area, in which bamboo and cane tracts are common. Tripura has the highest number of primate species found in any Indian state. Due to its geographical isolation, economic progress in the state is hindered. Poverty and unemployment continue to plague Tripura, which has a limited infrastructure. Most residents are involved in agriculture and allied activities, although the service sector is the largest contributor to the state's gross domestic product.</Text>
          </View>
          <Image source={images.tri3} style={styles.img} />
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
                    <SafeAreaView>
                      <Text>
                        <View style={styles.dot2} />
                        <Text style={styles.placesitem}> {item.place}</Text>
                      </Text>
                    </SafeAreaView>
                  );
                }}
              />
            </SafeAreaView>
          </View>
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
              link={'https://www.google.com/search?q=TRIPURA+TOURISM&sxsrf=ACYBGNR4-Ch1kD4aOnYD_jdVpW4Z_yfJjw:1581524903362&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiMvsWwt8znAhXPxjgGHeh8DkAQ_AUoAXoECBMQAw'}
              linkdesc={'Tripura images'}
              description={
                'Find out the images of these places from extensive gallery.'
              }
            />
            <StateCard
              heading={'Tripura tourism official website'}
              link={'https://tripuratourism.gov.in/'}
              linkdesc={'Official Tripura tourism website'}
              description={
                'Learn about the latest developments in the state from the official tourism website and plan your trip accordingly.'
              }
            />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

Tripura.options = {
  topBar: {
    title: {
      text: 'Tripura',
      color: 'black',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Tripura;
