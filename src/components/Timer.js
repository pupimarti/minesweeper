import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { STATE_GAME } from '../utils/constraints';

export default function Timer({ stateGame }) {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval = null;
    if (stateGame === STATE_GAME.PLAY) {
      setTimer(0);
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

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