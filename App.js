import React, {useState} from "react";
import {StyleSheet, View} from 'react-native';
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
    const [userPick, setUserPick] = useState();

    const setGameHandler = (pick) => {
        setUserPick(pick)
    }

    let content = <StartGameScreen onStartGame={setGameHandler}/>
    if (userPick) {
        content = <GameScreen userChoice={userPick}/>
    }

    return (<View style={styles.page}>
        <Header title="Guess the number"/>
        {content}
    </View>);
}

const styles = StyleSheet.create({
    page: {
        flex: 1
    }
});
