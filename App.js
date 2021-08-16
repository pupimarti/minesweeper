import React from 'react';
import { ScrollView, StyleSheet, Dimensions, View } from 'react-native';
import Game from './src/components/Game';
import Settings from './src/components/Settings';
import { GameContextProvider } from './src/context/GameContext';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <ScrollView horizontal>
        <View
          style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
        >
          <GameContextProvider>
            <Settings />
            <Game />
          </GameContextProvider>
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
    maxWidth: Dimensions.get('window').width,
    maxHeight: Dimensions.get('window').height,
  },
});
