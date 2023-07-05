import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Play from '../../Icons/Play';
import Pause from '../../Icons/Pause';



const PlayButton = () => {
    
    const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar si se está reproduciendo o pausando

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying); // Invierte el estado actual al presionar el botón de reproducción/pausa
    };

    return (
        <View>
            <TouchableOpacity style={styles.botton} onPress={handlePlayPause}>
                {
                    isPlaying ? 
                        <Pause style={styles.botton} fill='white' width={24} height={24} /> 
                    : 
                        <Play style={styles.botton} fill='white' width={21} height={23} />
                }
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#003566',
        borderRadius: 8,
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    botton: {
        padding: 10,
    }
};

export default PlayButton;
