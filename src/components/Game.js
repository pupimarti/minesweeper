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
    <View
      style={{
        borderWidth: 3,
        borderTopColor: '#FFFFFF',
        borderLeftColor: '#FFFFFF',
        borderRightColor: '#7B7B7B',
        borderBottomColor: '#7B7B7B',
        padding: 10,
        backgroundColor: '#BDBDBD',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems:'center',
          borderWidth: 3,
          borderTopColor: '#7B7B7B',
          borderLeftColor: '#7B7B7B',
          borderRightColor: '#FFFFFF',
          borderBottomColor: '#FFFFFF',
          backgroundColor: '#C0C0C0',
        }}
      >
      <Flags />
        <IconState />
        <Timer />
      </View>
      <Board gameOver={gameOver} />
    </View>
  );
}
