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

const Up = () => {
  const mustvisit = [
    {
      place: "Agra - famou for the taj mahal, one of the seven wonders of the world",
    },
    {
      place: "Varanasi - holy city located on the banks of river Ganga",
    },
    {
      place: "Vrindavan - believed to be the place where lord Krishna grew up",
    },
    {
      place: "Lucknow - city of nawabs,islamic architectures",
    },
    {
      place: "Allahabad - meeting point of river Ganga,Yamuna and Saraswati,Kumbh mela location",
    },
    {
      place: "Mathura - birthplace of Lord Krishna",
    },
    {
      place: "Sarnath - city of buddhist stupas",
    },
    {
      place: "Vindhyachal - famous hindu pilgrimage spot",
    },
    {
      place: "Chitrakoot - mythologically this is the place where lord Rama,his wife Sita and brother Lakshman spent eleven and half years of their fourteen years of exile",
    },
    {
      place: "Ayodhya - birthplace of lord Rama,Ram janmabhoomi and for islams the Babri masjid",
    },
    {
      place: "National Chambal wildlife - main attractions are gharial,red crowned turtle,gangetic dolphins",
    },
    {
      place: "Jhansi - historic city of the lady warrior Lakshmi Bai",
    },
    {
      place: "Hastinapur - center of the glorious epic Mahabharata",
    },
    {
      place: "Firozabad - the city of bangles",
    },
    {
      place: "Fatehpur sikri",
    },
    {
      place: "Bateshwar temple - originally birth place of the dacoits of Chambal",
    },
    {
      place: "Fort of Unchagaon",
    },
    {
      place: "Dewa sharif",
    },
  ];

const unimportant = [
  {
    place: "Dudhwa national park - rich diversity of flora and fauna",
  },
  {
    place: "Noida",
  },
  {
    place: "Kanpur - industrial capital",
  },
  {
    place: "Muzzafarpur nagar - monuments of Mughal period",
  },
  {
    place: "Ghaziabad - gateway of uttarpradesh",
  },
  {
    place: "Meerut - rich culture",
  },
  {
    place: "Loni",
  },
  {
    place: "Kushinagar - spiritual excursions",
  },
  {
    place: "Barsana - birthplace of mata Radha",
  },
  {
    place: "Shravasti - sacred place of Hindu Pilgrimage",
  },
  {
    place: "Bithoor",
  },
  {
    place: "nawabganj bird sanctuary",
  },
];

  return (
    <View style={[styles.screen, {marginBottom: 4}]}>
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.andhbanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Uttarpradesh</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.upmap} style={styles.map} />
          <TourDetails
            duration={'7 nights and 8 days'}
            cost={'Within 20,000'}
            months={'October to March.Though you can visit through out the year'}
            route={'Agra - Varanasi - Firozabad - Fatehpur - Mathura - Vrindavan'}/>
          <Image source={images.up2} style={styles.img} />
          <View style={styles.about}>
            <Text style={styles.h3}>About Uttarpradesh</Text>
            <Text style={styles.details}>Situated in the northern part of India, bordering with the capital of India New Delhi, Uttar Pradesh is one of the most popular and an established tourist destination for both Indians and non-Indians alike in India. The most populous state of India, Uttar Pradesh contains many historical monuments and places of religious significance. Geographically, Uttar Pradesh is very diverse, with Himalayan foothills in the extreme north and the Gangetic Plain in the centre. It is also home of India's most visited sites, the Taj Mahal, and Hinduism's holiest city, Varanasi. Kumbh city, Allahabad. Kathak, one of the eight forms of Indian classical dances, originated from Uttar Pradesh. Uttar Pradesh is at the heart of India, hence it is also known as The Heartland of India. Cuisine of Uttar Pradesh like Awadhi cuisine, Mughlai cuisine, Kumauni cuisine are very famous not only in India but also many places abroad.Uttar Pradesh is known for its rich culture and tradition. It is home to Ayodhya and Mathura birthplace of Lord Rama and Lord Krishna respectively. Uttar Pradesh attracts many national and international tourists. Taj Mahal, one of the New Seven Wonders of the World in Agra is also located in Uttar Pradesh.</Text>
          </View>
          <Image source={images.up3} style={styles.img} />
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
              link={'https://www.google.com/search?q=UTTARPRADESH+TOURISM&sxsrf=ACYBGNSuzOdNIk8lFkJHEk0oE17oVEQG5Q:1580110397911&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi1veT3oaPnAhV76XMBHQPIDn4Q_AUoAnoECBIQBA&biw=1366&bih=625'}
              linkdesc={'Uttarpradesh images'}
              description={
                'Find out the images of these places from extensive gallery.'
              }
            />
            <StateCard
              heading={'Uttarpradesh official tourism website'}
              link={'https://www.uptourism.gov.in/en'}
              linkdesc={'Official uttarpradesh tourism website'}
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

Up.options = {
  topBar: {
    title: {
      text: 'Uttarpradesh',
      color: 'white',
      fontSize: 20,
      fontWeight: '500',
    },
    background: {
      color: colors.statusColor,
    },
  },
};

export default Up;
