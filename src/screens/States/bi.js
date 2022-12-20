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

const Bihar = () => {
  const mustvisit = [
    {
      place: 'Gaya - hindu pilgrimage hub and a transit point for buddhist pilgrimage center of bodh gaya',
    },
    {
      place: "Patna - important enroute to major places like gaya, rajgir",
    },
    {
      place: "Nalanda and Rajgit - ruins of the first university,great stupa",
    },
    {
      place: "Vaishali - site of Gautam Buddha last sermons, world first republic",
    },
    {
      place: "Madhubuni - rich in art and culture",
    },
    {
      place: "Muzaffarpur - litchi kingdom",
    },
    {
      place: "Bhagalpur - silk city, major education center",
    },
    {
      place: "Pawapuri - holy site for the jains, jalmandir ",
    },
    {
      place: "Lauriya nandangarh - ashokan pillar (40 pillars built by king Ashoka)",
    },
    {
      place: "Valmiki national park",
    },
    {
      place: "Tomb of Sher Shah Suri",
    },
    {
      place: "Navlakha palace - royal palace of heritage",
    },
  ];

  const unimportant = [
    {
      place: 'Hajipur - smooth transit of past and present',
    },
    {
      place: "Sitamarhi - birthplace of wife of Lord Rama,Sita",
    },
  ];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.bibanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Bihar</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.bimap} style={styles.map} />
          <TourDetails
          duration={'5 days and 4 nights'}
          cost={'Within 15,000'}
          months={'After the monsoon and before the summers during the months of October to March'}
          rouet={'Patna - Sonepur - Mazaffarpur - Nandangarh - Valmiki nagar - Sitamarhi - Madhubuni - Darbhanga - Vaishali - Nalanda - Rajgir - Bodhgya - Bhagalpur'}/>
          <Image source={images.bi2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Bihar</Text>
            <Text style={styles.details}>BIHAR in eastern India is one of the oldest inhabited places in the world with a history going back 3000 years. The rich culture and heritage of Bihar is evident from the innumerable ancient monuments that are dotted all over the state. Bihar is home to many tourist attractions and is visited by large numbers of tourists from all over the world. Around total 6 million tourists visit Bihar every year.

</Text>
          </View>
          <Image source={images.bi3} style={styles.img} />
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
            link={'https://www.google.com/search?q=bihar+tourism&sxsrf=ACYBGNSV7eWcA1pGjWK2tVgZdk-i2YotRQ:1579847874386&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiXgej6z5vnAhVw8HMBHdaOD4AQ_AUoAnoECBIQBA&biw=1366&bih=625'}
            linkdesc={'Bihar images'}
            description={
              'Find out the images of these places from extensive gallery.'
            }
          />
          <StateCard
            heading={'Bihar tourism official webiste'}
            link={'https://tourism.bihar.gov.in/'}
            linkdesc={'Official bihar tourism website'}
            description={
              'Learn about the latest developments in the state from the official tourism website and plan your trip accordingly.'
            }
          />
        </ScrollView>
      </ScrollView>
    </View>
  );
};

Bihar.options = {
  topBar: {
    title: {
      text: 'Bihar',
      color: 'white',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Bihar;
