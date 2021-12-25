import React from "react";
import {StyleSheet, View} from 'react-native';
import Header from "./components/Header";

export default function App() {
    return (
        <View style={styles.page}>
            <Header title="Guess the number"/>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1
    }
});
