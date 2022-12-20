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

const Andhra = () => {
  const mustvisit = [
    {
      place:
        'Tirupati - ancient and sacred pilgrimage sites in India, lord Venkateshwara, Annavaram',
    },
    {
      place: 'Vizag - scenic beauty of the beach and fish cultivation',
    },
    {
      place: 'Araku valley - hill station with majestic caves(borra caves)',
    },
    {
      place: 'Srisailam - srisailam dham',
    },
    {
      place: 'Amaravati - pilgrimage for the buddhists',
    },
    {
      place: 'Ananthagiri - ideal place for nature lovers',
    },
    {
      place:
        'Vijayawada - scrumptious fruits, sensational; sweets and scenic marvels',
    },
    {
      place: 'Anantapur - Glows with Indian history',
    },
    {
      place:
        'Kurnool - historic value with beautiful surrounding areas,Mantralayam(holy town),Rollapur wildlife sanctuary,Yaganthi - perfect way to feel the Andhra Pradesh tourism',
    },
    {
      place: 'Chittoor - religion, devotion and architecture, Kaigai falls',
    },
    {
      place:
        'Kakinada - perfect blend of cosmopolitan lifestyle and old world charm',
    },
    {
      place: 'Nellore - city on the banks of river Penna',
    },
    {
      place: 'Gandikota - belum caves and ruins of gandikota fort',
    },
    {
      place:
        'Lepakshi - several fascinating archeological sites and beautiful ancient temples',
    },
    {
      place:
        'Rajahmundy - founded by raja chalukya king raja raja Narendra after whom it was named.',
    },
    {
      place: 'Puttaparthi - archyphal figure of Saythya Sai Baba',
    },
    {
      place: 'Nagarjunakonda - nagarjuna sagar reservior',
    },
    {
      place: 'Horsley hills - ooty of AndhraPradesh',
    },
    {
      place: 'Rishikonda beach',
    },
    {
      place: 'Coringa wildlife sanctuary',
    },
    {
      place: 'Madedumilli',
    },
    {
      place: 'Oravakallu rock garden - igneous rock stretch',
    },
    {
      place: 'Ahobilam temple - lord narashimha swamy temple',
    },
    {
      place: 'Rayadurg - Brim with monuments harbouring rich cultural heritage',
    },
    {
      place: 'Nagalapuram - hidden like a jewel behind the lush green forests of Andhra pradesh',
    },
    {
      place: 'Lambasingi - Kashmir of Andhra pradesh',
    }
  ];

const unimportant = [
  {
    place: 'Guntur - culturally diverse civil center',
  },
  {
    place: 'Vizianagaram - picturesque vistas, cultural heritage',
  },
  {
    place: 'Samalkot - holy place for devotees of lord Shiva',
  },
  {
    place: 'Bhavani Island - Vijaywada',
  },
  {
    place: 'Draksharamam - most powerful and prominent temples of lord shiva',
  },
  {
    place: 'Tadipatri - Ancient temples with relics from centuries',
  },
];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.andhbanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Andhra Pradesh</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.andhmap} style={styles.map} />
          <TourDetails
            duration={'5 nights and 6 days'}
            cost={'Within 15,000'}
            months={'Winter months from december to mid-march'}
            route={
              'Hyderabad - Gulberga - Bijapur - Badami - Hospet - Hassan - Belur - Halebeed'
            }
          />
          <Image source={images.andh2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Andhra</Text>
            <Text style={styles.details}>
              Andhra Pradesh Tourism Development Corporation (APTDC) is a state
              government agency which promotes tourism in Andhra Pradesh,
              describing the state as the Koh-i-Noor of India. Andhra Pradesh
              has a variety of tourist attractions including beaches, hills,
              caves, wildlife, forests and temples.
            </Text>
          </View>
          <Image source={images.andh3} style={styles.img} />
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
                'https://www.google.com/search?q=andhra+pradesh+tourism&sxsrf=ACYBGNScQuUs7_niMzd0N39n6YLmRQ4HhQ:1579611170719&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjT3dqV3pTnAhULH7cAHXCDBoEQ_AUoAnoECBMQBA'
              }
              linkdesc={'Andhra Pradesh images'}
              description={
                'Find out the images of these places from extensive gallery.'
              }
            />
            <StateCard
              heading={'Andhra Pradesh tourism official website'}
              link={'https://tourism.ap.gov.in/home'}
              linkdesc={'Official Andhra Pradesh tourism website'}
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

Andhra.options = {
  topBar: {
    title: {
      text: 'Andhra pradesh',
      color: 'white',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Andhra;
