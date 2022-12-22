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

const Delhi = () => {
  const mustvisit = [
    {
      place: 'Taj Mahal - One of the seven wonders of the world',
    },
    {
      place: 'Fatehpur Sikri',
    },
    {
      place: 'Gurgoan - Fast growing city near dwarka',
    },
    {
      place: 'Kurukshetra - Site of the epic battle of Mahabharat',
    },
    {
      place: 'Panchkula - Peacock palace',
    },
    {
      place: 'Faridabad - largest city of haryana and major industrial hub',
    },
    {
      place: 'Panipat - Site of the battle of Panipat,forts and monuments',
    },
    {
      place: 'Narnaul - Important seat of Dwapar yuga of Mahabharat',
    },
    {
      place:
        'Nuh - Roots of the Aryan civilization and later the tughlaq dynasty',
    },
    {
      place: 'Rohtak - part of NCR(National capital region)',
    },
    {
      place: 'Sultanpur bird sanctuary',
    },
    {
      place:
        'Damdama lake - commisioned by the british in 1947 for rain water harvesting',
    },
    {
      place:
        'Kalesar national park - protected area for elephants,leopards,panthers',
    },
    {
      place: 'Yamuna nagar - haryana',
    },
    {
      place: 'Red fort - museum,made of red stones(symbolizes mughal rule)',
    },
    {
      place:
        'Humayun tomb - Monument built by queen haji begum(persian architecture)',
    },
    {
      place:
        'Qutab minar - commemorates victory and beginning of mughal era in India',
    },
    {
      place: 'Lotus temple - Symbolizes 4 religions: hinduism,islam,buddhism,jainism',
    },
    {
      place: 'Akshardham temple - World largest hindu temple',
    },
    {
      place: 'India gate - War memorial for the soldiers killed during the first world war(names inscribed in the walls)',
    },
    {
      place: 'Jama masjid - red sandstone and white marbel monument by shah jahan',
    },
    {
      place: 'National museum - Harappan civilization to British colonial era',
    }
  ];

const unimportant = [
  {
    place: 'karnal - historical charm of the mahabharat',
  },
  {
    place:
      'Lodi gardens - 90 acre garden built by the british around the tombs of rulers of the 15th and 16th century',
  },
  {
    place: 'Chandni chowk - largest and oldest market of India',
  },
  {
    place: 'Tughlaqabad fort - ruins of the historical period',
  },
  {
    place:
      'Nizzamuddin dargah - dedicated to the sufi saint, Khwaja Nizamuddin Auliya',
  },
  {
    place: 'Safdarjung tomb - Last example of mughal monument tomb',
  },
];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.delbanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Delhi-Haryana</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.delmap} style={styles.map} />
          <TourDetails
            duration={'3 Nights and 4 Days'}
            cost={'Within 25,000'}
            months={'October,November or February,March are peak seasons'}
            route={'Old Delhi - Agra - Taj Mahal - New Delhi'}
          />
          <Image source={images.del2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Delhi</Text>
            <Text style={styles.details}>
              Currently the capital of the country and registered as an Union
              territory is famous for the landscapes,architectural manifestos
              and the market.Historically Delhi was the reigning capital pf the
              mughals, the era during which the Taj mahal was built,currently
              registered as one of the seven wonders of the world.
            </Text>
            <Text style={styles.h3}>About Haryana</Text>
            <Text style={styles.details}>
              Well known for the production of woolen garments, haryana is a
              small state located adjacent to Delhi. Some of the mughal
              architectural beauties are located in this state, so we suggest to
              tour Delhi and Haryana together.
            </Text>
          </View>
          <Image source={images.del3} style={styles.img} />
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
              link={
                'https://www.google.com/search?q=delhi+tourism&sxsrf=ACYBGNTd6xX-zg0qhIvhZpZafJI29vPgUg:1579416708424&source=lnms&tbm=isch&sa=X&ved=2ahUKEwidm-7eiY_nAhVXIbcAHdiYAZQQ_AUoAXoECBkQAw&biw=1366&bih=625'
              }
              linkdesc={'Delhi images'}
              description={
                'Find out the images of these places from extensive gallery.'
              }
            />
            <StateCard
              heading={'Images'}
              link={
                'https://www.google.com/search?q=haryana+tourism&tbm=isch&ved=2ahUKEwil_I2Fj_v6AhXA0XMBHX8nBAwQ2-cCegQIABAA&oq=haryana+tourism&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6BwgAELEDEEM6BAgAEEM6BggAEAcQHlCTrQJYorkCYJjEAmgBcAB4AIABngKIAe8PkgEFMC44LjKYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=GrNXY6WHEMCjz7sP_86QYA&bih=625&biw=1366'
              }
              linkdesc={'Haryana images'}
              description={
                'Find out the images of these places from extensive gallery.'
              }
            />
            <StateCard
              heading={'Delhi tourism official website'}
              link={'https://www.delhitourism.gov.in/'}
              linkdesc={'Official Delhi tourism website'}
              description={
                'Learn about the latest developments in the state from the official tourism website and plan your trip accordingly.'
              }
            />
            <StateCard
              heading={'Haryana tourism official website'}
              link={'https://haryanatourism.gov.in/'}
              linkdesc={'Official Haryana tourism website'}
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

Delhi.options = {
  topBar: {
    title: {
      text: 'Delhi-Haryana',
      color: 'black',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Delhi;
