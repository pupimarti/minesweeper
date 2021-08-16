import React, { useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import GameContext from '../context/GameContext';
import { STATE_GAME } from '../utils/constraints';

export default function Settings() {
  const { size, setSize, newBoard, stateGame } = useContext(GameContext);

  const handleChangeSize = (val) => {
    if (!isNaN(val)) setSize(val);
  };

  if (stateGame === STATE_GAME.PLAY) return <View></View>;

  return (
    <View>
      <Text>Tamaño del tablero:</Text>
      <TextInput
        style={{ borderWidth: 1, marginBottom: 5 }}
        value={size}
        onChangeText={handleChangeSize}
        keyboardType={'numeric'}
      />
      <Button title="Aceptar" onPress={newBoard} />
    </View>
  );
}
