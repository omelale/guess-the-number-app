import React from "react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";

const StartGameScreen = (props) => {

    const onChangeText = () => {
        console.log('');
    }

    return (<View style={styles.page}>
        <Text style={styles.specialTitle}>Start a new game</Text>
        <Card style={styles.mainContainer}>
            <Text style={styles.cardTitle}>Insert a number</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value='0'
            />
            <View style={styles.bothButtons}>
                <View style={styles.button}><Button title="Reset" onPress={() => {
                }} color={colors.secondary}/></View>
                <View style={styles.button}><Button title="Confirm" onPress={() => {
                }} color={colors.primary}/></View>
            </View>
        </Card>
    </View>)
}

const styles = StyleSheet.create({
    page: {
        flex: 1, padding: 10, alignItems: 'center', justifyContent: 'flex-start'
    }, input: {
        height: 50, margin: 10, borderWidth: 2, padding: 10, fontSize: 18,
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