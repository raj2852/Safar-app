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

const Madhya = () => {
  const mustvisit = [
    {
      place: "Khajuraho - stunning temples with erotic and sensous carvings",
    },
    {
      place: "Bandhavgarh national park",
    },
    {
      place: "Gwalior - beautiful monuments,palaces,temples",
    },
    {
      place: "Ujjain - one of the holiest cities of India",
    },
    {
      place: "Bhedaghat - lake amidst marble rocks",
    },
    {
      place: "Sanchi stupa - UNESCO world heritage site ",
    },
    {
      place: "Bhopal - beautiful lakes",
    },
    {
      place: "Kanha national park",
    },
    {
      place: "Orchha - intricately carved temples and striking forts",
    },
    {
      place: "Indore - rich cultural heritage",
    },
    {
      place: "Pachmarhi - queen of the satpura ranges",
    },
    {
      place: "Bhimbetka - rock shelters are an archeological site",
    },
    {
      place: "Pench national park - inspiration for 'The jungle book'",
    },
    {
      place: "Omkareshwar - house of 12 jyotirlingas situated on mandhata islands in rver narmada",
    },
    {
      place: "Maheshwar - capital of rani Ahilyabai Holkar's province",
    },
    {
      place: "Jabalpur - marble rock ghats",
    },
    {
      place: "Panna - panna national park, diamond reserves",
    },
    {
      place: "Mandu - historic monuments which are surely going to take you back",
    },
    {
      place: "Amarkantak - vindhya and satpura ranges",
    },
    {
      place: "Udaigiri - mountain of sunrise, home to twenty rock cut caves near vidisa",
    },
    {
      place: "Patalpani waterfalls - located in Indore",
    },
    {
      place: "Tincha falls - white water cascade",
    },
    {
      place: "Choral dam - unwind and relax out of pell mell of daily life",
    },
    {
      place: "Mohadi falls",
    },
    {
      place: "Bamniya kund - waterfall from 300 feet above, pouring down clear blue pool of water",
    },
    {
      place: "Vidisa - unheared ruled place of Maurya dynasty,Khilji dynasty, Mughals, Greeks and even the British",
    },
  ];

const unimportant = [
  {
    place: "Burhanpur - historical town on the banks of river tapti with few marvellous architectures",
  },
  {
    place: "Shivpuri - tranquil and peaceful destination",
  },
  {
    place: "Satna - one of the largest cement producing sites",
  },
  {
    place: "Chanderi - old forts with scenic beauty",
  },
  {
    place: "Bawangaja - jain pilgrimage site",
  },
  {
    place: "Hoshangabad - charming tourist destination located along the ghats of river Ganga",
  },
  {
    place: "Bhojpur - incomplete hindu temple with a 7.5 feet high lingam",
  },
  {
    place: "Madhai - quaint town",
  },
  {
    place: "Churna - quiet village",
  },
  {
    place: "Kuno - palpur wildlife sanctuary - hidden gem of wildlife amidst vindhyan hills",
  },
  {
    place: "Dharampuri - quaint little known town filled with historical gems, epics have it that it was established by oldest Pandava - Yudhistir",
  },
  {
    place: "Janapav - ideal gateway for nature lovers",
  },
  {
    place: "Hanuwantiya - vibrant and colorfull island ",
  },
  {
    place: "Hatyari khoh - uncanny and untouched by industrial, fascination horror stories",
  },
  {
    place: "Sitlamata falls - picnic spot",
  },
  {
    place: "Sonagiri",
  },
 ];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.madhbanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Madhya Pradesh</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.madhmap} style={styles.map} />
          <TourDetails
            duration={'7 nights and 8 days'}
            cost={'Within 15,000'}
            months={'October to March is the best time'}
            route={'Sanchi - Bhopal - Bhojpur - Bhimbetka - Pachmarhi - Gwalior - Shivpuri - Orchha - Khajuraho - Indore - Ujjain - Mandu'}/>
          <Image source={images.madh2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Madhya Pradesh</Text>
            <Text style={styles.details}>Tourism in Madhya Pradesh has been an attraction of India because of its location in the centre of the country. It has been home to the cultural heritage of Hinduism, Buddhism, Jainism etc. Innumerable monuments, but exquisitely carved temples, stupas, forts & palaces are dotted all over the state. Madhya Pradesh has won Best Tourism State National award for 3 consecutive years i.e. 2017, 2016 and 2015.</Text>
          </View>
          <Image source={images.madh3} style={styles.img} />
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
              link={'https://www.google.com/search?q=MADHYA+pradesh+tourism&sxsrf=ACYBGNT6iwRb3qYKT5M4O63C47R5mxBCYg:1579696117288&source=lnms&tbm=isch&sa=X&ved=2ahUKEwii2LHPmpfnAhXp6nMBHQVPCh4Q_AUoA3oECBMQBQ&biw=1366&bih=625'}
              linkdesc={'Madhya pradesh images'}
              description={
                'Find out the images of these places from extensive gallery.'
              }
            />
            <StateCard
              heading={'Madhya Pradesh tourism official website'}
              link={'https://www.mptourism.com/'}
              linkdesc={'Official madhya pradesh tourism website'}
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

Madhya.options = {
  topBar: {
    title: {
      text: 'Madhya Pradesh',
      color: 'black',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Madhya;
