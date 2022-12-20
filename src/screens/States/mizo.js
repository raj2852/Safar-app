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

const Mizonaga = () => {
  const mustvisit = [
    {
      place: "Aizawl - home to the state museum (Mizoram)",
    },
    {
      place: "Lunglei - the bridge of rock,famous for scenic beauty (mizoram)",
    },
    {
      place: "Saiha - best bet for angling enthusiasts (Mizoram)",
    },
    {
      place: "Kolasib - greenary and lakes (Mizoram)",
    },
    {
      place: "Reiek - highest hills f mizoram where the clouds kiss the mountain peaks (Mizoram)",
    },
    {
      place: "Vantawng falls - highest waterfall in the state (Mizoram)",
    },
    {
      place: "Hmuifang - rock scenic beauty (Mizoram)",
    },
    {
      place: "Tamdil - tam lake,largest lake in the state (Mizoram)",
    },
    {
      place: "Falkawn - modern village with traditional lifestyle (Mizoram)",
    },
    {
      place: "Kohima - natural and ethnic beauty, still ruled by the warriors of naga tribe (nagaland)",
    },
    {
      place: "Tuensang - naturally formed finger shaped tree trunks (Nagaland)",
    },
    {
      place: "Touphema village - green and verdant hillock placed village (Nagaland)",
    },
    {
      place: "Khonoma village - terrace farm lands (Nagaland)",
    },
    {
      place: "Kisama - naga heritage village (Nagaland)",
    },
    {
      place: "Shilloi lake - foot shaped lake in the herat of the state (Nagaland)",
    },
    
  ];

const unimportant = [
  {
    place: "Serchhip - district with the highest literacy rate in India (Mizoram)",
  },
  {
    place: "Chamhai - budding cultural hub (Mizoram)",
  },
  {
    place: "Dampa tiger reserve (Mizoram)",
  },
  {
    place: "Phawngpui (Mizoram)",
  },
  {
    place: "Mokokchung - most significant urban hub (Nagaland)",
  },
  {
    place: "Dimapur - land of transit (Nagaland)",
  },
  {
    place: "Phek - hilly area rich in flora and fauna (Nagaland)",
  },
];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.mizobanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Mizoram and Nagaland</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.mizomap} style={styles.map} />
          <Image source={images.nagamap} style={styles.map} />
          <TourDetails
            duration={'6 nights and 7 days'}
            cost={'Within 25,000'}
            months={'Between November to March'}
            route={'Aizawal - Tamdil - Baktawng - Reiek - Mokokchung - Longleng - Tuensang - Kiphire - Phek - Kohima - Dimapur'}/>
          <Image source={images.mizo2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Mizoram</Text>
            <Text style={styles.details}>Mizoram is a state in the northeast of India. Mizoram is considered by many as a beautiful place due to its dramatic landscape and pleasant climate. There have been many attempts to increase revenue through tourism but many potential tourists find the lack of amenities to be a hurdle. However, the State continues to promote itself and many projects have been initiated. The tourism ministry continues to maintain or upgrade its tourist lodges throughout the state. Foreign tourists are required to obtain an 'inner line permit' under the special permit before visiting. The permit can be obtained from Indian missions abroad for a limited number of days or direct from Mizoram Government authorities within India. The state is rich in bird diversity, which has the potentiality to make it a major birding destination. For Mrs Hume's pheasant (Syrmaticus humiae), Mizoram is a stronghold. There is also a rare record of the wild water buffalo from the state. There are several past records of the Sumatran rhinoceros from Mizoram, then Lushai Hills.The small population of wild elephants can be seen in Ngengpui and Dampa Sanctuaries.Some of the interesting sites are Mizo Poets' Square also known as Mizo Hlakungpui Mual in Mizo, the Great Megaliths locally known as 'Kawtchhuah Ropui'</Text>
            <Text style={styles.h3}>About Nagaland</Text>
            <Text style={styles.details}>The state is mostly mountainous except those areas bordering Assam valley which comprises 9% of the total area of the state. Mount Saramati is the highest peak at 3,840 metres and its range forms a natural barrier between Nagaland and Myanmar. It lies between the parallels of 98 and 96 degrees east longitude and 26.6 and 27.4 degrees latitude north. The state is home to a rich variety of flora and fauna.</Text>
          </View>
          <Image source={images.mizo3} style={styles.img} />
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
              width: '180%',
              justifyContent: 'space-between',
            }}>
            <StateCard
              heading={'Images'}
              link={'https://www.google.com/search?q=mizoram+tourism&sxsrf=ACYBGNSgr4p80F0XBGIrnESYdKN6Y5ObeA:1581569557608&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjRpqzd3c3nAhUV6XMBHbxiAGIQ_AUoAXoECBMQAw&biw=1366&bih=625'}
              linkdesc={'Mizoram images'}
              description={
                'Find out the images of these places from extensive gallery.'
              }
            />
            <StateCard
              heading={'Images'}
              link={'https://www.google.com/search?q=nagaland+tourism&hl=en&sxsrf=ACYBGNTMVkVSb2UyhcRdaebEdJyLF1E_uA:1581570006828&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjH1Maz383nAhVN8HMBHcLqAH4Q_AUoAXoECBMQAw&biw=1366&bih=625'}
              linkdesc={'Nagaland images'}
              description={
                'Find out the images of these places from extensive gallery.'
              }
            />
            <StateCard
              heading={'Mizoram tourism official website'}
              link={'https://tourism.mizoram.gov.in/'}
              linkdesc={'Official mizoram tourism website'}
              description={
                'Learn about the latest developments in the state from the official tourism website and plan your trip accordingly.'
              }
            />
            <StateCard
              heading={'Nagaland tourism official website'}
              link={'https://tourism.nagaland.gov.in/'}
              linkdesc={'Official nagaland tourism website'}
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

Mizonaga.options = {
  topBar: {
    title: {
      text: 'Mizoram and Nagaland',
      color: 'white',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Mizonaga;
