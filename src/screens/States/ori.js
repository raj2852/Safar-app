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

const Orrisa = () => {
  const mustvisit = [
    {
      place:
        'Puri - one of the four must visit pilgrimage sites for hindus,beach city with Jagannath temple as main attraction',
    },
    {
      place: 'Bhubaneshwar - temple city of India',
    },
    {
      place: 'Konark - Konark dance festival and the sun temple',
    },
    {
      place: 'Cuttack - culture capital of Orissa',
    },
    {
      place: 'Baripada - city known for rath yatra',
    },
    {
      place: 'Gopalpur - one of the best beaches of the eastern coastline',
    },
    {
      place: 'Sambalpur - temple devoted to devi samaleshwari',
    },
    {
      place: 'Hirakud dam - longest man made dam',
    },
    {
      place: 'Talsari - place where the subarnarekha river meets with the Bay of Bengal',
    },
    {
      place: 'Tikarpada wildlife sanctuary',
    },
    {
      place: 'Jeypore - fresh water likes, waterfalls and valleys',
    },
    {
      place: 'Dhauli - Located on the bank of river daya,holds a great signifance for followers of Lord Buddha',
    },
    {
      place: 'Chilika lake - largest salt water lake in Asia,paradise on earth for bird watches',
    },
    {
      place: 'Simplipal national park',
    },
    {
      place: 'Daringbari - surprise hill station with pine wood trees',
    },
    {
      place: 'Khandagiri caves - artificial caves which date back to 2nd century',
    },
  ];

const unimportant = [
  {
    place:
      'Rayagada - Rich history and a distinct culture with local tribal culture',
  },
  {
    place: 'Chandipur',
  },
  {
    place: 'Rourkela - largest steel city of orissa',
  },
  {
    place: 'Behampore - known as brahmapur is famous for its silk textiles',
  }
];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.oribanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Orrisa</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.orimap} style={styles.map} />
          <TourDetails
            duration={'5 nights and 6 days'}
            cost={'Within 15,000'}
            months={
              'Winter(between November and February).but the best time would be when the festivals occur, that is during May'
            }
            route={
              'Bhubaneshwar - Pipli - Hirapur - Dhauli - Shiva temple - Sun temple(Konark) - Chanfrabhaga beach - Puri - nandankanan - Chilka lake'
            }
          />
          <Image source={images.ori2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Orrisa</Text>
            <Text style={styles.details}>
              Odisha, India, with a 500 km (310 mi) long coastline, towering
              mountains, serene lakes and frolicking rivers. Odisha is one of
              the major tourism sectors of India, with various tourists'
              attractions, ranging from wildlife reserves, beaches, temples,
              monuments, the arts and festivals. Other than wildlife reserves,
              beaches, temples, monuments, the arts and festivals, the Odisha
              Tourism Development Corporation, a Public Sector Undertaking of
              Government of Odisha, is also developing tourism sector of Odisha
              and India.
            </Text>
          </View>
          <Image source={images.ori3} style={styles.img} />
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
              link={
                'https://www.google.com/search?q=orissa+tourism&sxsrf=ACYBGNSICR4zQ3H1WNlLrzZsHGgcPgZ7gA:1579775145098&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjY0eSCwZnnAhXIyzgGHYGoD0AQ_AUoAXoECBMQAw&biw=1366&bih=576'
              }
              linkdesc={'Orissa images'}
              description={
                'Find out the images of these places from extensive gallery.'
              }
            />
            <StateCard
              heading={'Orrisa tourism official website'}
              link={'https://odishatourism.gov.in/content/tourism/en.html'}
              linkdesc={'Official Orrisa tourism website'}
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

Orrisa.optiosn = {
  topBar: {
    title: {
      text: 'Orissa',
      color: 'white',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Orrisa;
