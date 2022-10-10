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
import {Header} from '../../components/Shared';
import styles from '../../assets/styles';
import images from '../../assets/images';
//import LinearGradient from 'react-native-linear-gradient';

const Kashmir = () => {
  const mustvisit = [
    {
      place: 'SRINAGAR – Heaven On Earth',
    },
  ];

  const unimportant = [
    {
      place: 'KATHUA – Lesser-Known Gem',
    },
  ];

  return (
    <View style={styles.screen}>
      <Header
        imglink={
          'https://www.google.com/search?q=kashmir+tourism&sxsrf=ACYBGNQUkY6HCQJCPkraPhEU4zmRXHBWbQ:1579174665455&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiI6-OHhIjnAhX7yjgGHfEKCZkQ_AUoAnoECBIQBA'
        }
        link={'http://www.jktourism.jk.gov.in/'}
      />
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground source={images.kashbanner}>
            <View style={{height: 200, width: Dimensions.get('screen').width}}>
              <Text style={styles.h1}>Kashmir</Text>
            </View>
          </ImageBackground>
          <Text style={styles.h2}>Map</Text>
          <Image source={images.kashmap} style={styles.map} />
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
            <Text style={styles.h3}>#Must visit places</Text>
            <Text style={styles.details}>
              <SafeAreaView>
                <FlatList
                  data={mustvisit}
                  renderItem={({item}) => {
                    return (
                      <Text>
                        <View style={styles.dot1} />
                        <Text style={styles.placesitem}> {item.place}</Text>
                      </Text>
                    );
                  }}
                />
              </SafeAreaView>
            </Text>
          </View>
          <View style={styles.places}>
            <Text style={styles.h3}>Not so important</Text>
            <Text style={styles.details}>
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
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Kashmir;
