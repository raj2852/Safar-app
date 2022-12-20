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

const Assam = () => {
  const mustvisit = [
    {
      place: "Kaziranga national park - famous for thr one horned rhino population of the world",
    },
    {
      place: "Majuli - geographically majuli is a river bound island,formed by the flow of te river waters",
    },
    {
      place: "Guwahati - relaxing enjoyable holiday destination",
    },
    {
      place: "Hajo - ancient pilgrimage center for all the three religions - hindu, muslim and buddhists",
    },
    {
      place: "Silchar - situated on the barak river, known for the scenic beauty",
    },
    {
      place: "Sivasagar - historic forts of the ahom dynasty and historic culture",
    },
    {
      place: "Jorhat - culture, mosques,tombs,gardens and tea plantations",
    },
    {
      place: "Manas national park - UNESCO world heritage site under project save tiger",
    },
    {
      place: "Nameri national park - famous for its elephants, tigers and leopards mainly",
    },
    {
      place: "Lilabari - breathtaking Dirang valley and sela pass",
    },
    {
      place: "Orang national park - oldest game reserves of the state",
    },
    {
      place: "Diphu - picturesque town",
    },
    {
      place: "Bongaigoan - green mat covered mountains",
    },
    {
      place: "Darang - spell binding natural beauty and bird viewing",
    },
    {
      place: "Nagaon - rice bowl of Assam,rich in paddy",
    },
    {
      place: "Matong assam - land of black magic.people say that there is eerir silence completely opposing the chaotic history of the place",
    },
    {
      place: "Bogmoti - Indo-Bhutan border and a serene gateway for travellers",
    },
  ];

const unimportant = [
  {
    place: "Goalpara - scenic town on the banks of river brahmaputra",
  },
  {
    place: "Dibrugarh - inustrial hub of north-east India",
  },
  {
    place: "Tinsukia - natural beauty and villages",
  },
  {
    place: "Dispur - capital city packed with panoramic views and tribal culture",
  },
  {
    place: "Dibru saikhowa national park - one of the 19 biodiversity hotspots",
  },
  {
    place: "Sualkuchi - small sleepy village",
  },
  {
    place: "Karimgunj - lush green surroundings",
  },
  {
    place: "Barpeta - literal meaning big pond",
  },
  {
    place: "Hailakandi - nested in the forest of barak valley, it is a perfect place for people looking for peace and tranquility",
  },
  {
    place: "Nalbari - perfect gateway to explore the wilderness of nature",
  },
  {
    place: "Pobitora wildlife sanctuary",
  },
  {
    place: "Umananda island",
  },
  {
    place: "Sadiya - situated in the himalayan foothills, this place is mainly a grassy plain",
  },
];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.asbanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Assam</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.asmap} style={styles.map} />
          <TourDetails
            duration={'3 nights and 4 days'}
            cost={'Within 13,000'}
            months={'October to April'}
            route={'Guwahati - Dibrugarh - Jorhat - Nagaon - Kamrup - Darang - Bongaigoan'}/>
          <Image source={images.as2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Assam</Text>
            <Text style={styles.details}>Roughly shaped like a bird with wings stretching along the length of the Brahmaputra river, Assam is the main and oldest state in the North-East Region of India and serves as the gateway to the rest of the Seven Sister States. The land of red river and blue hills, Assam comprises three main geographical areas: the Brahmaputra Valley which constitutes the expansive wingspan, the Barak Valley extending like a tail, and the intervening Karbi Plateau and North Cachar Hills. Assam shares its border with Meghalaya, Arunachal Pradesh, Nagaland, Manipur, Tripura, Mizoram and West Bengal; and there are National Highways leading to their capital cities. It also shares international borders with Bhutan and Bangladesh and is very close to Myanmar. In ancient times Assam was known as Pragjyotisha or Pragjyotishpura, and Kamarupa.</Text>
          </View>
          <Image source={images.as3} style={styles.img} />
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
              link={'https://www.google.com/search?q=assam+tourism&sxsrf=ACYBGNS_xbabTemgrI1_BFOz23g54YMVvA:1581517374606&source=lnms&tbm=isch&sa=X&ved=2ahUKEwji4saqm8znAhUOWX0KHTJvB0gQ_AUoAXoECBMQAw&biw=1366&bih=625'}
              linkdesc={'Assam images'}
              description={
                'Find out the images of these places from extensive gallery.'
              }
            />
            <StateCard
              heading={'Assam official tourism website'}
              link={'https://tourism.assam.gov.in/'}
              linkdesc={'Official assam tourism website'}
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

Assam.options = {
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

export default Assam;
