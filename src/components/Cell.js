import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function Cell({ value, isMine, show, onPress }) {
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
    >
      {show && (
        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>
          {isMine ? 'X' : value}
        </Text>
      )}
    </TouchableOpacity>
  );
}
