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

const Sikkim = () => {
  const mustvisit = [
    {
      place: "Gangtok - one of the most beautiful hill stations in the country",
    },
    {
      place: "North-Sikkim - shares boundary with china and nepal",
    },
    {
      place: "Do drul chorten - one of the most import stupas, it has important mantras engraved on cylindrical wheels which can be enchanted by rotating them",
    },
    {
      place: "Barsey rhododendron sanctuary - paradise for nature lovers",
    },
    {
      place: "Tinkitam - petite village in sikkim, viewpoint for mount kanchenjunga",
    },
    {
      place: "Kasturi trek - passes goecha la pass that offers extraordinary panoramic mountain view",
    },
    {
      place: "Dzongri trek - one of the most beautiful valleys",
    },
    {
      place: "Tendong hill - marvellous view of the sikkim valley",
    },
    {
      place: "Tsomgo lake - popularly know as changu lake along the nathu la highway",
    },
    {
      place: "Namchi - top of the sky",
    },
    {
      place: "Kanchenjunga nayional park",
    },
    {
      place: "Yangtey - instance of paradise by monsoons",
    },
    {
      place: "Pelling - the famous pemayangste monastry",
    },
    {
      place: "Cholamu lake - 14th highest lake in the world",
    },
    {
      place: "Thangu valley",
    },
    {
      place: "lachng - tourist spot where the two tributaries lachung and lachen meet",
    },
    {
      place: "Yamtheng valley",
    },
    {
      place: "Lachen - well known for the lachung monastry",
    },
    {
      place: "Nathula pass - mountain pass in the himalayas that joins sikkim and china",
    },
    {
      place: "Gurudongmar lake - second highest lake of sikkim",
    },
    
  ];

const unimportant = [
  {
    place: "Borong - small beautiful village",
  },
  {
    place: "Mangan - capital trekking point of the tourists",
  },
  {
    place: "Ravangla - petitie town with high forested hills",
  },
  {
    place: "Chopta valley - valley of flowers",
  },
  {
    place: "Bikstang - small farmhouse near pelling ",
  },
  {
    place: "Goecha la - trekking",
  },
  {
    place: "Geyzing - lofty and majestic mountains",
  },
  {
    place: "Rumtek monastry - one of the largest and most signiicant monastries of sikkim",
  },
  {
    place: "Aritar - natural beauty, temples and monastries",
  },
  {
    place: "Zuluk",
  },
];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.sibanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Sikkim</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.simap} style={styles.map} />
          <TourDetails
            duration={'4 nights and 5 days'}
            cost={'Within 10,000'}
            months={'Either between March and May or between October to mid-December'}
            route={'West Sikkim - south Sikkim - East Sikkim - North Sikkim'}/>
          <Image source={images.si2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Sikkim</Text>
            <Text style={styles.details}>Sikkim is a state in northeastern India. It borders Tibet in the north and northeast, Bhutan in the east, Nepal in the west, and West Bengal in the south. Sikkim is also located close to India's Siliguri Corridor near Bangladesh. Sikkim is the least populous and second smallest among the Indian states. A part of the Eastern Himalaya, Sikkim is notable for its biodiversity, including alpine and subtropical climates, as well as being a host to Kangchenjunga, the highest peak in India and third highest on Earth. Sikkim's capital and largest city is Gangtok. Almost 35% of the state is covered by the Khangchendzonga National Park.The Kingdom of Sikkim was founded by the Namgyal dynasty in the 17th century. It was ruled by a Buddhist priest-king known as the Chogyal. It became a princely state of British India in 1890. After 1947, Sikkim continued its protectorate status with the Republic of India. It enjoyed the highest literacy rate and per capita income among Himalayan states. In 1973, anti-royalist riots took place in front of the Chogyal's palace. In 1975, the monarchy was deposed by the people. A referendum in 1975 led to Sikkim joining India as its 22nd state</Text>
          </View>
          <Image source={images.si3} style={styles.img} />
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
              link={'https://www.google.com/search?q=sikkim+tourism&sxsrf=ACYBGNREjC0qs4op1rMRzFOMneW8jEDKbA:1580729901811&source=lnms&tbm=isch&sa=X&ved=2ahUKEwia0aHipbXnAhWZzzgGHX8MDHIQ_AUoAXoECBMQAw&biw=1366&bih=625'}
              linkdesc={'Sikkim images'}
              description={
                'Find out the images of these places from extensive gallery.'
              }
            />
            <StateCard
              heading={'Sikkim tourism official website'}
              link={'http://www.sikkimtourism.gov.in/Public/index'}
              linkdesc={'Official sikkim tourism website'}
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

Sikkim.options = {
  topBar: {
    title: {
      text: 'Sikkim',
      color: 'black',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Sikkim;
