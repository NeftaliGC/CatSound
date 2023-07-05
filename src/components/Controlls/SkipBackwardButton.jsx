import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import SkipBackward from '../../Icons/SkipBackward';



const SkipBackwardButton = () => {

    return (
        <TouchableOpacity style={styles.botton}>
            <SkipBackward fill='white' width={21} height={19} />
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

export default SkipBackwardButton;
