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

const Punjab = () => {
  const mustvisit = [
    {
      place: 'Golden Temple - Amritsar',
    },
    {
      place: 'jallianwala bagh - Amritsar',
    },
    {
      place: 'Akal takht - Amritsar',
    },
    {
      place: 'Wagah border - Amritsar',
    },
    {
      place: 'Summer palace of maharaja Ranjit Singh',
    },
    {
      place: 'The rock garden - Chandigarh',
    },
    {
      place: 'Government museum and art gallery - Chandigarh',
    },
    {
      place: 'Timber trail - Chandigarh',
    },
    {
      place: 'Butterfly park - Chandigarh',
    },
    {
      place: 'Yadvinder garden - Chandigarh',
    },
    {
      place: 'Garden of fragnance - Chandigarh',
    },
    {
      place: 'Chandigarh botanical garden and nature park - Chandigarh',
    },
    {
      place: 'Shanti kunj - Chandigarh',
    },
    {
      place: 'Morni hills - Chandigarh',
    },
    {
      place: 'Terraced garden - Chandigarh',
    },
    {
      place: 'International dolls museum - Chandigarh',
    },
    {
      place: 'Imam Nasir masjid - Jalandhar',
    },
    {
      place: 'Shahed-e-azam Sardar Bhagat Singh museum - Jalandhar',
    },
    {
      place: 'Wonderland theme park - Jalandhar',
    },
    {
      place: 'Devi talab mandir - Jalandhar',
    },
    {
      place: 'St. Mary Cathedral church - Jalandhar',
    },
    {
      place: 'Lodhi fort - Ludhiana',
    },
    {
      place: 'Rural heritage museum - Ludhiana',
    },
    {
      place: 'Tiger zoo - Ludhiana',
    },
    {
      place: 'Maharaja Ranjit Singh war museum - Ludhiana',
    },
    {
      place: '',
    },
  ];

const unimportant = [
  {
    place: 'Tara Taran Sahib - Amritsar',
  },
  {
    place: 'Maharaja ranjit Singh panorama - Amritsar',
  },
  {
    place: 'maharaja Ranjit Singh museum - Ammritsar',
  },
  {
    place: 'Rambagh garden - Amritsar',
  },
  {
    place: 'Harike wetland and bird sanctuary - Amritsar',
  },
  {
    place: 'Khalsa college - Amritsar',
  },
  {
    place: 'Durgiana temple - Amritsar',
  },
  {
    place: 'Bathinder fort -  Amritsar',
  },
  {
    place: 'kaiser bagh park -  Amritsar',
  },
  {
    place: 'Sukhna lake - Chandigarh',
  },
  {
    place: 'Chhatbir zoo - Chandigarh',
  },
  {
    place: 'Rose garden - Chandigarh',
  },
  {
    place: 'Le corbusier center - Chandigarh',
  },
  {
    place: 'Sankaria cactus garden - Chandigarh',
  },
  {
    place: 'Mahendra chaudhury garden and leisure park - Chandigarh',
  },
  {
    place: 'Leisure park - Chandigarh',
  },
  {
    place: 'Tuldi mandir - Jalandhar',
  },
  {
    place: 'Shiv mandir - Jalandhar',
  },
  {
    place: 'Pushpa gujral Science city - Jalandhar',
  },
  {
    place: 'Company bagh - Jalandhar',
  },
  {
    place: 'Niku Park - jalandhar',
  },
  {
    place: 'Rangla punjab haveli - Jalandhar',
  },
  {
    place: 'Prithvi planet - Jalandhar',
  },
  {
    place: 'Sheetal mandir - Jalandhar',
  },  
  {
    place: 'Gurudwara charn kamal - Ludhiana',
  },
  {
    place: 'Phillaur fort - Ludhiana',
  },
  {
    place: 'Nehru rose garden - Ludhiana',
  },
  {
    place: 'Deer park - Ludhiana',
  },
  {
    place: '',
  },
  {
    place: '',
  },
  
];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.punbanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Punjab</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.punmap} style={styles.map} />
          <Image source={images.pun2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Punjab</Text>
            <Text style={styles.details}></Text>
          </View>
          <Image source={images.pun3} style={styles.img} />
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
            <Text style={styles.h3}>Not so important</Text>

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
              link={''}
              linkdesc={'Punjab Images'}
              description={
                'Find out the images of these places from extensive gallery.'
              }
            />
            <StateCard
              heading={'Punjab tourism official website'}
              link={''}
              linkdesc={'Official punjab tourism site'}
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

Punjab.options = {
  topBar: {
    title: {
      text: 'Punjab',
      color: 'white',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Punjab;
