import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {StateCard,TourDetails} from '../../components/Shared';
import styles from '../../assets/styles';
import images from '../../assets/images';
import colors from '../../assets/colors';

//import LinearGradient from 'react-native-linear-gradient';

const Maharashtra = () => {
  const mustvisit = [
    {
      place: 'Ajanta ellora caves - cave painting and sculptures',
    },
    {
      place: 'Mahabaleshwar - west ghats famous for strawberries',
    },
    {
      place:
        'Alibag - coastal town with sandy beaches and fresh unpolluted air',
    },
    {
      place: 'Lavasa - newest hill station of India',
    },
    {
      place: 'Shirdi - home of great saint sai baba',
    },
    {
      place: 'Aurangabad - mini Taj mahal destination',
    },
    {
      place: 'Bhandardara - has all the nature blessings',
    },
    {
      place: 'Pune - education town',
    },
    {
      place: 'Gangatipule - temple of lord ganesha along the coastal line',
    },
    {
      place: 'Kashid - konkan coast with white sand and blue water beaches',
    },
    {
      place: 'Tarkarli - maharashtra popular sea fort',
    },
    {
      place:
        'Raigad - historically rich as chatrapati Shivaji maharaj won this place in 1656',
    },
    {
      place: 'Tadoba national park - famous for tigers',
    },
    {
      place: 'Nagpur - juicy variety of mangoes',
    },
    {
      place: 'Malvan - sindhudurg fort of chatrapati Shivaji maharaj',
    },
    {
      place: 'Kolhapur - mahalaxmi temple',
    },
    {
      place: 'Chiplun - mango groves next to lake vashishti',
    },
    {
      place: 'Chikhaldara - only coffee growing area with panoramic viewpoints',
    },
    {
      place: 'Ratnagiri - hills,sea shores, hot water springs',
    },
  ];

  const unimportant = [
    {
      place:
        'Panchgani - five hills surrounding this place famous for sunrise and sunset points',
    },
    {
      place: 'Lonavala - famous hill station for hiking',
    },
    {
      place: 'Rajmachi - Fortified peaks',
    },
    {
      place: 'Khandala - scenic green valleys',
    },
    {
      place: 'Nashik - religious hindu city',
    },
    {
      place: 'Kolad - adventure spot for water rafting',
    },
    {
      place: 'Kamshet - paragliding activities',
    },
    {
      place: 'Bhimashankar - jyotirlingam shrines of lord Shiva',
    },
    {
      place: 'Suryamal - higgest peak of the region located in thane',
    },
    {
      place: 'Dapoli',
    },
    {
      place: 'Malshej ghat',
    },
  ];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.mahabanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Maharashtra</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.mahamap} style={styles.map} />
          <TourDetails
            duration={'5 nights and 6 days'}
            cost={'Within 27,000'}
            months={
              'October to March are peak seasons, although you can plan all the year along'
            }
            route={
              'Mumbai - Nashik - Pune - Solapur - Kolhapur - Amboli - harihareshwar - Alibag - Lonavala - Matheran - Malvan - Ratnagiri'
            }
          />
          <Image source={images.maha2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Maharashtra</Text>
            <Text style={styles.details}>
              Maharashtra attracts tourists from different states and foreign
              countries. It was the second most visited Indian state by
              foreigners and fourth most visited state by domestic tourists in
              the country in 2014. Aurangabad is the tourism capital of
              Maharashtra. Major urban cities include : Mumbai, Pune, Nashik,
              Aurangabad and Nagpur.
            </Text>
          </View>
          <Image source={images.maha3} style={styles.img} />
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
                'https://www.google.com/search?biw=1366&bih=625&tbm=isch&sxsrf=ACYBGNTuXGKfW8fSYHUQTKUP0hmEQVvOgw%3A1579419637463&sa=1&ei=9QckXoH5G9yc4-EP6taIiAM&q=maharashtra+tourism&oq=maharashtra&gs_l=img.1.1.35i39j0i67l4j0l2j0i67l3.6303.11762..13468...1.0..4.1326.11201.5-13j2j1......0....1..gws-wiz-img.....10..0i7i30j0i24j35i362i39j0i131.xB-4ZUhKSu4'
              }
              linkdesc={'Maharashtra images'}
              description={
                'Find out the images of these places from extensive gallery.'
              }
            />
            <StateCard
              heading={'Maharashtra tourism official website'}
              link={'https://www.maharashtratourism.gov.in/'}
              linkdesc={'Official maharashtra tourism website'}
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

Maharashtra.options = {
  topBar: {
    title: {
      text: 'Maharashtra',
      color: 'white',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Maharashtra;
