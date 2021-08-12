import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import GameContext from '../context/GameContext';

export default function Flags() {
  const { flags, mines } = useContext(GameContext);

  return (
    <View>
      <Text>{mines.length - flags.length}</Text>
    </View>
  );
}
