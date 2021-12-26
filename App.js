import React, {useState} from "react";
import {StyleSheet, View} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {Ionicons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

const loadFonts = () => {
    Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    })
}

export default function App() {
    const [userPick, setUserPick] = useState();
    const [numberOfGuesses, setNumberOfGuesses] = useState(0);
    const [loaded, setLoaded] = useState(false);

    if (loaded == false) {
        return (<AppLoading startAsync={loadFonts} onFinish={setLoaded(true)}/>);
    }

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
        <AntDesign name="user" size={24} color="black"/>
        {content}
    </View>);
}

const styles = StyleSheet.create({
    page: {
        flex: 1
    }
});
