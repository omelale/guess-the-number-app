import React, {useRef, useState} from "react";
import {Alert, Button, StyleSheet, Text, View} from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";

const generateGuessBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rand = Math.floor(Math.random() * (max - min)) + min;
    if (rand === exclude) {
        return generateGuessBetween(min, max, exclude);
    }
    return rand;
}

const GameScreen = (props) => {
    const [guess, setGuess] = useState(generateGuessBetween(1, 100, props.userChoice));
    const minimum = useRef(1);
    const maximum = useRef(100);

    const handleHigher = () => {
        if (guess > props.userChoice) {
            Alert.alert("Aaah You are cheating!", "Do not cheat", [{
                text: "Cancel", style: "cancel"
            }]);
            return;
        } else {
            minimum.current = guess;
            const newNumber = generateGuessBetween(minimum.current, maximum.current, guess);
            setGuess(newNumber);
        }
    }

    const handleLower = () => {
        if (guess < props.userChoice) {
            Alert.alert("Aaah You are cheating!", "Do not cheat", [{
                text: "Cancel", style: "cancel"
            }]);
            return;
        } else {
            maximum.current = guess;
            const newNumber = generateGuessBetween(minimum.current, maximum.current, guess);
            setGuess(newNumber);
        }
    }

    return (<View style={styles.screen}>
        <Text>The computer guessed: {guess}</Text>
        <Card>
            <View style={styles.inlineButtons}>
                <Button title="Lower" onPress={handleLower}
                        color={colors.primary}/>
                <Button title="Higher" onPress={handleHigher}
                        color={colors.primary}/>
            </View>
        </Card>
    </View>)
}

const styles = StyleSheet.create({
    screen: {
        flex: 1, padding: 10, alignItems: 'center'
    }, inlineButtons: {
        flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, width: 300, maxWidth: '80%'
    }
});

export default GameScreen