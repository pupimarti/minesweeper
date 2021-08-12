import React from 'react';
import { StyleSheet, View } from 'react-native';
import Game from './src/components/Game';
import { GameContextProvider } from './src/context/GameContext';

export default function App() {
  return (
    <View style={styles.container}>
      <GameContextProvider>
        <Game />
      </GameContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
