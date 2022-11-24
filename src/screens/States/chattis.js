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

const Chattis = () => {
  const mustvisit = [
    {
      place: 'Jagdalpur - national beauti and fountains',
    },
    {
      place: 'Raipur - modern city',
    },
    {
      place:
        'Indravati national park - only tiger reserve in the green state of chattisgarh',
    },
    {
      place: 'Chitarkoot falls - major ecotourism destinations',
    },
    {
      place:
        'Mainpat - underrated hill station with green pastures, deep valleys',
    },
    {
      place: 'Charre marre waterfalls - refreshing and offbeat place',
    },
    {
      place: 'Guru ghasidas national park - beautifully protected reserve',
    },
    {
      place: 'Kanger ghati national park - one of the densest national parks ',
    },
    {
      place: 'Barnawapara wildlife sanctuary',
    },
    {
      place: 'Tirathgarh falls - paradise of waterfalls',
    },
    {
      place: 'Purkhauti muktangan - Open air art museum',
    },
    {
      place: 'Bhoramdeo temple - resemblance to konark temple',
    },
    {
      place: 'Rajim - chattisgarh rich cultural heritage',
    },
    {
      place: 'Madku dweep - beautiful island situated near the silent river',
    },
    {
      place: 'Achanakmar wildlife sanctuary - tiger reserve',
    },
    {
      place: 'malhar - most historic town of utmost archeological prominance',
    },
    {
      place: 'Sirpur - village with cultural heritage',
    },
  ];

  const unimportant = [
    {
      place: 'Bhilai - steel city',
    },
    {
      place: 'Dhamtari - tribal culture',
    },
    {
      place: 'Dantewada - temple of goddess Danteshwari an incarnation of shakti',
    },
    {
      place: 'Ghatarani waterfalls - picnic spot',
    },
    {
      place: 'Chirmiri - Jannat/heaven of chattisgarh',
    },
  ];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.chabanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Chattisgarh</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.chamap} style={styles.map} />
          <TourDetails
          duration={'5 nights and 6 days'}
          cost={'Within 17,000'}
          months={'October to March'}
          route={'Raipur - Jagdalpur - Kanger valley national park - Chitrakoot falls - Nagarnar  - Narayanpur'}/>
          <Image source={images.cha2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Chattisgarh</Text>
            <Text style={styles.details}>
              CHATTISGARH is India's 10th largest state and situated in the
              heart of India, is endowed with a rich cultural heritage and
              attractive natural diversity. The state has many ancient
              monuments, rare wildlife, exquisitely carved temples, Buddhist
              sites, palaces, water falls, caves, rock paintings and hill
              plateaus. Most of these sites are untouched and unexplored and
              offer a unique and alternate experience to tourists, compared to
              traditional destinations which have become overcrowded. For
              tourists who are tired of the crowds at major destinations will
              like the Bastar district, with its unique cultural and ecological
              identity. The green state of Chhattisgarh has 41.33% of its area
              under forests and is one of the richest bio-diversity areas in the
              country.
            </Text>
          </View>
          <Image source={images.cha3} style={styles.img} />
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
                'https://www.google.com/search?q=CHHATTISGARH+TOURISM&sxsrf=ACYBGNSmhQ5m4sdCUPhhRSQrEiHqDhYu1g:1579709467642&source=lnms&tbm=isch&sa=X&ved=2ahUKEwif26qtzJfnAhVjyzgGHYHGCIgQ_AUoAnoECBMQBA&biw=1366&bih=625'
              }
              linkdesc={'Chattisgarh images'}
              description={
                'Find out the images of these places from extensive gallery.'
              }
            />
            <StateCard
              heading={'Chattisgarh tourism official website'}
              link={'https://www.chhattisgarhtourism.in/'}
              linkdesc={'Official Chattisgarh tourism website'}
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

Chattis.options = {
  topBar: {
    title: {
      text: 'Chattisgarh',
      color: 'white',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Chattis;
