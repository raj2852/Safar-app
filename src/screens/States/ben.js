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

const Bengal = () => {
  const mustvisit = [
    {
      place: 'Sunderbans - famous for the mangroves and the royal bengal tiger',
    },
    {
      place:
        'Victoria memorial(kolkata) - sculptures and articles used by queen victoria while in Bengal',
    },
    {
      place:
        'Eden gardens(kolkata) - one of the largest cricket stadiums with surrounding gardens',
    },
    {
      place:
        'Howrah bridge - hanging bridge which could be opened at a time to pass cargo ships',
    },
    {
      place: 'Park street - catholic churches',
    },
    {
      place: 'Babughat - ganga side',
    },
    {
      place: 'Jorashanko - birth place of world poet Rabindranath tagore',
    },
    {
      place: 'Elgin road - Netaji bhawan',
    },
    {
      place:
        'Kharagpur - largest railstation of the world and border to chattisgarh and jharkhand',
    },
    {
      place: 'Darjeeling - tea plantation and hill station',
    },
    {
      place: 'Kurseong - Land of white orchids',
    },
    {
      place:
        'Sikkim - Nathula pass,zero point,laal baba mandir,lachung-lachang,yanthem',
    },
    {
      place: 'Siliguti - gateway of north-east India,temples, tea gardens',
    },
    {
      place: 'Mirik - Himalayan valley',
    },
    {
      place: 'Dooars - rich forest and wildlife sanctuary',
    },
    {
      place: 'Mandarmani - largest stretch of the bay of Bengal beach',
    },
    {
      place: 'Kalimpong - panoramic valley',
    },
    {
      place:
        'Murshidabad - reign of the pre british nawabs.Hazar duari, kaath gola,nizamat imambara,footi mosque,wasif manzil,khosh bahan,katra mosque,jahan mosha cannon,nashirpur palace',
    },
    {
      place: 'Navadwipa and mayapur - God own land',
    },
    {
      place: 'Santiniketan - rabindranath home, museum, rural artefacts',
    },
    {
      place: 'Bakkhali - perfect beach gateway',
    },
    {
      place: 'Bankura and Bishnupur - terracotta architectures and hills',
    },
    {
      place:
        'Cooch bihar - once a province of Koch dynasty makes a good eco tourism destination',
    },
    {
      place:
        'Tarapith - famous Hindu Pilgrimage, believed to be the place where eyes of Sati(goddess Durga) fell',
    },
    {
      place:
        'Purulia - mesmerizing natural beauty with lakes hills and greenery, chau dance form',
    },
    {
      place:
        'jalpaiguri - mainly famous for its wildlife diversity, Gorumara national park(Asian elephants,one-horned rhino,great Indian hornbill)',
    },
    {
      place:
        'Gangasagar - Island destination near sunderbans which becomes lit during festive season of "makar sankranti"',
    },
    {
      place: 'Belur math - swami vivekananda work and meditation place',
    },
    {
      place:
        'Sandakphu - is the highest peak in west bengal, almost near the border of nepal',
    },
    {
      place: 'Buxa - tiger reserve',
    },
    {
      place:
        'Jayrambati - birth place of holy mother sri sarada devi, old world charm',
    },
    {
      place: 'Tinchule - offbeat hamlet',
    },
    {
      place: 'Kamarpukur - birth place of the pious and sagacious saint , sri ramkrishna paramhansa',
    },
    {
      place: 'Bakreshwar - mythology lovers paradiseN',
    },
  ];

const unimportant = [
  {
    place:
      'Durgapur - Steel capital of East India, Durgapur barrage or damodar river dam',
  },
  {
    place: 'Haldia - mere river port assisting kolkata',
  },
  {
    place: 'Raichak - fresh air ghat',
  },
  {
    place: 'Lataguri - outskirts of national park',
  },
  {
    place: 'Lalegaon - snow capped mountains and ancient buddhist monastries',
  },
  {
    place: 'Bardhaman - old world charm',
  },
  {
    place:
      'Mukut manipur - located near kolkata is a popular weekend destination',
  },
  {
    place: 'Malda - mosques and mango varieties that go abroad mainly',
  },
  {
    place: 'Shankarpur - located near digha, has pristine beaches',
  },
  {
    place: 'Chandannagar - city of lights',
  },
  {
    place: 'Midnapore - experience the remote rural culture',
  },
  {
    place:
      'Bagdogra - small hill station town at the foothills of the himalayas',
  },
  {
    place: 'Rishyap - quiet romantic village en-route  to darjeeling',
  },
  {
    place: 'Surulia - popular picnic spot amongst travellers',
  },
  {
    place: 'Tajpur - between shankarpur and mandarmani this is the only sea-shore where the waves hit a bit high',
  },
  {
    place: 'Baabur haat - long stretches of farmlands',
  },
];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.benbanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Bengal</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.benmap} style={styles.map} />
          <TourDetails
          duration={'11 nights and 12 days'}
          cost={'Within 25,000'}
          months={'October to march'}
          route={'Kolkata - Darjeeling - Sikkim - Siliguri - Santiniketan - Malda - Murshibad - Digha - Mednipur - Bishnupur - Bankura - Durgapur'}/>
          <Image source={images.ben2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Bengal</Text>
            <Text style={styles.details}>
              West Bengal is a state in the eastern region of India and is the
              nation's fourth-most populous.The state capital is Kolkata. The
              state encompasses two broad natural regions: the Gangetic Plain in
              the south and the sub-Himalayan and Himalayan area in the north.
              West Bengal, located on eastern bottleneck of India stretching
              from the Himalayas in the north to the Bay of Bengal in the south,
              presents some of marvelous landscape features and natural scenic
              beauty. Some of India's most preferred travel destinations like;
              the Darjeeling Himalayan hill region in the northern extreme of
              the state, the highest peak of the state Sandakphu (3,636 m or
              11,929 ft) and the Sundarbans mangrove forests in the extreme
              south
            </Text>
          </View>
          <Image source={images.ben3} style={styles.img} />
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
                'https://www.google.com/search?q=bengal+tourism&sxsrf=ACYBGNSfjovzQSWcl3qlvGZBCciWjO8uoQ:1579779424395&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi-lKj70JnnAhUF93MBHcwWDoMQ_AUoAnoECBEQBA&biw=1366&bih=625'
              }
              linkdesc={'bengal images'}
              description={
                'Find out the images of these places from extensive gallery.'
              }
            />
            <StateCard
              heading={'Bengal tourism official website'}
              link={'https://wbtourism.gov.in/'}
              linkdesc={'Official bengal tourism website'}
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

Bengal.options = {
  topBar: {
    title: {
      text: 'Bengal',
      color: 'black',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Bengal;
