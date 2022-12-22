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

const Rajasthan = () => {
  const mustvisit = [
    {
      place: 'Mehrangar fort - Jodhpur',
    },
    {
      place: 'The golden fort(sonar kella) - Jaisalmer',
    },
    {
      place: 'Saam desert - Jaisalmer',
    },
    {
      place: 'Mount Abu - Aravali range',
    },
    {
      place: 'Pushkar lake - Pushkar',
    },
    {
      place: 'Ajmer - The famous mosque of India',
    },
    {
      place: 'Udaipur - The lake city(Kashmir of rajasthan)',
    },
    {
      place: 'Chittor - The city of queen padmavati',
    },
    {
      place: 'Hawa mahal - jaipur',
    },
    {
      place: 'Albert hall - Jaipur',
    }
  ];

const unimportant = [
  {
    place: 'Osian - Ancient temple city of Jodhpur',
  },
  {
    place: 'umaid bhavan palace - voted as the best hotel in the world',
  },
  {
    place: 'Khur desert - Jaisalmer',
  },
  {
    place:
      'Bhangarh fort - historical ruins (most haunted place in the country)',
  },
  {
    place: 'Bikaner - famous for ports',
  },
  {
    place: 'Kota - the education hub of the country',
  },
  {
    place: 'Ranthambore - one of the best Tiger reserves of the country',
  },
  {
    place: 'Bharatpur - Keoladeo bird sanctuary',
  },
  {
    place: 'Deeg - beautiful gardens in bharatpur',
  },
  {
    place: 'Alwar - sariska van abhyaranya',
  },
  {
    place: 'Kumbhalgarh - best known for its huge citadel',
  },
  {
    place: 'Shekhawati - open art gallery of Rajasthan',
  },
  {
    place: 'Pilani - rich saga of the past',
  },
  {
    place: 'Bundi - royal state of rajasthan.',
  },
  {
    place: 'Neemrana - reign of the maharaja prithvi raj chauhan',
  },
  {
    place: 'Ranakpur - Small quaint town',
  },
  {
    place: 'Nathdwara - religious abode for hindus',
  },
  {
    place: 'Chand baori - humongousstep that lead to the water level that is almost 13 storays deep',
  },
  {
    place: 'Karauli - home of shri madanji(believed to be incarnation of lord krishna)',
  }
];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.rajbanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Rajasthan</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.rajmap} style={styles.map} />
          <TourDetails
            duration={'8 Nights and 9 days'}
            cost={'Within 30,000'}
            months={'October,November to february,March are peak seasons'}
            route={
              'Jodhpur - jaisalmer - Bikaner - Mt. Abu - Pushkar - Udaipur - Jaipur'
            }
          />
          <Image source={images.raj2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Rajasthan</Text>
            <Text style={styles.details}>
              Known as the place of the rajputs, Rajasthan also has many
              beautiful architectures of the past.The culture, music, folk
              stories all form an important part of this state.Once famous for
              the great warriors, rajasthan even now has their heirs
              dwelling.Come and enjoy the deserts and the Aravalli hills.
            </Text>
          </View>
          <Image source={images.raj3} style={styles.img} />
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
                'https://www.google.com/search?q=RAJASTHAN+TOURISM&sxsrf=ACYBGNTKIxkPomRsANGYA8MgVdnQ_9j0aw:1579416122486&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi9pLvHh4_nAhWKIbcAHS7YD0gQ_AUoAnoECBMQBA&biw=1366&bih=625'
              }
              linkdesc={'Rajasthan Images'}
              description={
                'Find out the images of these places from extensive gallery.'
              }
            />
            <StateCard
              heading={'Rajasthan tourism official website'}
              link={'https://www.tourism.rajasthan.gov.in/'}
              linkdesc={'official Rajasthan tourism site'}
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

Rajasthan.options = {
  topBar: {
    title: {
      text: 'Rajasthan',
      color: 'black',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Rajasthan;
