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
import {StateCard, TourDetails} from '../../components/Shared';
import styles from '../../assets/styles';
import images from '../../assets/images';
import colors from '../../assets/colors';

//import LinearGradient from 'react-native-linear-gradient';

const TamilNadu = () => {
  const mustvisit = [
    {
      place: 'Rameshwaram - Beautiful holy island',
    },
    {
      place: 'Chennai - convoluted with temples,churches and beaches',
    },
    {
      place:
        'Ooty - Quenn of hillstations,dodebetta peak,ketti valley,pykara falls',
    },
    {
      place: 'Yercaud - poor man ooty',
    },
    {
      place: 'Mahabalipuram - intricately carved temples and rock cut caves',
    },
    {
      place: 'Kanyakumari - Vivekananda memorial',
    },
    {
      place: 'Kanchipuram - Golden city of thousand temples',
    },
    {
      place:
        'Kodaikanal - mesmerizing scenic beauty, Kodai-Palani terk,vattakanal',
    },
    {
      place: 'Madurai - Lotus city',
    },
    {
      place:
        'Coimbatore - manchester of south India,Lord shiva idol,Valparai(obscure hill station)',
    },
    {
      place: 'Thanjavur - known as Tanjor or city of temples',
    },
    {
      place:
        'Hogenakkal - Small village whose presence splits the kaveri river into many streams',
    },
    {
      place:
        'Madumalai - national park with large varieties of flora and fauna, silver cascade falls',
    },
    {
      place: 'Thiruvannamalai - holy town and famous temple arunachala temple',
    },
    {
      place: 'Tuticorn - temples, churches, monuments',
    },
    {
      place: 'Kumbakonam - gorgeous temple town',
    },
    {
      place: 'Chettinad - temple town with walking pleasures',
    },
    {
      place:
        'Trichy - religion and cities that are nothing but concrete jungles',
    },
    {
      place:
        'Chidambaram - beautiful temple town in eastern part of Tamil nadu',
    },
    {
      place:
        'Kutralam - connect with nature and get lost in the penchant of spirituality',
    },
    {
      place: 'Bellikal - place where you can completely relax',
    },
    {
      place: 'Tiruchipally',
    },
    {
      place: 'Pichavaram - mangrove forest',
    },
    {
      place: 'Kalugumalai - known as hill of vultures due to its temples',
    },
    {
      place: 'Kolli hills - mountain of death',
    },
    {
      place:
        'Gangoikonda cholapuram - architectural and engineering genius of the chola dynasty',
    },
    {
      place: 'Papasanam falls - immaculate sheet of white water',
    },
    {
      place: 'Meghamalai - high wavy mountains with lush green tea plantations',
    },
  ];

  const unimportant = [
    {
      place: 'Velankanni - christian land',
    },
    {
      place: 'Dhanushkodi - ruins of monuments near beach',
    },
    {
      place: 'Yelagiri - small hill station in vellore',
    },
    {
      place: 'Vedanthangal - close to mahabalipuram, for bird sanctuary',
    },
    {
      place: 'Tranquebar - the land of singing waves',
    },
    {
      place: 'Salem - steel city of tamil nadu',
    },
    {
      place: 'Theni - unprecedented serenity and peace',
    },
    {
      place:
        'Pollachi - popular filming city due to its lavish greenary and blissful sceneries',
    },
    {
      place: 'Yanam - Godavari meets Koringa to the south of Kainada district',
    },
    {
      place: 'Annamalai tiger reserve',
    },
  ];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.tambanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>TamilNadu</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.tammap} style={styles.map} />
          <TourDetails
            duration={'9 nights and 10 days'}
            cost={'Within 26,000'}
            months={'November to march.'}
            route={
              'Chennai - kanchipuram - Mahabalipuram - Ooty - Tanjavur - Tiruchipally - Madurai - Rameshwaram'
            }
          />
          <Image source={images.tam2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About TamilNadu</Text>
            <Text style={styles.details}>
              Tamil Nadu is a state in the south-eastern part of the Indian
              Peninsula. Tamil Nadu is previously a part of the United Madras
              Province, which was later partitioned based on languages. Tamil
              Nadu has more than 4,000 years of continuous cultural history.
              Tamil Nadu has some of the most remarkable temple architecture in
              the country, and a living tradition of music, dance, folk arts and
              fine arts. Tamil Nadu is well renowned for its temple towns and
              heritage sites, hill stations, waterfalls, national parks, local
              cuisine and the natural environment and wildlife. The state has
              the largest tourism industry in India.
            </Text>
          </View>
          <Image source={images.tam3} style={styles.img} />
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
            link={
              'https://www.google.com/search?q=tamilnadu+tourism&sxsrf=ACYBGNTieGr9gDA9I85L4JZIuQCLda4MsA:1579596185645&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjWvaKsppTnAhUMILcAHSBqDksQ_AUoAXoECBUQAw&biw=1366&bih=576'
            }
            linkdesc={'Tamilnadu Images'}
            description={
              'Find out the images of these places from extensive gallery.'
            }
          />
          <StateCard
            heading={'Tamil nadu tourism official website'}
            link={'https://www.tamilnadutourism.tn.gov.in/'}
            linkdesc={'Official tamil nadu tourism website'}
            description={
              'Learn about the latest developments in the state from the official tourism website and plan your trip accordingly.'
            }
          />
        </ScrollView>
      </ScrollView>
    </View>
  );
};

TamilNadu.options = {
  topBar: {
    title: {
      text: 'Tamil Nadu',
      color: 'black',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default TamilNadu;
