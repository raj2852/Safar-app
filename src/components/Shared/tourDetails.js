import React from "react";
import {
    View,Text
}from 'react-native';
import colors from "../../assets/colors";
import styles from "../../assets/styles";

const TourDetails = ({duration,cost,months,route}) => {
    return (
      <View style={styles.details}>
        <Text>
          <Text style={{color: '#ffd500', fontSize: 24}}>Tour duration - </Text>
          <Text style={{color: '#000', fontSize: 20}}>
            {duration} (Normally, only for the #Must_Visit_Places)
          </Text>
        </Text>
        <Text>
          <Text style={{color: '#ffd500', fontSize: 24}}>Tour package - </Text>
          <Text style={{color: '#000', fontSize: 20}}>
            {cost} (Price may vary due to different agencies)
          </Text>
        </Text>
        <Text>
          <Text style={{color: '#ffd500', fontSize: 24}}>
            Best time to visit -{' '}
          </Text>
          <Text style={{color: '#000', fontSize: 20}}>{months}</Text>
        </Text>
        <Text>
          <Text style={{color: '#ffd500', fontSize: 24}}>
            Best route to start with -{' '}
          </Text>
          <Text style={{color: '#000', fontSize: 20}}>{route}</Text>
        </Text>
      </View>
    );
}

export default TourDetails;