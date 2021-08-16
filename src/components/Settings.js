import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import GameContext from '../context/GameContext';
import { STATE_GAME } from '../utils/constraints';

export default function Settings() {
  const {
    size,
    setSize,
    newBoard,
    stateGame,
    quantityMines,
    setQuantityMines,
  } = useContext(GameContext);

  const handleChangeSize = (val) => !isNaN(val) && setSize(val);

  const handleChangeMines = (val) => !isNaN(val) && setQuantityMines(val);

  const [error, setError] = useState(null);

  const handleAccept = () => {
    setError(null);
    if (isNaN(size) || size < 5) {
      setError('El tamaño no puede ser menor que 5.');
      return;
    }
    if (isNaN(quantityMines) || quantityMines >= size * size) {
      setError('La cantidad de minas debe ser mayor al tamaño');
      return;
    }
    newBoard();
  };

  if (stateGame === STATE_GAME.PLAY) return <View></View>;

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text>Tamaño del tablero:</Text>
      <TextInput
        style={{ borderWidth: 1, marginBottom: 5 }}
        value={size}
        onChangeText={handleChangeSize}
        keyboardType={'numeric'}
      />
      <Text>Cantidad de minas:</Text>
      <TextInput
        style={{ borderWidth: 1, marginBottom: 5 }}
        value={quantityMines}
        onChangeText={handleChangeMines}
        keyboardType={'numeric'}
      />
      {error && <Text style={{ color: 'black' }}>Error: {error}</Text>}
      <Button title="Aceptar" onPress={handleAccept} />
    </View>
  );
}
