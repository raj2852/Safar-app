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

const Goa = () => {
  const mustvisit = [
    {
      place:
        'Calangute beach - largest breach in north goa stretching from candolim to baga.',
    },
    {
      place:
        'Basillica of bom Jesus - Unesco world heritage site,built in 1594 it houses the remains of St.Francis Xavier ',
    },
    {
      place:
        'Fort Aguada - guard against the dutch and marathas, it was a reference point for the vessels coming from europe.',
    },
    {
      place: 'Baga beach - witness excellent nightlife',
    },
    {
      place: 'Cruise in Goa - exotic beaches,pristine waters',
    },
    {
      place: 'Anjuna beach - rocky shores, rocking music and a free happy vibe',
    },
    {
      place:
        'Dudhsagar water falls - one of the highest waterfalls in India and cascades through four tiers.',
    },
    {
      place: 'Scuba driving',
    },
    {
      place: 'Club cubana - saturday night markets,top quality music and staff',
    },
    {
      place:
        'Church of our lady onn the immaculate concept - heart of the capital city,Panaji.',
    },
    {
      place: 'Dona paula - home to the national institute of oceanography',
    },
    {
      place: 'Chapora fort - strong reminder of portugese past of goa',
    },
    {
      place:
        'Butterfly beach - seems like a fairy place, one of the most photogenic places in whole Arabian sea coastline',
    },
    {
      place: 'Arambol beach - Bohemian vibes',
    },
    {
      place: 'Vagator beach - dramatic red cliffs',
    },
    {
      place: 'Palolem beach - flock of foreign tourists',
    },
    {
      place: 'Colva beach - shoping',
    },
    {
      place: 'Morjim beach - little Russia',
    },
    {
      place: 'Thalassa - overlook the arabian sea from atop rocky cliffs',
    },
    {
      place: 'Anjuna flea market',
    },
    {
      place:
        'Agonda beach - place away from the hustle bustle of the crowd with more space and solitude, clear blue water and coconut trees',
    },
    {
      place: 'Club LPK - top rated Djs',
    },
    {
      place: 'Mambos - club at calangute',
    },
    {
      place: 'SE Cathedral - one of the largest churches in whole asis,took nearly 80 yaers to get constructed',
    },
    {
      place: 'Cavelossim beach - black rocks that contrast with white sand',
    },
    {
      place: 'Church of St.Cajetan - major resemblance with St.Peters basilica in Rome',
    },
  ];

const unimportant = [
  {
    place: 'Patnem beach - countryside parts',
  },
  {
    place: 'Querim beach and tiracol fort - pictureque view',
  },
  {
    place: 'Betalbatim beach',
  },
  {
    place: 'Butterfly conservatory of goa',
  },
  {
    place: 'Church of St.Francis of assisi - oldest church in panjim',
  },
  {
    place: 'Monastry of St.Augustine',
  },
  {
    place: 'Savoi plantation',
  },
  {
    place: 'Indian airforce avaiation museum',
  },
];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.goabanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Goa</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.goamap} style={styles.map} />
          <TourDetails duration={'4 nighst and 5 days'} cost={'Within 20,000'} months={'November to March are peak seasons'} route={'Day 1 and day 2(North goa),Day 3 and day 4(south goa), day 5 for shopping'} />
          <Image source={images.goa2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Goa</Text>
            <Text style={styles.details}>
              The state of Goa, in India, is famous for its beaches and places
              of worship, and tourism is its primary industry. Tourism is
              generally focused on the coastal areas of Goa, with decreased
              tourist activity inland. Foreign tourists, mostly from Europe,
              arrive in Goa in winter, whilst the summer and monsoon seasons see
              many Indian tourists.Influenced by over 450 years of Portuguese
              rule and Latin culture, Goa presents a somewhat different
              representation of the country to foreign visitors. Major tourist
              attractions include: Bom Jesus Basilica, Fort Aguada, a wax museum
              on Indian culture, and a heritage museum. The Churches and
              Convents of Goa have been declared a World Heritage Site by
              UNESCO.
            </Text>
          </View>
          <Image source={images.goa3} style={styles.img} />
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
                'https://www.google.com/search?q=GOA+TOURISM&sxsrf=ACYBGNRKHeuv43t9rOJmU8W5DwRSt1qofw:1579446606633&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjch7iP-Y_nAhVXILcAHWlxA-EQ_AUoAnoECBIQBA&biw=1366&bih=625'
              }
              linkdesc={'Goa Images'}
              description={
                'Find out the images of these places from extensive gallery.'
              }
            />
            <StateCard
              heading={'Goa official tourism website'}
              link={'https://goa-tourism.com/'}
              linkdesc={'Official Goa tourism website'}
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

Goa.options = {
  topBar: {
    title: {
      text: 'Goa',
      color: 'white',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Goa;
