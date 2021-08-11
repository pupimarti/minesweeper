import React from 'react';
import { View, Text } from 'react-native';

export default function Cell({ value, isMine }) {
  return (
    <View
      style={{
        width: 30,
        height: 30,
        backgroundColor: isMine ? 'red' : 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        margin: 1,
      }}
    >
      <Text style={{ color: '#FFF', fontWeight: 'bold' }}>
        {isMine ? 'X' : value}
      </Text>
    </View>
  );
}
