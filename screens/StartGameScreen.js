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
    const handleReset = () => {
        setInput('');
        Keyboard.dismiss();
        setConfirmed(false);
    }
    const handleConfirm = () => {
        const chosenNr = parseInt(input);
        if (isNaN(chosenNr) || chosenNr <= 0 || chosenNr >= 99) {
            setInput('');
            Alert.alert("Scelta sbagliata", "Scegli un numero maggiore di 0 e minore di 100", [{
                text: "Chiudi", onPress: () => {
                }, style: "destructive"
            }]);
            return
        }
        setConfirmed(true);
        Keyboard.dismiss();
        setChosenNumber(input);
        setInput('');
        Alert.alert("Numero scelto", "Hai inserito: " + chosenNumber, [{
            text: "Chiudi", onPress: () => console.log(chosenNumber), style: "cancel"
        }]);
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
        fontSize: 20, marginVertical: 10
    }, mainContainer: {
        width: 300, maxWidth: '80%', alignItems: 'center',
    }, cardTitle: {
        fontSize: 18
    }, button: {
        width: 90,
    }
})

export default StartGameScreen