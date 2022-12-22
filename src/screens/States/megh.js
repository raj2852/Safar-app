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
import {StateCard,TourDetails} from '../../components/Shared';
import styles from '../../assets/styles';
import images from '../../assets/images';
import colors from '../../assets/colors';

//import LinearGradient from 'react-native-linear-gradient';

const Meghalaya = () => {
  const mustvisit = [
    {
      place: "Shillong - capital of meghalaya",
    },
    {
      place: "Mawsynram - the place where the highest rainfall of the world is recorded",
    },
    {
      place: "Cherapunji - clean green surroundingswith naturally formed tree bridges (double decker living root bridge)",
    },
    {
      place: "Tura - explored town of natural beauty",
    },
    {
      place: "Jowai - in the jaintia hills famous for the scenic and breathtaking views",
    },
    {
      place: "Elephant falls - named after an elephant like stone at the top of the waterfalls, it is a paradise for waterfall lovers",
    },
    {
      place: "Nonkalikai waterfalls - fourth highest waterfall in the world",
    },
    {
      place: "Mawsmai cave - home to some amazing and mysterious cave systems, a part of the east khasi hills",
    },
    {
      place: "Mawlynnong - small village in the east khasi hills, known as God's own garden",
    },
    {
      place: "Umiam lake - mesmerizing man made reserviour. this was actually a dam constructed to generate hydroelectricity",
    },
    {
      place: "Dawki - a small border town in the jaintia hills,dawki and river umngot is a must visit",
    },
    {
      place: "Kyllang rock - is actually a giant piece of granite rock beautiful in it's shape",
    },
    {
      place: "Nohsngithiang falls - at a distance of 4 km from cherapunji this place has one of the tallest waterfalls in India and major tourist spot",
    },

  ];

const unimportant = [
  {
    place: "Nongpoh - favourite stopover destination for tourists",
  },
  {
    place: "Williamnagar - large plains of river simsang",
  },
  {
    place: "Baghmara - rich in flora and fauna",
  },
  {
    place: "Balpakram national park",
  },
  {
    place: "Jaintia hills - sacred pristine patch of hillrocks and forests",
  },
  {
    place: "Garo hills - famous for the garo tribes who believe in nature and folklore",
  },
];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.meghbanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Meghalaya</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.meghmap} style={styles.map} />
          <TourDetails
            duration={'3 nights and 4 days'}
            cost={'Within 17,000'}
            months={'Between October and June and also between March and June'}
            route={'Shillong - East khasi hills - jaintia hills - Nongpoh - West khasi hills - Garo hills - West garo hills'}/>
          <Image source={images.megh2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Meghalaya</Text>
            <Text style={styles.details}>Meghalaya is a hilly state in northeastern India. The name means "the abode of clouds" in Sanskrit. The population of Meghalaya as of 2016 is estimated to be 3,211,474.Meghalaya covers an area of approximately 22,430 square kilometres, with a length to breadth ratio of about 3:1.The state is bounded to the south by the Bangladeshi divisions of Mymensingh and Sylhet, to the west by the Bangladeshi division of Rangpur, and to the north and east by India's State of Assam. The capital of Meghalaya is Shillong. During the British rule of India, the British imperial authorities nicknamed it the "Scotland of the East". Meghalaya was previously part of Assam, but on 21 January 1972, the districts of Khasi, Garo and Jaintia hills became the new state of Meghalaya. English is the official language of Meghalaya. Unlike many Indian states, Meghalaya has historically followed a matrilineal system where the lineage and inheritance are traced through women; the youngest daughter inherits all wealth and she also takes care of her parents.The state is the wettest region of India, recording an average of 12,000 mm (470 in) of rain a year.About 70% of the state is forested.The Meghalaya subtropical forests ecoregion encompasses the state; its mountain forests are distinct from the lowland tropical forests to the north and south. The forests are notable for their biodiversity of mammals, birds, and plants.Meghalaya has predominantly an agrarian economy with a significant commercial forestry industry. The important crops are potatoes, rice, maize, pineapples, bananas, papayas, spices, etc. The service sector is made up of real estate and insurance companies. Meghalaya's gross state domestic product for 2012 was estimated at ₹16,173 crore (US$2.3 billion) in current prices.The state is geologically rich in minerals, but it has no significant industries.The state has about 1,170 km (730 mi) of national highways. It is also a major logistical center for trade with Bangladesh.</Text>
          </View>
          <Image source={images.megh3} style={styles.img} />
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
              link={'https://www.google.com/search?q=meghalaya+tourism&sxsrf=ACYBGNTYyBUDSWDqI4mYjuqYbkpyWQOGZQ:1581518743613&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjkp6y3oMznAhUUdCsKHdApANMQ_AUoAXoECBQQAw&biw=1366&bih=625'}
              linkdesc={'Meghalaya images'}
              description={
                'Find out the images of these places from extensive gallery.'
              }
            />
            <StateCard
              heading={'Meghalaya tourism official website'}
              link={'https://www.meghalayatourism.in/'}
              linkdesc={'Official meghalaya tourism website'}
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

Meghalaya.options = {
  topBar: {
    title: {
      text: 'Meghalaya',
      color: 'black',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Meghalaya;
