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

const Jharkhand = () => {
  const mustvisit = [
    {
      place: "Ranchi - majestic waterfalls,tall tress, Mahindra Singh Dhoni's house",
    },
    {
      place: "Deoghar - one of the 1 jyotirlingas known as temple Baidyanath",
    },
    {
      place: "Jamshedpur - aesthetic infrastructure and landscapes",
    },
    {
      place: "Hazaribagh - dense forests and natural formations, rocks and lakes",
    },
    {
      place: "Netarhat -- queen of chotanagpur plateau,sunrise and sunset points",
    },
    {
      place: "Dhanbad - forests and hillrocks",
    },
    {
      place: "Betla national park - stunning to forts inside the premises",
    },
    {
      place: "Dasham falls - spectacular waterfall from a tribunary of subarnarekha river",
    },
    {
      place: "Shikharji - parasnath hills",
    },
  ];

const unimportant = [
  {
    place: "Bokaro - steel city with lakes and greenary",
  },
  {
    place: "Ghatsila - place where kolkata culture meets jharkhand",
  },
];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.jhabanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Jharkhand</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.jhamap} style={styles.map} />
          <TourDetails
            duration={'5 nights and 6 days'}
            cost={'Within 20,000'}
            months={'July to March is the best time'}
            route={'Ranchi - Betla - Hazaribagh - Jamshedpur'}/>
          <Image source={images.jha2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Jharkhand</Text>
            <Text style={styles.details}>Jharkhand is known for its waterfalls, hills and holy places.parasnath, Baidyanath Dham and Rajrappa are major religious places. The Bhadrakali temple in Itkhori built in 9th century A.D. The buddisht stupas of Itkhori goes backs to 200 BC. It is holy place for Hindus, Buddisht and Jain</Text>
          </View>
          <Image source={images.jha3} style={styles.img} />
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
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <StateCard
            heading={'Images'}
            link={'https://www.google.com/search?q=JHARKHAND+TOURISM&sxsrf=ACYBGNQp1GqgieRVac5JjHgBQmM5k4ZMUA:1579855451702&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiz2PqX7JvnAhUV7nMBHYKUDjsQ_AUoAXoECBIQAw&biw=1366&bih=625'}
            linkdesc={'Jharkhand images'}
            description={
              'Find out the images of these places from extensive gallery.'
            }
          />
          <StateCard
            heading={'Jharkhand tourism official website'}
            link={'https://tourism.jharkhand.gov.in/'}
            linkdesc={'Official jharkhand tourism website'}
            description={
              'Learn about the latest developments in the state from the official tourism website and plan your trip accordingly.'
            }
          />
        </ScrollView>
      </ScrollView>
    </View>
  );
};

Jharkhand.options = {
  topBar: {
    title: {
      text: 'Jharkhand',
      color: 'black',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Jharkhand;
