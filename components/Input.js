import React from "react";
import {StyleSheet, TextInput} from "react-native";
import colors from "../constants/colors";

const Input = (props) => {
    return (<TextInput {...props} style={{...styles.input, ...props.style}}>{props.children}</TextInput>)
}

const styles = StyleSheet.create({
    input: {
        borderColor: colors.borders,
        borderRadius: 5,
        borderWidth: 2,
        height: 30,
        marginVertical: 10,
    }
})
export default Input