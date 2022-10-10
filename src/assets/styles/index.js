import {StyleSheet, Dimensions} from 'react-native';
import colors from '../colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    /*justifyContent: 'center',*/
  },
  glasscard: {
    marginTop: 5,
    width: Dimensions.get('screen').width,
    height: 200,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 10,
    shadowColor: 'rgba(0,0,0,0.5)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.5)',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(255,255,255,0.5)',
  },
  carousel: {
    width: '100%',
    height: 650,
    flex: 1,
    //borderRadius: '0 0 50% 50%',

    //backgroundColor: '#5c5c5c',
    paddingBottom: 80,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },
  heading: {
    fontSize: 28,
    color: 'green',
    padding: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  desc: {
    fontSize: 20,
    color: 'green',
    padding: 20,
    backgroundColor: '#fff',
  },
  footer: {
    flex: 1,
    backgroundColor: 'indigo',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  footertext: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 12,
  },
  button: {
    borderWidth: '3',
    borderColor: '#fff',
    width: '100%',
    borderRadius: 10,
    fontSize: 16,
  },
  bottomtab: {
    flexDirection: 'row',
    backgroundColor: '#e33745',
    justifyContent: 'space-around',
    width: Dimensions.get('screen').width,
    padding: 10,
  },
  bottombtn: {
    flex: 3,
  },
  exploretext: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 24,
    color: '#fff',
  },
  explorelink: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 18,
  },
  nav: {
    color: '#fff',
  },
  screen: {
    height: 'auto',
    width: Dimensions.get('screen').width,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  h1: {
    fontSize: 70,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    opacity: 0.9,
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'justify',
    color: '#5c5c5c',
    margin: 4,
    marginTop: 20,
    marginBottom: 20,
  },
  h2: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#5c5c5c',
  },
  map: {
    height: 300,
    width: 300,
    resizeMode: 'contain',
  },
  img: {
    height: 300,
    width: '80%',
    resizeMode: 'contain',
  },
  h3: {
    fontSize: 40,
    color: '#5c5c5c',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  about: {
    height: 'auto',
    width: Dimensions.get('screen').width - 20,
    borderStyle: 'solid',
    borderWidth: 5,
    borderColor: '#ffd300',
  },
  dot1: {
    height: 10,
    width: 10,
    borderRadius: 20,
    backgroundColor: '#ffd300',
    marginRight: 15,
  },
  dot2: {
    height: 10,
    width: 10,
    backgroundColor: '#ffd300',
    margin: 15,
  },
  details: {
    textAlign: 'justify',
    fontSize: 18,
    color: '#000',
    margin: 15,
    marginBottom: 25,
  },
  places: {
    height: 'auto',
    width: Dimensions.get('screen').width - 10,
  },
  placesitem: {
    textAlign: 'left',
    fontSize: 18,
    color: '#000',
    marginBottom: 5,
  },
  ContentCard:{
    minWidth: Dimensions.get("screen").width*0.4,
    borderWidth:2,
    borderColor:'#fff',
    borderRadius:12,
    padding: 16,
    margin:4,
    backgroundColor: '#000'
  }
});

export default styles;
