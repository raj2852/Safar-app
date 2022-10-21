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

const Kashmir = () => {
  const mustvisit = [
    {
      place: 'SRINAGAR – Heaven On Earth',
    },
    {
      place: 'GULMARG – Ski Your Way',
    },
    {
      place: 'SONAMARG – The Land Of Gold',
    },
    {
      place: 'LEH – 3 Idiot’s Location',
    },
    {
      place: 'KUPWARA – The Delight Of Kashmir',
    },
    {
      place: 'KARGIL – A Witness Of Many Wars',
    },
    {
      place: 'PULWAMA – All About Natural Springs & Apple Orchards',
    },
    {
      place: 'PAHALGRAM – Get Allured By Picturesque Views',
    },
    {
      place: 'JAMMU CITY – The City Of Beauty',
    },
    {
      place: 'SHALIMAR GARDEN – Photographer’s Paradise',
    },
    {
      place: 'JAMA MASJID – Marvel At The Intricate Architecture',
    },
    {
      place: 'VAISHNO DEVI – Heaven For Pilgrims',
    },
    {
      place: 'AMARNATH – Marvel At The Natural Occurences',
    },
    {
      place: 'DACHIGAM NATIONAL PARK -Flora & Fauna',
    },
  ];

  const unimportant = [
    {
      place: 'KATHUA – Lesser-Known Gem',
    },
    {
      place: 'HEMIS – The Famous Snow Leopard Capital',
    },
    {
      place: 'KISHTWAR – Animal Lover’s Paradise',
    },
    {
      place: 'DODA – Mini Kashmir',
    },
    {
      place: 'POONCH – Offbeat Location',
    },
    {
      place: 'ANANTNAG – Home To Temples',
    },
    {
      place: 'NISHAT GARDEN – Perfect For A Laid-Back Day',
    },
    {
      place: 'CHASHMASHAHI – One Of The Mughal Gardens',
    },
    {
      place: 'YOUSMARG – Sit In Tranquility',
    },
    {
      place: 'PATNITOP – Picture-Perfect Paradise',
    },
    {
      place: 'ARU VALLEY – Perfect Place To Unwind',
    },
    {
      place: 'SANASAR – Ideal For Adventure Junkies',
    },
    {
      place: 'KHILANMARG – Paradise for skiing',
    },
    {
      place: 'BALTAL – For picturesque landscapes',
    },
    {
      place: 'BHADERWAH – For stunning vistas',
    },
    {
      place: 'KISHTWAR NATIONAL PARK – For Musk Deer & Himalayan Bear',
    },
  ];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.kashbanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Kashmir</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.kashmap} style={styles.map} />
          <TourDetails 
          duration={"5 nights and 6 days"}
          cost={"25000 to 30000"}
          months={"Summers(Actually 3 seasons) - Spring(March - early May),Summer(early May - late August),Autumn(September - November)"}
          route={"Srinagar - Pahalgam - Gulmarg - Sonmarg - Leh - Ladakh - Kupwara"}
          />
          <Image source={images.kash2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Kashmir</Text>
            <Text style={styles.details}>
              Jammu and Kashmir is a union territory of India locked in
              Himalayan Mountains. Jammu and Kashmir is home to several Valleys
              such as the Kashmir Valley, Chenab Valley, Sindh Valley and Lidder
              Valley. Some major tourist attractions in Jammu and Kashmir are
              Srinagar, the Mughal Gardens, Gulmarg, Pahalgam, Patnitop and
              Jammu. Some areas require a special permit for non-Indians to
              visit.Jammu is famous as the winter capital, while kashmir valley
              is famous for its valleys, lakes.
            </Text>
            <Text style={styles.h3}>About Leh-Ladakh</Text>
            <Text style={styles.details}>
              Ladakh a word which means "land of high passes", is a region in
              Northern India sandwiched between the Karakoram mountain range to
              the north and the Himalayas to the south and is situated at the
              height of 11,400 ft. The Indian portion of Ladakh is composed of
              the Leh and Kargil districts. Leh district is the second largest
              district of India.It has a place where gravity works in opposite
              direction.
            </Text>
          </View>
          <Image source={images.kash3} style={styles.img} />
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
              width: '220%',
              justifyContent: 'space-between',
            }}>
            <StateCard
              heading={'Images'}
              link={
                'https://www.google.com/search?q=kashmir+tourism&sxsrf=ACYBGNQUkY6HCQJCPkraPhEU4zmRXHBWbQ:1579174665455&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiI6-OHhIjnAhX7yjgGHfEKCZkQ_AUoAnoECBIQBA'
              }
              linkdesc={'Kashmir images'}
              description={
                'Find out the images of these places from extensive gallery.'
              }
            />
            <StateCard
              heading={'Images'}
              link={''}
              linkdesc={'Leh-ladakh images'}
              description={
                'Find out the images of these places from extensive gallery.'
              }
            />
            <StateCard
              heading={'Kashmir tourism official website'}
              link={'http://www.jktourism.jk.gov.in/'}
              linkdesc={'Official Kashmir tourism site'}
              description={
                'Learn about the latest developments in the state from the official tourism website and plan your trip accordingly.'
              }
            />
            <StateCard
              heading={'Leh-Ladakh tourism official website'}
              link={'https://leh.nic.in/tourism/tourist-info/'}
              linkdesc={'Official Leh-Ladakh tourism site'}
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

Kashmir.options = {
  topBar: {
    title: {
      text: 'Kashmir',
      color: 'white',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Kashmir;
