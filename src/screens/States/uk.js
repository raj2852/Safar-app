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

const uk = () => {
  const mustvisit = [
    {
      place: 'Nainital - city of beautiful lakes,temples and exotic scenery',
    },
    {
      place: 'Rishikesh - convergence point of Ganga and Chandrabhaga,adventure sports,yoga ashrams',
    },
    {
      place: 'Auli - dotted with apple orchards,oaks and deodars',
    },
    {
      place: 'Mussoorie - colonial heritage and religious sites',
    },
    {
      place: 'Badrinath - neelkanth mountain peak,among one of the char dham',
    },
    {
      place: 'Kedarnath - one of the char dhams and the holiest pilgrimage center in the lap of the garhwal district,spot of chipko movement.',
    },
    {
      place: 'Jim corbet national park - paradise for flora and fauna lovers',
    },
    {
      place: 'Haridwar - famous for its temples and ghats where pilgrims bathe to relieve sins',
    },
    {
      place: 'Yamunotri - origin of the yamuna river, chhota char dham pilgrimage center',
    },
    {
      place: 'Gangotri - according to mythology this is the place where ganga is believed to originate from the braids of lord shiva',
    },
    {
      place: 'Almora - wilderness of the himalayan ranges,horse shoe shaped hill station',
    },
    {
      place: 'Valley of flowers - world heritage site for its wild untamed blooms surrounded by white peaks',
    },
    {
      place: 'Dehradun - Shivalik ranges with perennial rivers, historic civilization',
    },
    {
      place: 'Mukteshwar - small hilly town mostly known for adventure sports',
    },
    {
      place: "Ranikhet - queens's farm, developed by Britishers is full of temples and forests",
    },
    {
      place: "Landsdowne - pristine Himalayamn beauty,oak trees"
    },
    {
      place: "Sattal - a group of seven fresh water lakes, migratory birds and panoramic vistas"
    },
    {
      place: "Bhimtal - temples amid the pristine blue lake"
    },
    {
      place: "Madhyamaheshwar - spiritual vibes oozing out"
    },
    {
      place: "Pithoragarh - small urban town with raw beauty of nature often called as little Kashmir"
    },
    {
      place: "Rudra prayag - confluence point of river Alakananda and mandakini"
    },
    {
      place: "Dev prayag - confluence point of river Alakanda and Bhagirathi"
    },
    {
      place: "Binsar - lush green oak forest"
    },
    {
      place: "Uttarkashi - chief source of the holiest river of hinduism,the Ganga"
    },
  ];

  const unimportant = [
    {
      place: 'Dhanauti - offbeat hill station',
    },
    {
      place: 'Kanatal - peace and solitude filled hill station',
    },
    {
      place: 'Tehri garhwal - spiritual significance',
    },
    {
      place: 'Rajaji national park',
    },
    {
      place: "Joshimath - quant hill station"
    },
    {
      place: "Naukuchital - small village with lakes"
    },
    {
      place: "Bageshwar - untouched village destination"
    },
    {
      place: "Kumaon - hill stations and religious spots"
    },
    {
      place: "Chopta - trekker's heaven"
    },
    {
      place: "Ramgarh - snow covered himalayas"
    },
    {
      place: "Dharchula"
    },
  ];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.andhbanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Uttarakhand</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.ukmap} style={styles.map} />
          <TourDetails
            duration={'7 nights and 8 days'}
            cost={'Within 30,000'}
            months={'Can be visited throughout the year except the peak monsoon season in July and August'}
            routete={'Dehradun - haridwar - garhwal - Devprayag - Rudraprayag - Tehri - gangotri - Yamunotri - Kedarnath - Badrinath - Chamoli - Almora - Nainital - Pithoragarh - Musoorie'}/>
          <Image source={images.uk2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Uttarakhand</Text>
            <Text style={styles.details}>Uttarakhand is a state North Indian region of Himalayas. The state is popularly known as Devbhumi (land of Gods) due to the presence of numerous Hindu pilgrimage sites. As a result, religious tourism forms a major portion of the tourism in the state. The tourism business in Uttarakhand generated ₹23,000 crores during 2013-14.Uttarakhand is famous for Char Dham Yatra, which literally meaning 'journey to four centres'. These four religious centres in Uttarakhand are represented by Badrinath (dedicated to Lord Vishnu), Kedarnath(dedicated to Lord Shiva), Gangotri (the holy origin of river Ganga)and Yamunotri (the holy origin of river Yamuna).The Char Dham Yatra begins around the first to second week of May every year. These dates are announced in the national media. The base for the yatra is generally the Rishikesh town which has all the amenities available for pilgrims and tourists alike. Pilgrims and tourists generally book their journey through the local travel agents to all the four locations</Text>
          </View>
          <Image source={images.uk3} style={styles.img} />
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
                    <View>
                      <Text>
                        <View style={styles.dot2} />
                        <Text style={styles.placesitem}> {item.place}</Text>
                      </Text>
                    </View>
                  );
                }}
              />
            </SafeAreaView>
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
                link={'https://www.google.com/search?q=UTTARAKHAND+TOURISM&sxsrf=ACYBGNQMn0jbO2VRvlVNgSusTlNT0nqQTQ:1580109907200&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi85-WNoKPnAhXhjuYKHUfOALIQ_AUoAnoECBMQBA&biw=1366&bih=625'}
                linkdesc={'Uttarakhand images'}
                description={
                  'Find out the images of these places from extensive gallery.'
                }
              />
              <StateCard
                heading={'Uttarakhand official tourism website'}
                link={'https://uttarakhandtourism.gov.in/'}
                linkdesc={'Official uttarakhand tourism website'}
                description={
                  'Learn about the latest developments in the state from the official tourism website and plan your trip accordingly.'
                }
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

uk.options = {
  topBar: {
    title: {
      text: 'Uttarakhand',
      color: 'white',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default uk;
