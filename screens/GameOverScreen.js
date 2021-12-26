import React from "react";
import {StyleSheet, View, Text} from "react-native";

const GameOverScreen = (props) => {
    return (<View style={styles.screen}><Text>Game over</Text></View>)
}

const styles = StyleSheet.create({
    screen: {
        flex: 1, padding: 10, alignItems: 'center'
    }
})

export default GameOverScreen