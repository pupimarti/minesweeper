import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import GameContext from '../context/GameContext';
import { STATE_GAME } from '../utils/constraints';

export default function Timer() {
  const [timer, setTimer] = useState(0);

  const { stateGame } = useContext(GameContext);

  useEffect(() => {
    let interval = null;
    if (stateGame === STATE_GAME.PLAY) {
      setTimer(0);
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else if (stateGame === STATE_GAME.STOP) setTimer(0);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [stateGame]);

  return (
    <View>
      <Text style={{ color: '#000' }}>{timer}</Text>
    </View>
  );
}
