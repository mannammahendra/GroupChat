
// -----------------------------------------------
// File: MessageChat.js

import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';

export function MessageChat({ route }) {
  const { group } = route.params;

  const [messages, setMessages] = useState([
    { id: '1', text: 'Welcome to the chat!', sender: 'system' },
    { id: '2', text: 'Hello everyone!', sender: 'user' },
  ]);

  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() === '') return;

    setMessages([...messages, { id: Date.now().toString(), text: input, sender: 'me' }]);
    setInput('');
  };

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">{group.name}</Text>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        className="flex-1 mb-4"
        renderItem={({ item }) => (
          <View
            className={`p-3 my-1 rounded-2xl max-w-[80%] shadow ${
              item.sender === 'me' ? 'bg-blue-500 self-end' : 'bg-white'
            }`}
          >
            <Text className={item.sender === 'me' ? 'text-white' : 'text-black'}>
              {item.text}
            </Text>
          </View>
        )}
      />

      <View className="flex-row items-center">
        <TextInput
          className="flex-1 bg-white p-3 rounded-xl shadow"
          placeholder="Type a message"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity
          className="bg-blue-500 p-3 ml-2 rounded-xl"
          onPress={sendMessage}
        >
          <Text className="text-white font-bold">Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
