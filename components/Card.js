import React from "react";
import {StyleSheet, View, Text, TextInput, Button} from "react-native";

const Card = (props) => {
    return (<View style={{...styles.card, ...props.style}}>{props.children}</View>)
}

const styles = StyleSheet.create({
    card: {
        shadowColor: '#3c3939', shadowOffset: {
            width: 0, height: 2
        }, shadowOpacity: 0.8, shadowRadius: 4, elevation: 20, backgroundColor: 'white', padding: 20, borderRadius: 10
    }
})

export default Card