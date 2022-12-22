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
import {StateCard, TourDetails} from '../../components/Shared';
import styles from '../../assets/styles';
import images from '../../assets/images';
import colors from '../../assets/colors';

//import LinearGradient from 'react-native-linear-gradient';

const Aru = () => {
  const mustvisit = [
    {
      place: "Tawang - beautiful monastries and birthplace of Dalai lama",
    },
    {
      place: "Ziro - offbeat destnation home to the apatani tribe famous for the pine hills",
    },
    {
      place: "Bhalukpong - nature lover's paradise and adventure spot",
    },
    {
      place: "Roing - snow peaked mountains and turbulent rivers cascading down the hills",
    },
    {
      place: "Itanagar - with the brahmaputra river flowing alongside this place is a nature's paradise",
    },
    {
      place: "Anini - green velvet covered plains",
    },
    {
      place: "Bomdilla - beautiful hilly valeys",
    },
    {
      place: "Tirap - lustrous rivulets with green and vibrant orchids",
    },
    {
      place: "Nuranang falls - largely unknown and virgin place, offering a pristine and beautiful experience",
    },
    {
      place: "Madhuri lake rocky mountains and an ever present lake",
    },
  ];

const unimportant = [
  {
    place: "Pasighat",
  },
  {
    place: "Along - mechuka valley with plantation site",
  },
  {
    place: "Daporijo",
  },
  {
    place: "Khonsa - dense forests and deep gorges",
  },
  {
    place: "Changlang - shares international boundary with myanmar",
  },
  {
    place: "Yingkiong - river siang flows besides this district",
  },
  {
    place: "Yupia",
  },
  {
    place: "Sela pass - heavenly gateway",
  },
  {
    place: "Mechuka",
  },
];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.arubanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Arunachal Pradesh</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.arumap} style={styles.map} />
          <TourDetails
          duration={'6 nights and 7 days'}
          cost={'Within 22,000'}
          months={'October to April are the best months'}
          route={'Tawang - Kameng - Kurang - Subang - Siang - Dibang - Lohit - Changlang'}/>
          <Image source={images.aru2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Arunachal Pradesh</Text>
            <Text style={styles.details}>Arunachal Pradesh, literally "land of dawn-lit mountains" is the northeasternmost state of India. It borders the states of Assam and Nagaland to the south. It shares international borders with Bhutan in the west, Myanmar in the east, and China in the north, with which the border is the McMahon Line. Itanagar is the state capital.</Text>
          </View>
          <Image source={images.aru3} style={styles.img} />
          <View style={styles.places}>
            <Text style={[styles.screen,styles.h3, {marginBottom: 4,}]}>
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
            <Text style={[styles.screen,styles.h3,  {marginBottom: 4}]}>
              Not so important
            </Text>

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
              link={'https://www.google.com/search?q=ARUNACHAL+PRADESH+TOURISM&sxsrf=ACYBGNQrbDghzaO2_4peXskGUf1_o9NRdA:1581526018786&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjc4bXEu8znAhXmyzgGHUkyATsQ_AUoAXoECBQQAw&biw=1366&bih=625'}
              linkdesc={'Arunachal Pradesh images'}
              description={
                'Find out the images of these places from extensive gallery.'
              }
            />
            <StateCard
              heading={'Arunachal Pradesh tourism official website'}
              link={'https://arunachaltourism.com/'}
              linkdesc={'Official arunachal pradesh tourism website'}
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

Aru.options = {
  topBar: {
    title: {
      text: 'Arunachal Pradesh',
      color: 'black',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Aru;
