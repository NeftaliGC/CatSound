import React from "react";
import Constants from 'expo-constants';
import { Text, View, TouchableOpacity } from "react-native";
import Search from "../Icons/Search";
import Gear from "../Icons/Gear";
import { Colors } from "react-native/Libraries/NewAppScreen";

const HighMenu = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 34, fontWeight: "bold", padding: 10 }}>Home</Text>

            <View style={styles.buttonContainer}>

                <TouchableOpacity style={styles.botton} onPress={() => console.log('Search Pressed')} >
                    <Search fill='black' width={42} height={42} style={{  }}/>
                </TouchableOpacity>    

                <TouchableOpacity style={styles.botton} onPress={() => console.log('Gear Pressed')} >
                    <Gear fill='black' width={42} height={42}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFC300',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    botton: {
        padding: 10,
        
    }
};

export default HighMenu;