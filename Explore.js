import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {WebView} from 'react-native-webview';
import images from './images/images';
import styles from './src/styles';

const Explore = props => {
  return (
    <View
      style={{
        height: 'auto',
        width: Dimensions.get('screen').width,
        backgroundColor: '#ffd300',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ScrollView>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.kash4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              Kashmir
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'Kashmir',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.him4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              Himachal Pradesh
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'Himachal',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.pun4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              Punjab
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'Punjab',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.del4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              Delhi - Haryana
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'Delhi',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.raj4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              Rajasthan
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'Rajasthan',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.guj4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              Gujrat
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'Gujrat',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.maha4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              Maharashtra
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'Maharashtra',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.kar4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              Karnataka
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'Karnataka',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.goa4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              Goa
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'Goa',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.ker4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              Kerala
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'Kerala',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.tam4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              TamilNadu
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'TamilNadu',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.andh4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              Andhra Pradesh
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'Andhra',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.tel4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              Telengana
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'Telen',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.madh4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              Madhya Pradesh
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'Madhya',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.cha4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              Chattisgarh
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'Chattis',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.jha4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              Jharkhand
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'Jharkhand',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.ori4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              Orrisa
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'Orrisa',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.bi4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              Bihar
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'Bihar',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.ben4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              Bengal
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'Bengal',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.si4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              Sikkim
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'Sikkim',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.as4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              Assam
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'Assam',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.up4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              Uttar Pradesh
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'up',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.uk4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              Uttarakhand
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'uk',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.megh4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              Meghalaya
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'Meghalaya',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.mani4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              Manipur
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'Manipur',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.tri4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              Tripura
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'Tripura',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.mizo4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              Mizoram and Nagaland
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'mizonaga',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 200,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <ImageBackground
            source={images.aru4}
            resizeMode="cover"
            style={{flex: 1}}>
            <Text style={(styles.exploretext, {fontSize: 24, color: '#fff'})}>
              Arunachal Pradesh
            </Text>
            <Text
              style={(styles.explorelink, {fontSize: 18, color: '#fff'})}
              onPress={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: 'aru',
                  },
                })
              }>
              Visit
            </Text>
          </ImageBackground>
        </View>

        <Text>
          Know the place but don't know the state? Use our{' '}
          <Text style={{fontWeight: 'bold'}}>Help Me Search My state</Text>{' '}
          feature below. Type the initials of the place and find it in the map.
        </Text>
        <View
          style={{
            height: 300,
            width: Dimensions.get('screen').width - 10,
            margin: 5,
            borderWidth: 3,
            borderColor: '#fff',
          }}>
          <WebView
            source={{
              html: '<iframe width="100%" height="100%" src="//jsfiddle.net/eb5qmxo7/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>',
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#50807D',
  },
  topBar: {
    title: {
      color: 'white',
    },
    background: {
      color: '#50807D',
    },
  },
  bottomTab: {
    background: {
      color: '#e33745',
    },
    title: {
      color: '#ffffff',
      fontSize: 14,
      selectedFontSize: 14,
    },
  },
});

export default Explore;
