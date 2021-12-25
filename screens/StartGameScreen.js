import React, {useState} from "react";
import {Button, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard} from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";

const StartGameScreen = (props) => {
    const [input, setInput] = useState('');
    const changeText = (input) => {
        setInput(input.replace(/[^0-9]/g, ''));
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
                <View style={styles.button}><Button title="Reset" onPress={() => {
                }} color={colors.secondary}/></View>
                <View style={styles.button}><Button title="Confirm" onPress={() => {
                }} color={colors.primary}/></View>
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