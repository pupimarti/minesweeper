import React, { useContext, useState } from 'react';
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
  const { addFlag, removeFlag } = useContext(GameContext);
  const [isFlag, setIsFlag] = useState(false);

  const handleLongPress = () => {
    if (!show) {
      onLongPress();
      if (isFlag) {
        removeFlag({ x, y });
        setIsFlag(false);
      } else {
        addFlag({ x, y });
        setIsFlag(true);
      }
    }
  };

  const handleOnPress = () => {
    if (isFlag) {
      removeFlag({ x, y });
      setIsFlag(false);
    } else if (!show) onPress();
  };

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
      onPress={handleOnPress}
      onLongPress={handleLongPress}
    >
      {(show || isFlag) && (
        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>
          {isFlag ? '?' : isMine ? 'X' : value}
        </Text>
      )}
    </TouchableOpacity>
  );
}
