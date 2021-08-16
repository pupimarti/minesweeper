import React, { useContext } from 'react';
import { View } from 'react-native';
import GameContext from '../context/GameContext';
import { STATE_GAME } from '../utils/constraints';
import Board from './Board';
import Flags from './Flags';
import IconState from './IconState';
import Timer from './Timer';

export default function Game() {
  const { setStateGame } = useContext(GameContext);

  const gameOver = () => setStateGame(STATE_GAME.GAME_OVER);

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Timer />
        <IconState />
        <Flags />
      </View>
      <Board gameOver={gameOver} />
    </View>
  );
}
