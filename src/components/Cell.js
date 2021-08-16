import React, { useContext, useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import GameContext from '../context/GameContext';
import { STATE_GAME } from '../utils/constraints';

export default function Cell({
  value,
  isMine,
  show,
  onPress,
  onLongPress,
  x,
  y,
}) {
  const { addFlag, removeFlag, stateGame } = useContext(GameContext);
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

  useEffect(() => {
    if (stateGame === STATE_GAME.GAME_OVER) setIsFlag(false);
  }, [stateGame]);

  return (
    <TouchableOpacity
      style={[
        {
          width: 30,
          height: 30,
          backgroundColor: '#BDBDBD',
          alignItems: 'center',
          justifyContent: 'center',
        },
        show
          ? {
              borderWidth: 1,
              borderColor: '#7B7B7B',
            }
          : {
              borderWidth: 3,
              borderTopColor: '#FFFFFF',
              borderLeftColor: '#FFFFFF',
              borderRightColor: '#7B7B7B',
              borderBottomColor: '#7B7B7B',
            },
      ]}
      onPress={handleOnPress}
      onLongPress={handleLongPress}
    >
      {(show || isFlag) && (
        <Text
          style={{
            color:
              value === 1
                ? '#0000FF'
                : value === 2
                ? '#007B00'
                : value === 3
                ? '#FF0000'
                : 'black',
            fontWeight: 'bold',
            fontSize: 20,
          }}
        >
          {isFlag ? '🚩' : isMine ? '💣' : value === 0 ? '' : value}
        </Text>
      )}
    </TouchableOpacity>
  );
}
