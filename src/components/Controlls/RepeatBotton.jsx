import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Repeat from '../../Icons/Repeat';


const RepeatBotton = () => {

    const [pressCount, setPressCount] = useState(1);
    const [isPressed, setIsPressed] = useState(false);
    const [isTwoPressed, setIsTwoPressed] = useState(false);

    const handlePress = () => {
        console.log(pressCount)
        let newPressCount
        if(pressCount > 2) {
            newPressCount = 1
            setPressCount(newPressCount);
        } else {
            newPressCount = pressCount + 1;
            setPressCount(newPressCount);
        }

        if (newPressCount % 3 == 0) {
            setIsTwoPressed(true);
            setIsPressed(true)
        } else if (newPressCount % 2 == 0){
            setIsPressed(true)
        } else {
            setIsPressed(false);
            setIsTwoPressed(false);
        }
    };

    const iconColor = isPressed ? '#FFC300' : '#ffff';
    const fillNumber = isTwoPressed ? '#FFC300' : 'none';

    return (
        
        <TouchableOpacity style={styles.botton} onPress={handlePress}>
            <Repeat fill={iconColor} fillNumber={fillNumber} width={24} height={24} />
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
        padding: 10
    }
};

export default RepeatBotton;
