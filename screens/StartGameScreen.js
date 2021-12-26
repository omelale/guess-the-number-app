import React, {useState} from "react";
import {Alert, Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";

const StartGameScreen = (props) => {
    const [input, setInput] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [chosenNumber, setChosenNumber] = useState('');
    const changeText = (input) => {
        setInput(input.replace(/[^0-9]/g, ''));
    }
    const handleStart = () => {
        props.onStartGame(chosenNumber)
    }
    let displayText;
    if (confirmed) {
        displayText =
            <View style={styles.confirmText}><Text>The number you have entered
                is: <Text style={styles.bold}>{chosenNumber}</Text></Text><Button
                title='START GAME' onPress={handleStart} style={styles.button} color={colors.titles}/></View>
    }
    const handleReset = () => {
        setInput('');
        Keyboard.dismiss();
        setConfirmed(false);
    }
    const handleConfirm = () => {
        const chosenNr = parseInt(input);
        if (isNaN(chosenNr) || chosenNr <= 0 || chosenNr >= 99) {
            setInput('');
            Alert.alert("Wrong choice!", "Pick a number between 0 and 100", [{
                text: "Close", onPress: () => {
                }, style: "destructive"
            }]);
            return
        }
        setConfirmed(true);
        Keyboard.dismiss();
        setChosenNumber(input);
        setInput('');
    }
    return (<TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
    }}><View style={styles.page}>
        <Text style={styles.specialTitle}>Start a new game</Text>
        <Card style={styles.mainContainer}>
            <Text style={styles.cardTitle}>Insert a number</Text>
            <Input
                keyboardType='number-pad'
                autoCorrect={false}
                maxLength={2}
                blurOnSubmit
                style={styles.input}
                onChangeText={changeText}
                value={input}
            />
            <View style={styles.bothButtons}>
                <View style={styles.button}><Button title="Reset" onPress={handleReset}
                                                    color={colors.secondary}/></View>
                <View style={styles.button}><Button title="Confirm" onPress={handleConfirm}
                                                    color={colors.primary}/></View>
            </View>
            {displayText}
        </Card>
    </View></TouchableWithoutFeedback>)
}

const styles = StyleSheet.create({
    page: {
        flex: 1, padding: 10, alignItems: 'center', justifyContent: 'flex-start'
    }, input: {
        height: 50, margin: 10, borderWidth: 2, padding: 10, fontSize: 18, textAlign: 'center'
    }, bothButtons: {
        display: "flex",
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: "space-around",
        paddingHorizontal: 20,
        width: '100%'
    }, specialTitle: {
        fontSize: 20, marginVertical: 10, fontFamily: 'open-sans-bold',
    }, mainContainer: {
        width: 300, maxWidth: '80%', alignItems: 'center',
    }, cardTitle: {
        fontSize: 18
    }, button: {
        width: 90,
    }, confirmText: {
        flexDirection: 'column',
        justifyContent: 'center'
    }, bold: {
        fontWeight: "bold",
        fontSize: 20,
    }
})

export default StartGameScreen