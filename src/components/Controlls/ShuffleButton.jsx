import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Shuffle from '../../Icons/Shuffle';



const ShuffleButton = () => {

    const [isPressed, setIsPressed] = useState(false); // Estado para controlar si se está reproduciendo o pausando

    const handlePress = () => {
        setIsPressed(!isPressed); // Invierte el estado actual al presionar el botón de reproducción/pausa
    };

    const iconColor = isPressed ? '#FFC300' : '#ffff';

    return (
        <TouchableOpacity style={styles.botton} onPress={handlePress}>
            <Shuffle fill={iconColor} width={21} height={21} />
        </TouchableOpacity>
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

export default ShuffleButton;
