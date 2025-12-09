import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 25,
      backgroundColor: '#f5f7fa'
    }}>

      <Image
        source={{ uri: "https://reactnative.dev/img/logo-og.png" }}
        style={{ width: 180, height: 180, borderRadius: 20, marginBottom: 20 }}
      />

      <Text style={{ fontSize: 26, fontWeight: '700', marginBottom: 10 }}>
        Welcome to ChatX
      </Text>

      <Text style={{
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 40
      }}>
        A simple & beautiful React Native demo UI.
      </Text>

      <TouchableOpacity
        onPress={() => console.log("Start Messaging pressed")}
        style={{
          backgroundColor: '#4e8df5',
          paddingVertical: 14,
          paddingHorizontal: 35,
          borderRadius: 12,
          elevation: 3
        }}
      >
        <Text style={{ fontSize: 18, color: 'white', fontWeight: '600' }}>
          Start Messaging
        </Text>
      </TouchableOpacity>
    </View>
  );
}
