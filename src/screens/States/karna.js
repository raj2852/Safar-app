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

const Karnataka = () => {
  const mustvisit = [
    {
      place: 'Coorg - perpetually mistry landscapes',
    },
    {
      place: 'Gokarna - pristine beaches and hindu pilgrimage',
    },
    {
      place:
        'Hampi - city of ruins is a Unesco world heritage site, ancient temples',
    },
    {
      place: 'Mysore - place of royal history,sandal wood majesty',
    },
    {
      place: 'Bangalore - silicon valley of India',
    },
    {
      place: 'Chikmaglur - beautiful hills with aromatic coffee plantation',
    },
    {
      place: 'Badami - archeological delight',
    },
    {
      place: 'Jog falls - Highest waterfall of India',
    },
    {
      place: 'Murudeshwar - huge Shiva temple',
    },
    {
      place: 'Bandipur national park',
    },
    {
      place:
        'Shravanabelagola - important jain pilgrimage,sculpture of lord gomateswara called bahubali statue',
    },
    {
      place: 'Devbagh - green belt of casuarina trees, along the sea side',
    },
    {
      place: 'Nagarhole - wildlife park',
    },
    {
      place: 'Nandi hills - trekking destination',
    },
    {
      place: 'Halebidu - exhibition of hoysala architecture',
    },
    {
      place: 'Bijapur - royal era architecture',
    },
    {
      place: 'Kudremukh - mountain in the shape of horse face',
    },
    {
      place: 'Srirangapatna - culture and history',
    },
    {
      place: 'Savandurga - one of the largest single rock formation in the whole of asia',
    },
    {
      place: 'Dubare - famous for its elephant camp',
    },
    {
      place: 'Sringeri - river tunga with historic temples',
    },
  ];

const unimportant = [
  {
    place: 'Udupi - laidback beaches and unexplored forests',
  },
  {
    place:
      'Cabini - once a private hunting place for the British,variety of flora and fauna',
  },
  {
    place: 'Dandeli - water sports',
  },
  {
    place: 'Pattadakal - fusion architecture style',
  },
  {
    place: 'Kemanagundi - retreat hill station',
  },
  {
    place: 'Shivagange - combination of temples and scenic beauty',
  },
  {
    place: 'Maravanthe - virgin beach',
  },
  {
    place: 'Mangalore - swaying coconut palms',
  },
  {
    place: 'Karwar - Gorgeous scenic beauty',
  },
  {
    place: 'Chiknallapur - close to the nandi hills',
  },
  {
    place: 'Shimoga',
  },
  {
    place: 'Anthergange - small caves and dense plantation forest',
  },
  {
    place: 'Bheemeshwari - perfect gateway for a nature lover',
  },
  {
    place: 'Gulbarga - temples and tombs',
  },
  {
    place: 'Channapatna - town of toy making for over 200 years now',
  },
  {
    place: 'Nrityagram - dance village conceptualized by the well known odissi dancer protima bedi',
  },
];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.karbanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Karnataka</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.karmap} style={styles.map} />
          <TourDetails
            duration={'7 nights and 8 days'}
            cost={'Within 30,000'}
            months={'October to December are peak seasons'}
            route={
              'Bangalore - Ramanagar - Mysore - Dakhin kannad - Uttar kannad - Belgaum'
            }
          />
          <Image source={images.kar2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Karnataka</Text>
            <Text style={styles.details}>
              Karnataka, the sixth largest state in India, has been ranked as
              the third most popular state in the country for tourism in 2014.It
              is home to 507 of the 3600 centrally protected monuments in India,
              the largest number after Uttar Pradesh.The State Directorate of
              Archaeology and Museums protects an additional 752 monuments and
              another 25,000 monuments are yet to receive protection. Tourism
              centres on the ancient sculptured temples, modern cities, the hill
              ranges, forests and beaches. Broadly, tourism in Karnataka can be
              divided into four geographical regions: North Karnataka, the Hill
              Stations, Coastal Karnataka and South Karnataka.WHILE IN KARNATAKA
              YOU MUST SEE THE NILGIRIS;THIS OCCURS DUE TO THE BLOSSOM OF A TYPE
              OF FLOWER AND THIS OCCURS AFTER EVERY 12 YEARS .LAST TIME THIS
              HAPPENED IN 2018, SO PLAN YOUR TRIP ACCORDINGLY.
            </Text>
          </View>
          <Image source={images.kar3} style={styles.img} />
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
                'https://www.google.com/search?q=karnataka+tourism&sxsrf=ACYBGNTOHek8pAWFTgZzliyB4yUpD3tvyw:1579501334089&source=lnms&tbm=isch&sa=X&ved=2ahUKEwih6sL_xJHnAhVW7HMBHQnkC8QQ_AUoAXoECBUQAw&biw=1366&bih=625'
              }
              linkdesc={'Karnataka Images'}
              description={
                'Find out the images of these places from extensive gallery.'
              }
            />
            <StateCard
              heading={'karnataka tourism official website'}
              link={'https://www.karnatakatourism.org/'}
              linkdesc={'Official karnataka tourism website'}
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

Karnataka.options = {
  topBar: {
    title: {
      text: 'Karnataka',
      color: 'black',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Karnataka;
