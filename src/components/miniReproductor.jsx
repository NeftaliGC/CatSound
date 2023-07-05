import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import PlayButton from './Controlls/PlayButton.jsx'
import SkipBackwardButton from './Controlls/SkipBackwardButton.jsx';
import SkipFordwardButton from './Controlls/SkipFordwardButton.jsx';
import ShuffleButton from './Controlls/ShuffleButton.jsx';
import RepeatBotton from './Controlls/RepeatBotton.jsx';


const MiniMusicPlayer = ({ cover, songName, artist}) => {

    return (
        <View style={styles.container}>
            <Image source={cover} style={styles.coverImage} />
            <View style={styles.infoContainer}>
                <Text style={styles.songName}>{songName}</Text>
                <Text style={styles.artist}>{artist}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <ShuffleButton/>
                <SkipFordwardButton/>
                <PlayButton/>
                <SkipBackwardButton/>
                <RepeatBotton/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create( {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#003566',
        borderRadius: 100,
        padding: 10,
    },
    coverImage: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    infoContainer: {
        flex: 1,
        marginLeft: 10,
    },
    songName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    artist: {
        fontSize: 14,
        color: '#fff',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default MiniMusicPlayer;
