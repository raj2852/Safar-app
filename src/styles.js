import{
    StyleSheet,
    Dimensions
}from "react-native";

const styles = StyleSheet.create({
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
      fontSize: 18
   },
nav: {
   color: '#fff'
},
screen: {
    height: 'auto',
    width: Dimensions.get("screen").width,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
},
h1:{
   fontSize: 70,
   fontWeight: "bold",
   textAlign: 'center',
   color: '#fff',
   opacity: 0.9
},
welcome: {
   fontSize: 30,
    fontWeight: "bold",
    textAlign: 'justify',
    color: '#5c5c5c',
    margin: 4,
    marginTop: 20,
    marginBottom: 20
},
h2:{
    fontSize: 50,
    fontWeight: "bold",
    textAlign: 'center',
    color: '#5c5c5c'
 },
 map: {
    height: 300,
    width: 300,
    resizeMode: "contain"
 },
 img: {
    height: 300,
    width: '80%',
    resizeMode: "contain"
 },
 h3: {
    fontSize: 40,
    color: '#5c5c5c',
    fontWeight: "bold",
    textAlign: 'center'
 },
 about: {
    height: 'auto',
    width: Dimensions.get("screen").width-20,
    borderStyle: "solid",
    borderWidth: 5,
    borderColor: '#ffd300'
 },
 dot1: {
   height: 10,
   width: 10,
   borderRadius: 20,
   backgroundColor: '#ffd300',
   marginRight: 15
 },
 dot2:{
   height: 10,
   width: 10,
   backgroundColor: '#ffd300',
   margin: 15
 },
 details: {
    textAlign: 'justify',
    fontSize: 18,
    color: '#000',
    margin: 15,
    marginBottom: 25
 },
 places: {
     height: 'auto',
    width: Dimensions.get("screen").width-10,
 },
 placesitem: {
   textAlign: 'left',
   fontSize: 18,
   color: '#000',
   marginBottom: 5
 }
});

export default styles;