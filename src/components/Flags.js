import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import GameContext from '../context/GameContext';

export default function Flags() {
  const { flags, mines } = useContext(GameContext);

  const flags_ = mines.length - flags.length;

  return (
    <View style={{ backgroundColor: '#000' }}>
      <Text style={{ color: '#FF0000', fontWeight: 'bold', fontSize: 25 }}>
        {flags_ < 10 ? '00' + flags_ : flags_ < 100 ? '0' + flags_ : flags_}
      </Text>
    </View>
  );
}
