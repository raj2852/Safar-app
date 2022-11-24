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

const Telen = () => {
  const mustvisit = [
    {
      place: 'Hyderabad - new york city of south India',
    },
    {
      place: 'Papikondalu - lake amongst hills and valleys',
    },
    {
      place: 'Bhandrachala - historic events of the epic Ramayana',
    },
    {
      place: 'Adilabad - sound of gurgling waterfalls,gentle cool breeeze',
    },
    {
      place: 'Nizamabad - rich heritage site',
    },
    {
      place: 'Secunderabad - twin city of hyderabad',
    },
    {
      place: 'Kanakai waterfalls',
    },
    {
      place: 'Gayatri waterfalls',
    },
    {
      place: 'Mallela theertham - brimming waterfall surrounded by lushgreen scenery',
    },
    {
      place: 'Mrugavani national park - famous for peacocks',
    },
    {
      place: 'Nelakondapalli - cultural, religious and historical exploration',
    },
    {
      place: 'Laknavaram cheruvu',
    },
    {
      place: 'Medak cathedral - church in the gothic revival style',
    },
  ];

const unimportant = [
  {
    place: 'Nalgonda - deep routed rich history and culture',
  },
  {
    place: 'Khammam - forts',
  },
  {
    place: 'Karimnagar - Islamic architecture',
  },
  {
    place: 'Chilkur balaji temple',
  },
  {
    place: 'KBR national park',
  },
  {
    place: 'Kinnerasani wildlife sanctuary',
  },
  {
    place: 'Bogatha falls',
  },
  {
    place: 'Vemulawada - numerous remarkable temples',
  },
  {
    place: 'Mahbubnagar - famous for the forts',
  },
  {
    place: 'Medak fort - architectural masterpiece of bygone era',
  },
  {
    place: 'Rachakonda fort',
  },
  {
    place: 'Katilinga - hindu pilgrimage site',
  },
];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.telbanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Telengana</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.telmap} style={styles.map} />
          <TourDetails
          duration={'5 nights and 6 days'}
          cost={'Within 14,000'}
          months={'Winter months from december to mid-march'}
          route={'Nizamabad - Kamareddy - Hyderabad - Mahbubnagar - Nagarkurnool - Mahabubabad - Warangal'}/>
          <Image source={images.tel2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Telengana</Text>
            <Text style={styles.details}>
              Telangana State Tourism Development Corporation (TSTDC) is a state
              government agency which promotes tourism in Telangana, a state in
              the Southern region of India. Retired Director General of Police
              Pervaram Ramulu appointed as First chairman of Telangana State
              Tourism. Tourist attractions in Telangana include historical
              places, monuments, forts, water falls, forests and temples.
            </Text>
          </View>
          <Image source={images.tel3} style={styles.img} />
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
                'https://www.google.com/search?q=telangana+tourism&sxsrf=ACYBGNQG_PIkC9epvM86EppecFbmx_16ag:1579611486017&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiIjYes35TnAhUyg-YKHQ9EAbsQ_AUoAXoECBAQAw&biw=1366&bih=625'
              }
              linkdesc={'Telengana images'}
              description={
                'Find out the images of these places from extensive gallery.'
              }
            />
            <StateCard
              heading={'Telengana tourism official website'}
              link={'https://www.telanganatourism.gov.in/'}
              linkdesc={'Official telengana tourism website'}
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

Telen.options = {
  topBar: {
    title: {
      text: 'Telengana',
      color: 'white',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Telen;
