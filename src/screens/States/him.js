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

const Himachal = () => {
  const mustvisit = [
    {
      place: 'Manali',
    },
    {
      place: 'Shimla',
    },
    {
      place: 'Kullu',
    },
    {
      place: 'Kufri',
    },
    {
      place: 'Rohtang pass',
    },
    {
      place: 'Dharamsala',
    },
    {
      place: 'Mcleodganj',
    },
    {
      place: 'Dalhousie',
    },
    {
      place: 'Spiti valley',
    },
    {
      place: 'Kasol',
    },
    {
      place: 'Mandi',
    },
    {
      place: 'Kufri',
    },
    {
      place: 'Kangra - Devbhumi(land of gods)',
    },
    {
      place: 'Tirthan valley',
    },
    {
      place: 'Khajjar - mini switzerland',
    },
    {
      place: 'Kinnaur',
    },
    {
      place: 'Bilaspur - Gobind sagar lake',
    },
    {
      place: 'Shoghi',
    },
    {
      place: 'Tattapani',
    },
    {
      place: 'Manikaran Sahib',
    },
    {
      place: 'Solan',
    },
    {
      place: 'Arki - 18th century fort',
    },
    {
      place: 'Solang valley',
    },
    {
      place: 'Beas kund trek',
    },
    {
      place: 'Pin valley national park',
    },
  ];

const unimportant = [
  {
    place: 'Kasauli',
  },
  {
    place: 'Bir billing',
  },
  {
    place: 'Chamba',
  },
  {
    place: 'Chail',
  },
  {
    place: 'Kaza',
  },
  {
    place: 'Palampur',
  },
  {
    place: 'Nahan',
  },
  {
    place: 'Bhuntar',
  },
  {
    place: 'Narkanda',
  },
  {
    place: 'Sangla',
  },
  {
    place: 'Mashobra',
  },
];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.himbanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Himachal Pradesh</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.himmap} style={styles.map} />
          <TourDetails
            duration={'9 Nights and 10 days'}
            cost={'Within 20,000'}
            months={'Between the months of October and June'}
            route={'Shimla - kullu - Kufri - Dharamsala - Dalhousie - Manali'}
          />
          <Image source={images.him2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Himachal Pradesh</Text>
            <Text style={styles.details}>
              Located in the foothills of the Himachal Range and in the lap of
              the Himalayas Pradesh is endorsed with a lot of scenic beauty
              within the hills. Tourists visit here during the peak months to
              refresh there eyes with the snow covered surroundings and even
              manhy natural surprises which awaits for you. And lastly please
              don't forget to have the toy train ride from Kalka to Shimla, so
              best route to come shimla would be to travel kalka and then to
              shimla by toy-train.
            </Text>
          </View>
          <Image source={images.him3} style={styles.img} />
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
              link={
                'https://www.google.com/search?q=himachal+pradesh+tourism+wikipedia&sxsrf=ACYBGNSMrX-oF1i2dCsJ79S1f17LZMqOPg:1579417571698&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjKl8D6jI_nAhVBgOYKHZXLAz8Q_AUoAnoECBMQBA&biw=1366&bih=576'
              }
              linkdesc={'Himachal Pradesh Images'}
              description={
                'Find out the images of these places from extensive gallery.'
              }
            />
            <StateCard
              heading={'Himachal Pradesh tourism official website'}
              link={'https://himachaltourism.gov.in/'}
              linkdesc={'Official Himacha pradesh tourism site'}
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

Himachal.options = {
  topBar: {
    title: {
      text: 'Himachal Pradesh',
      color: 'white',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Himachal;
