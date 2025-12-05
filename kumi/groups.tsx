// File: Groups.js (Class Component)
import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const groups = [
  { id: '1', name: 'Family', lastMessage: 'How are you?' },
  { id: '2', name: 'Friends', lastMessage: "Let's meet tomorrow" },
  { id: '3', name: 'Work', lastMessage: 'Meeting at 10 AM' },
];

export default class Groups extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View className="flex-1 bg-gray-100 p-4">
        <Text className="text-2xl font-bold mb-4">Your Groups</Text>
        <FlatList
          data={groups}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="bg-white p-4 rounded-2xl shadow mb-3"
              onPress={() => navigation.navigate('MessageChat', { group: item })}
            >
              <Text className="text-xl font-semibold">{item.name}</Text>
              <Text className="text-gray-500 mt-1">{item.lastMessage}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
