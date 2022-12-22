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

const Kerala = () => {
  const mustvisit = [
    {
      place: 'Alleppey - The backwater hot spot',
    },
    {
      place: 'Munnar - perfect for a romantic honeymoon',
    },
    {
      place: 'Kumarakom - one of the most tranquil places',
    },
    {
      place: 'Wayanad - the land of heavenly trails',
    },
    {
      place: 'Thekkady - for the love of wildlife',
    },
    {
      place: 'Kovalam - for some beach fun',
    },
    {
      place: 'Vagamon - solitude guaranteed',
    },
    {
      place: 'Bekal - nothing less than heaven on earth',
    },
    {
      place: 'Kozhikode - for authentic malabar cuisine',
    },
    {
      place: 'Varkala - one of the most scenic seaside in Kerala',
    },
    {
      place: 'Kannur - the picture perfect coastal town',
    },
    {
      place: 'Kasargod - A coastal paradise in kerala',
    },
    {
      place: 'Kizhunna beach - for complete solace',
    },
    {
      place: 'Idukki - the true gem of Kerala',
    },
    {
      place: 'Munroe Island - for an exciting canal cruise',
    },
    {
      place: 'Kavvayi backwaters - the stunning backwater landscape',
    },
    {
      place: 'Kuttanad - rice bowl of kerala',
    },
    {
      place: 'Thrissur - rich cultural heritage',
    },
    {
      place: 'Palakkad - a nature delight',
    },
    {
      place: 'Mallapuram - vedic learning and islamic philosophy learning',
    },
    {
      place: 'Poovar - the tropical stay paradise',
    },
    {
      place: 'Guruvayur - spiritual spot',
    },
    {
      place: 'Cochin - major port city',
    },
    {
      place: 'Ponmudi - the golden spot',
    },
    {
      place: 'Malampuzha - spice capital of India',
    },
    {
      place: 'Nelliampathy - God own village',
    },
    {
      place: 'Thiruvananthapuram',
    },
    {
      place: 'Sabarimalla',
    },
    {
      place: 'Kollam - treasure of natural marvels',
    },
    {
      place: 'Nilambur - Land of teak plantation',
    },
    {
      place: 'Thenmala - planned ecotourism',
    },
  ];

const unimportant = [
  {
    place: 'Asthamudi - natural beauty',
  },
  {
    place: 'Marari - gorgeous beach',
  },
  {
    place: 'Thalassery - coastal town',
  },
  {
    place: 'Kalpetta - Quaint little town',
  },
  {
    place: 'Peermedu',
  },
  {
    place: 'Mannarkkad - silent valley',
  },
  {
    place: 'Kottayam',
  },
  {
    place: 'Devikulam - Lake with a legend',
  },
  {
    place: 'Tholpetty - wildlife',
  },
];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.kerbanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Kerala</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.kermap} style={styles.map} />
          <TourDetails
            duration={'8 days and 7 nights'}
            cost={'Within 25,000'}
            months={
              'Winter season(Between september and march).Also monsoon season between june to august offer great visual retreats'
            }
            route={
              'Cochin - Trivandrum - Kanyakumari - Kovalam - Munnar - Thekkady - Allepy.Other locations are nearby from allepy.'
            }
          />
          <Image source={images.ker2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Kerala</Text>
            <Text style={styles.details}>
              Kerala, a state situated on the tropical Malabar Coast of
              southwestern India, is one of the most popular tourist
              destinations in the country. Named as one of the ten paradises of
              the world by National Geographic Traveler, Kerala is famous
              especially for its ecotourism initiatives and beautiful
              backwaters.Kerala is an established destination for both domestic
              as well as foreign tourists. Kerala is well known for its beaches,
              backwaters in Alappuzha and Kollam, mountain ranges and wildlife
              sanctuaries. Other popular attractions in the state include the
              beaches at Kovalam, Varkala, Kollam and Kappad; backwater tourism
              and lake resorts around Ashtamudi Lake, Kollam; hill stations and
              resorts at Munnar, Wayanad, Nelliampathi, Vagamon and Ponmudi; and
              national parks and wildlife sanctuaries at Periyar, Parambikulam
              and Eravikulam National Park. The "backwaters" region—an extensive
              network of interlocking rivers, lakes, and canals that centre on
              Ashtamudi Lake, Kollam, also see heavy tourist traffic. Heritage
              sites, such as the Padmanabhapuram Palace, Hill Palace, and
              Mattancherry Palace, are also visited. The city of Kochi ranks
              first in the total number of international and domestic tourists
              in Kerala. To further promote tourism in Kerala, the Grand Kerala
              Shopping Festival was started by the Government of Kerala in 2007.
              Since then it has been held every year during the December–January
              period.
            </Text>
          </View>
          <Image source={images.ker3} style={styles.img} />
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
                'https://www.google.com/search?q=kerala+tourism&tbm=isch&sxsrf=ACYBGNTjjk64aSsaE7mKYflEQLoZ4t-f6w:1579535193731&source=lnms&sa=X&ved=0ahUKEwj_rIeRw5LnAhXDyDgGHU_xAcAQ_AUICigB&biw=1366&bih=625&dpr=1'
              }
              linkdesc={'Kerala images'}
              description={
                'Find out the images of these places from extensive gallery.'
              }
            />
            <StateCard
              heading={'Kerala tourism official website'}
              link={'https://www.keralatourism.org/'}
              linkdesc={'Official kerala tourism website'}
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

Kerala.options = {
  topBar: {
    title: {
      text: 'Kerala',
      color: 'black',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Kerala;
