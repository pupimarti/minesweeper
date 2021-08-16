import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import GameContext from '../context/GameContext';
import { STATE_GAME } from '../utils/constraints';

export default function IconState() {
  const { stateGame, resetGame } = useContext(GameContext);

  if (stateGame === STATE_GAME.GAME_OVER)
    return (
      <TouchableOpacity style={styles.container} onPress={resetGame}>
        <Text style={styles.icon}>😵</Text>
      </TouchableOpacity>
    );
  else if (stateGame === STATE_GAME.WIN)
    return (
      <TouchableOpacity style={styles.container} onPress={resetGame}>
        <Text style={styles.icon}>😎</Text>
      </TouchableOpacity>
    );
  else
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.icon}>😀</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderTopColor: '#FFFFFF',
    borderLeftColor: '#FFFFFF',
    borderRightColor: '#7B7B7B',
    borderBottomColor: '#7B7B7B',
    backgroundColor: '#C0C0C0',
    padding: 1,
  },
  icon: {
    fontSize: 20,
  },
});
