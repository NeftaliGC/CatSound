import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';


import Menu from './src/components/Menu.jsx';
import Main from './src/components/Main.jsx';
import HighMenu from './src/components/HighMenu.jsx';
import MiniMusicPlayer from './src/components/miniReproductor.jsx';

export default function App() {
    return (
        <View style={styles.principalContainer}>
            <HighMenu />
            <Main />
            <MiniMusicPlayer
                cover={require('./src/assets/cover.jpg')}
                songName="Nombre de la Canción"
                artist="Artista"
            />
            <Menu />
        </View>
    );
}

const styles = StyleSheet.create({
    principalContainer: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#001433',
    },
});