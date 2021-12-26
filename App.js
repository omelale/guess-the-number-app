import React, {useState} from "react";
import {StyleSheet, View} from 'react-native';
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
    const [userPick, setUserPick] = useState();
    const [numberOfGuesses, setNumberOfGuesses] = useState(0);

    const setGameHandler = (pick) => {
        setUserPick(pick);
        setNumberOfGuesses(0);
    }

    const setGameOverHandler = numOfRounds => {
        setNumberOfGuesses(numOfRounds)
    }

    let content = <StartGameScreen onStartGame={setGameHandler}/>
    if (userPick && numberOfGuesses <= 0) {
        content = <GameScreen userChoice={userPick} onGameOver={setGameOverHandler}/>
    } else if (numberOfGuesses > 0) {
        content = <GameOverScreen/>
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
