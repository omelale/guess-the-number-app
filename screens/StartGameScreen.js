import React from "react";
import {View, Text, StyleSheet, Button, TextInput} from "react-native";

const StartGameScreen = (props) => {

    const onChangeText = () => {
        console.log('');
    }

    return (
        <View style={styles.page}>
            <Text style={styles.specialTitle}>Start a new game</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.cardTitle}>Insert a number</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value='0'
                />
                <View style={styles.bothButtons}>
                    <Button title="Reset" onPress={() => {
                    }} color="red"/>
                    <Button title="Confirm" onPress={() => {
                    }} color='blue'/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    input: {
        height: 50,
        margin: 10,
        borderWidth: 2,
        padding: 10,
        fontSize: 18,
    },
    bothButtons: {
        display: "flex",
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: "space-around",
        paddingHorizontal: 20,
        width: '100%'
    },
    specialTitle: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: '#3c3939',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 20,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
    cardTitle: {
        fontSize: 18
    }
})

export default StartGameScreen