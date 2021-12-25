import React from "react";
import {StyleSheet, Text, View} from "react-native";

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'red',
        height: 90,
        paddingTop: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25,
        color: 'white',
    }
})


export default Header