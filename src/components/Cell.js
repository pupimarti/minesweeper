import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import GameContext from '../context/GameContext';

export default function Cell({
  value,
  isMine,
  show,
  onPress,
  onLongPress,
  x,
  y,
}) {
  const { flags } = useContext(GameContext);
  const isFlag = flags.find((flag) => flag.x === x && flag.y === y);

  return (
    <TouchableOpacity
      style={{
        width: 30,
        height: 30,
        backgroundColor: show ? (isMine ? 'red' : 'green') : 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        margin: 1,
      }}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      {(show || isFlag) && (
        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>
          {isFlag ? '?' : isMine ? 'X' : value}
        </Text>
      )}
    </TouchableOpacity>
  );
}
