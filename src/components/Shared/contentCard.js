import React from "react";
import{
    View,Text, Pressable,Linking
}from 'react-native';
import styles from "../../assets/styles";

const ContentCard = ({Title,Description,link}) =>{
    return(
        <View style={styles.ContentCard}>
            <Text>{Title}</Text>
            <Text>{Description}</Text>
            <Pressable style={{color:'#fff'}} onPress={Linking.openURL({link})}>⇨</Pressable>
        </View>
    )
}

export default ContentCard;