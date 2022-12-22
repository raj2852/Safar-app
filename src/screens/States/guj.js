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

const Gujrat = () => {
  const mustvisit = [
    {
      place: 'Gir national park - popular for the asiatic lion',
    },
    {
      place: 'Somnath temple - 12 jyotirlingas of lord Shiva',
    },
    {
      place:
        'Rann of kachchh/kutch - mesmerizing wonder of sand and salt.Flamingos visit here during winters',
    },
    {
      place:
        'Ahmedabad - all of gandhiji dwellings.famous for international kite fest.',
    },
    {
      place:
        'Saputara - the only hill station.Monsoons are the best time to visit',
    },
    {
      place:
        'Laxmi vilas palace - maharaja fateh Singh museum,ideal for history buffs',
    },
    {
      place:
        'Dwarka - According to Mahabharata,used to be the underwater city of lord Krishna',
    },
    {
      place: 'Rani ka vav - Unesco world heritage site,ancient step well',
    },
    {
      place: 'Lothal - Indus valley civilization',
    },
    {
      place: 'Bhuj - marvel at interior design',
    },
    {
      place: 'Junagarh - fort city',
    },
    {
      place:
        'Champaner-pavagadh park - Unesco world heritage site, combines both hindu and islamic architecture.',
    },
    {
      place: 'Surat - commercial hub of gujrat',
    },
    {
      place: 'Diu - best beach destination',
    },
    {
      place: 'Anand - mystical place to get rid of the busy city life.',
    },
    {
      place: 'Rajkot - history unboxes itself here',
    },
    {
      place:
        'Mandvi beach - absolute bliss and serenity along the coast of arabic sea',
    },
    {
      place:
        'Marine national park - exotic birds and vibrant corals at the sea bed',
    },
    {
      place: 'Porbandar - birth place of mahatma gandhi',
    },
    {
      place: 'Gandhinagar - rich cultural heritage',
    },
    {
      place: 'Wankaner - rajput culture and heritage',
    },
    {
      place: 'Girnar - mix of fine golden brown sand and lush green environs',
    },
    {
      place: 'Lakhota fort - reeking of ancientness',
    },
    {
      place: 'Sidi saiyad mosque - intricate lattice work',
    },
  ];

const unimportant = [
  {
    place: 'Dholavira - extend of Indus valley civilization',
  },
  {
    place: 'Modhera - Spiritual vibes',
  },
  {
    place: 'Bhavnagar - witness the vibrant culture',
  },
  {
    place: 'Vadla - ideal for bird watching',
  },
  {
    place: 'Danta ambaji - pilgrimage site, splendid architecture',
  },
  {
    place: 'Himmatnagar - ceramic market industry',
  },
  {
    place: 'Pirotan island - birdwatching',
  },
  {
    place: 'Palanpur - ideal for fort lovers',
  },
  {
    place: 'Shri swami narayan mandir - pilgrimage site',
  },
  {
    place: 'Vastrapur lake - perfect picnic spot',
  },
  {
    place: 'Iskcon temple - Krishna admirers',
  },
  {
    place: 'Daman - tranquil and charm town',
  },
  {
    place: 'Gujrat science city',
  },
  {
    place: 'Jhanjhari waterfall',
  },
];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.gujbanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Gujrat</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.gujmap} style={styles.map} />
          <TourDetails
            duration={'3 nights and 4 days'}
            cost={'Within 70,000'}
            months={
              'During the winter(October to february)are peak seasons.July to September may also be a good idea as this time receives less or no rainfall.'
            }
            route={
              'Ahmedabad - Sabarmati - Adlaj vav - Akshardham - Surendernagar - Rajkot - porbandar - jamnagar - Rann of kachchh - Dwarka - Dwarkadhish temple - Somnath temple - Sun temple - Gir forest - Diu'
            }
          />
          <Image source={images.guj2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Gujrat</Text>
            <Text style={styles.details}>
              Gujarat is the 6th largest state in India, located in the western
              part of India with a coastline of 1600 km (longest in India). It
              is one of the most popular tourist regions in the country and was
              visited by 20 million domestic and international tourists in
              2010-11. Statue Of Unity is the major tourist spot of Gujarat. It
              is the hightest statue of Gujarat Gujarat offers scenic beauty
              from Great Rann of Kutch to the hills of Saputara. Gujarat is the
              one and only place to view pure Asiatic lions in the world.During
              the Sultanate reign, Hindu craftsmanship mixed with Islamic
              architecture, giving rise to the Indo-Saracenic style. Many
              structures in the state are built in this fashion. It is also the
              birthplace of Shrimad Rajchandra, Mahatma Gandhi and Sardar
              Vallabhbhai Patel, iconic figures of India's independence
              movement.
            </Text>
          </View>
          <Image source={images.guj3} style={styles.img} />
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
                'https://www.google.com/search?q=GUJRAT+TOURISM&sxsrf=ACYBGNR6B9Z5MpWDVX_FYe_f2S9z6a7Ukg:1579414700489&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj8zbOhgo_nAhW173MBHbvAA00Q_AUoAnoECBIQBA&biw=1366&bih=625'
              }
              linkdesc={'Gujrat images'}
              description={
                'Find out the images of these places from extensive gallery.'
              }
            />
            <StateCard
              heading={'Gujrat official tourism site'}
              link={'https://www.gujarattourism.com/'}
              linkdesc={'Official gujrat tourism site'}
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

Gujrat.options = {
  topBar: {
    title: {
      text: 'Gujrat',
      color: 'black',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Gujrat;
