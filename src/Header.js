import React from "react";
import {
View,
Text,
Linking
} from "react-native";
import styles from "./styles";

const Header = ({imglink,link}) =>{
        return(
            <View style={{height: 'auto',width: '100%',paddingTop: 20,paddingBottom: 20,paddingLeft: 10,paddingRight: 10,backgroundColor: '#5c5c5c',justifyContent: 'space-evenly',flexDirection: 'row'}}>
                <Text style={styles.nav}>About</Text>
                <Text style={styles.nav}>Map</Text>
                <Text style={styles.nav}>Places</Text>
                <Text style={styles.nav} onPress={() => {Linking.openURL({imglink})}}>Images</Text>
                <Text style={styles.nav} onPress={() => {Linking.openURL({link})}}>Official info</Text>
            </View>
        )
}

export default Header;