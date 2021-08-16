import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GameContext from '../context/GameContext';
import { STATE_GAME } from '../utils/constraints';

export default function IconState() {
  const { stateGame, resetGame } = useContext(GameContext);

  if (stateGame === STATE_GAME.GAME_OVER)
    return (
      <TouchableOpacity onPress={resetGame}>
        <Text>😵</Text>
      </TouchableOpacity>
    );
  else if (stateGame === STATE_GAME.WIN)
    return (
      <TouchableOpacity onPress={resetGame}>
        <Text>😎</Text>
      </TouchableOpacity>
    );
  else return <Text>😀</Text>;
}
