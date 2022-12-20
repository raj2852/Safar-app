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

const Manipur = () => {
  const mustvisit = [
    {
      place: "Senapati - blessed with nature's bounty, simple yet intriguing hideout, main attractions include: Dzukou valley,Chiru Waterfalls,Makhel cave",
    },
    {
      place: "Imphal - lush green landscapes and undulating rivers of Imphal",
    },
    {
      place: "Tamenglong - where the clouds kiss the mountain peaks,land of hornbills,Tharon caves",
    },
    {
      place: "Chandel - various tribes that live within the city on the mountain peaks",
    },
    {
      place: "Loktak lake and sendra island - largest fresh water lake in the country",
    },
    {
      place: "Andro - showcasing the glory of the local artists, main attractions: Shantheil natural park, Ecological park, kaina temple",
    },
    {
      place: "Leimaram - trio waterfalls",
    },
  ];

const unimportant = [
  {
    place: "Thoubal - pleasant relaxing weather, trekker's paradise",
  },
  {
    place: "Moirang - small town nested on the lake bank",
  },
  {
    place: "Khongjom - place to pay tribute to the military",
  },
  {
    place: "Ukhrul - place where tranquility prevails",
  },
  {
    place: "Churachandpur",
  },
];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.manibanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Manipur</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.manimap} style={styles.map} />
          <TourDetails
            duration={'3 nights 4 days'}
            cost={'Within 15,000'}
            months={'Winter is the best time ranging from October to March'}
            route={'East Imphal - Thoubal - Chandel - Ukhrul - Senapati - Tamelgong - Charachandpur - West Imphal'}/>
          <Image source={images.mani2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Manipur</Text>
            <Text style={styles.details}>Manipur is a state in northeastern India, with the city of Imphal as its capital. It is bounded by the Indian states of Nagaland to the north, Mizoram to the south, and Assam to the west; Myanmar (Sagaing Region and Chin State) lies to its east. The state covers an area of 22,327 square kilometres (8,621 sq mi) and has a population of almost 3 million, including the Meitei, who are the majority group in the state, the Pangals or the Pangans (Manipuri Muslims), Naga tribes, Kuki/Zo tribes and other communities, who speak a variety of Sino-Tibetan languages. Manipur has been at the crossroads of Asian economic and cultural exchange for more than 2,500 years.It has long connected the Indian subcontinent and Central Asia to Southeast Asia, China (or East Asia), Siberia (Russia), Micronesia and Polynesia, enabling migration of people, cultures, and religions.</Text>
          </View>
          <Image source={images.mani3} style={styles.img} />
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
        </View>
        <Text style={styles.h3}>More...</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            width: '150%',
            justifyContent: 'space-between',
          }}>
          <StateCard
            heading={'Images'}
            link={'https://www.google.com/search?q=MANIPUR+TOURISM&sxsrf=ACYBGNR72ycRbuLK_JfKcSy833aJk8q-_w:1581525331264&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiRzcr8uMznAhUJyjgGHf59DHoQ_AUoAXoECBQQAw&biw=1366&bih=625'}
            linkdesc={'Manipur images'}
            description={
              'Find out the images of these places from extensive gallery.'
            }
          />
          <StateCard
            heading={'Manipur tourism official website'}
            link={'https://manipurtourism.gov.in/'}
            linkdesc={'Official manipur tourism website'}
            description={
              'Learn about the latest developments in the state from the official tourism website and plan your trip accordingly.'
            }
          />
        </ScrollView>
      </ScrollView>
    </View>
  );
};

Manipur.options = {
  topBar: {
    title: {
      text: 'Manipur',
      color: 'white',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Manipur;
