import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const QuestionCountSelector = ({ numQuestions, setNumQuestions }) => {

    const [selected, setSelected] = useState(numQuestions);

    const handleButtonClick = (count) => {
        setSelected(count);
        setNumQuestions(count);
    }

    return (
        <View style={styles.buttonContainer}>
            <Button
                mode={selected === 1 ? "contained" : "outlined"}
                textColor='#fff'
                onPress={() => handleButtonClick(1)}
                style={styles.button}
            >
                1
            </Button>
            <Button
                mode={selected === 3 ? "contained" : "outlined"}
                textColor='#fff'
                onPress={() => handleButtonClick(3)}
                style={styles.button}
            >
                3
            </Button>
            <Button
                mode={selected === 5 ? "contained" : "outlined"}
                textColor='#fff'
                onPress={() => handleButtonClick(5)}
                style={styles.button}
            >
                5
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: '20%',
    },
    button: {
        paddingHorizontal: 15,
        borderRadius: 5,
    },
});

export default QuestionCountSelector;