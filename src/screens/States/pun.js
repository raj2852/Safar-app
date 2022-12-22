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

const Punjab = () => {
  const mustvisit = [
    {
      place: 'Golden Temple - Amritsar',
    },
    {
      place: 'jallianwala bagh - Amritsar',
    },
    {
      place: 'Akal takht - Amritsar',
    },
    {
      place: 'Wagah border - Amritsar',
    },
    {
      place: 'Summer palace of maharaja Ranjit Singh',
    },
    {
      place: 'The rock garden - Chandigarh',
    },
    {
      place: 'Government museum and art gallery - Chandigarh',
    },
    {
      place: 'Timber trail - Chandigarh',
    },
    {
      place: 'Butterfly park - Chandigarh',
    },
    {
      place: 'Yadvinder garden - Chandigarh',
    },
    {
      place: 'Garden of fragnance - Chandigarh',
    },
    {
      place: 'Chandigarh botanical garden and nature park - Chandigarh',
    },
    {
      place: 'Shanti kunj - Chandigarh',
    },
    {
      place: 'Morni hills - Chandigarh',
    },
    {
      place: 'Terraced garden - Chandigarh',
    },
    {
      place: 'International dolls museum - Chandigarh',
    },
    {
      place: 'Imam Nasir masjid - Jalandhar',
    },
    {
      place: 'Shahed-e-azam Sardar Bhagat Singh museum - Jalandhar',
    },
    {
      place: 'Wonderland theme park - Jalandhar',
    },
    {
      place: 'Devi talab mandir - Jalandhar',
    },
    {
      place: 'St. Mary Cathedral church - Jalandhar',
    },
    {
      place: 'Lodhi fort - Ludhiana',
    },
    {
      place: 'Rural heritage museum - Ludhiana',
    },
    {
      place: 'Tiger zoo - Ludhiana',
    },
    {
      place: 'Maharaja Ranjit Singh war museum - Ludhiana',
    },
    {
      place: 'Moti bagh palace - Patiala',
    },
    {
      place: 'Sheesh mahal - Patiala',
    },
    {
      place: 'Darbar hall - Patiala',
    },
    {
      place: 'Lachman jhoola - Patiala',
    },
    {
      place: 'Bhatinda fort - Bhatinda',
    },
    {
      place: 'Qila mubarak - Bhatinda',
    },
    {
      place: 'Bhatinda zoological park - Bhatinda',
    },
    {
      place: 'Ranjit Singh dam - Pathankot',
    },
    {
      place: 'Hydraulic research station - Pathankot',
    },
    {
      place: 'Shahpurkandi fort - Pathankot',
    },
    {
      place: 'The jagatjit palace - kupurthala',
    },
    {
      place: 'Elysee palace - Kupurthala',
    },
    {
      place: 'Shalimar garden - Kupurthala',
    },
    {
      place: 'Rose garden - Mohali',
    },
    {
      place: 'Rock garden - Mohali',
    },
    {
      place: 'Anandpur sahib - Ropar',
    },
    {
      place: 'Bhakra nangal dam - Ropar',
    },
    {
      place: 'Ropar wetland - Ropar',
    },
  ];

const unimportant = [
  {
    place: 'Tara Taran Sahib - Amritsar',
  },
  {
    place: 'Maharaja ranjit Singh panorama - Amritsar',
  },
  {
    place: 'maharaja Ranjit Singh museum - Ammritsar',
  },
  {
    place: 'Rambagh garden - Amritsar',
  },
  {
    place: 'Harike wetland and bird sanctuary - Amritsar',
  },
  {
    place: 'Khalsa college - Amritsar',
  },
  {
    place: 'Durgiana temple - Amritsar',
  },
  {
    place: 'Bathinder fort -  Amritsar',
  },
  {
    place: 'kaiser bagh park -  Amritsar',
  },
  {
    place: 'Sukhna lake - Chandigarh',
  },
  {
    place: 'Chhatbir zoo - Chandigarh',
  },
  {
    place: 'Rose garden - Chandigarh',
  },
  {
    place: 'Le corbusier center - Chandigarh',
  },
  {
    place: 'Sankaria cactus garden - Chandigarh',
  },
  {
    place: 'Mahendra chaudhury garden and leisure park - Chandigarh',
  },
  {
    place: 'Leisure park - Chandigarh',
  },
  {
    place: 'Tuldi mandir - Jalandhar',
  },
  {
    place: 'Shiv mandir - Jalandhar',
  },
  {
    place: 'Pushpa gujral Science city - Jalandhar',
  },
  {
    place: 'Company bagh - Jalandhar',
  },
  {
    place: 'Niku Park - jalandhar',
  },
  {
    place: 'Rangla punjab haveli - Jalandhar',
  },
  {
    place: 'Prithvi planet - Jalandhar',
  },
  {
    place: 'Sheetal mandir - Jalandhar',
  },
  {
    place: 'Gurudwara charn kamal - Ludhiana',
  },
  {
    place: 'Phillaur fort - Ludhiana',
  },
  {
    place: 'Nehru rose garden - Ludhiana',
  },
  {
    place: 'Deer park - Ludhiana',
  },
  {
    place: 'Quila mubarak complex - Patiala',
  },
  {
    place: 'Banur - Patiala',
  },
  {
    place: 'Samana - Patiala',
  },
  {
    place: 'Baradari garden - Patiala',
  },
  {
    place: 'Bir moti bagh sanctuary - Patiala',
  },
  {
    place: 'Kali temple(Mall road) - Patiala',
  },
  {
    place: 'Rose garden - Bhatinda',
  },
  {
    place: 'Bhatinda lake - Bhatinda',
  },
  {
    place: 'Lakhi jungle - Bhatinda',
  },
  {
    place: 'Bir talab zoo - Bhatinda',
  },
  {
    place: 'Chetak park - Bhatinda',
  },
  {
    place: 'Dhobi bazaar - Bhatinda',
  },
  {
    place: 'Mukteshwar temple - Pathankot',
  },
  {
    place: 'Ashapurnin mandir - Pathankot',
  },
  {
    place: 'Kathgarh temple - Pathankot',
  },
  {
    place: 'Nurpur temple - Pathankot',
  },
  {
    place: 'Jagatjit club - Kupurthala',
  },
  {
    place: 'Panj mandir - Kupurthala',
  },
  {
    place: 'Kanjli wetland - Kupurthala',
  },
  {
    place: 'Nihal palace - Kupurthala',
  },
  {
    place: 'State gurudwara - kupurthala',
  },
  {
    place: 'Moorish mosque - Kupurthala',
  },
  {
    place: 'Silvi park - Mohali',
  },
  {
    place: 'Mataur lake - Mohali',
  },
  {
    place: 'Sukhna lake - Mohali',
  },
  {
    place: 'Sukhna wildlife sanctuary - Mohali',
  },
  {
    place: 'Gurudwara Amb sahib - Mohali',
  },
  {
    place: 'Mansa devi temple - Mohali',
  },
  {
    place: 'Gurudwara nada sahib - Mohali',
  },
  {
    place: 'Punjab cricket association stadium - Mohali',
  },
  {
    place: 'Chamkaur sahib - Ropar',
  },
  {
    place: 'Gurudwara Parivar vicchora sahib - Ropar',
  },
  {
    place: 'Gurudwara Bhatta sahib - Ropar',
  },
  {
    place: 'Jateshwar mahadev temple - Ropar',
  },
];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.punbanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Punjab</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.punmap} style={styles.map} />
          <TourDetails
            duration={'4 Nights and 5 days'}
            cost={'20,000'}
            months={'Between the months of October and March'}
            route={
              'Amritsar - Jalandhar - Ludhiana - Patiala - Chandigarh - Anandpur Sahib'
            }
          />
          <Image source={images.pun2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Punjab</Text>
            <Text style={styles.details}>
              The state of Punjab is renowned for its cuisine, culture and
              history. Punjab has a vast public transportation and communication
              network. Some of the main cities in Punjab are Amritsar,
              Jalandhar, Patiala, Pathankot and Ludhiana. Patiala is known for
              its historical forts. Punjab also has a rich Sikh religious
              history.Punjab receives many religious tourists, as the state is
              home to some of the holiest places in Sikhism, including the
              Harmandir Sahib and three of the five Panj Takht.
            </Text>
          </View>
          <Image source={images.pun3} style={styles.img} />
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
            <Text style={styles.h3}>Not so important</Text>

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
                'https://www.google.com/search?q=punjab+tourism&tbm=isch&sxsrf=ACYBGNRY6M9kRcRuITiUEQexHBRkYJ6XDA:1579418696140&source=lnms&sa=X&ved=0ahUKEwiz69aSkY_nAhUlH7cAHdTxCYkQ_AUICigB&biw=1366&bih=625&dpr=1'
              }
              linkdesc={'Punjab Images'}
              description={
                'Find out the images of these places from extensive gallery.'
              }
            />
            <StateCard
              heading={'Punjab tourism official website'}
              link={'https://punjabtourism.punjab.gov.in/'}
              linkdesc={'Official punjab tourism site'}
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

Punjab.options = {
  topBar: {
    title: {
      text: 'Punjab',
      color: 'black',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Punjab;
