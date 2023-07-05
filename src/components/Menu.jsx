import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Home from "../Icons/Home";
import MusicFolder from "../Icons/MusicFolder";
import Disc from "../Icons/Disc";
import Heart from "../Icons/Heart";



const Menu = () => {
    return (
        /// Recuerda revisar despues la posicion de este menu
        <View style={{ backgroundColor: "#002D5C", borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, position: 'relative', bottom: 0, left: 0, right: 0}}>
            <TouchableOpacity onPress={() => console.log('Home Pressed')} >
                <View>
                    <Home fill='#D6D6D6' width={42} height={42}/>
                    <Text style={{color: 'white', textAlign: 'center'}}>Home</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('Likes Pressed')} >
                <View>
                    <Heart fill='#D6D6D6' width={42} height={42}/>
                    <Text style={{color: 'white', textAlign: 'center'}}>Likes</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('Library Pressed')} >
                <View>
                    <Disc fill='#D6D6D6' width={42} height={42}/>
                    <Text style={{color: 'white', textAlign: 'center'}}>Library</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('Folders Pressed')} >
                <View>
                    <MusicFolder fill='#D6D6D6' width={42} height={42}/>
                    <Text style={{color: 'white', textAlign: 'center'}}>Folders</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default Menu;