import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { STATE_GAME } from '../utils/constraints';
import Board from './Board';
import Timer from './Timer';

export default function Game() {
  const [stateGame, setStateGame] = useState(STATE_GAME.STOP);

  const gameOver = () => setStateGame(STATE_GAME.STOP);

  const startGame = () => setStateGame(STATE_GAME.PLAY);

  return (
    <View>
      <Timer stateGame={stateGame} />
      <Board stateGame={stateGame} gameOver={gameOver} startGame={startGame} />
    </View>
  );
}
