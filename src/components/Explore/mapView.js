import React from "react";
import {
    View,Dimensions
}from 'react-native';
import WebView from "react-native-webview";


const MapView = ({}) => {
  return(
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
          html: '<iframe width="100%" height="100%" src="https://raj2852.github.io/safar/map.html" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>',
        }}
      />
    </View>
  );
}

export default MapView;