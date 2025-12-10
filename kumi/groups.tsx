// File: Groups.js (Class Component)
import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Theme } from "./theme";

const groups = [
  { id: '1', name: 'Family', lastMessage: 'How are you?' },
  { id: '2', name: 'Friends', lastMessage: "Let's meet tomorrow" },
  { id: '3', name: 'Work', lastMessage: 'Meeting at 10 AM' },
];

interface Props {
  navigation: any; // For simplicity, using any; in real app, use proper navigation types
}

export default class Groups extends Component<Props> {
  render() {
    const { navigation } = this.props;

    return (
      <View style={[Theme.container, { backgroundColor: Theme.colors.background }]}>
        <Text style={[Theme.text.title, { color: Theme.colors.text }]}>
          Your Groups
        </Text>
        <FlatList
          data={groups}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.groupItem}
              onPress={() => navigation.navigate('MessageChat', { group: item })}
            >
              <Text style={styles.groupName}>
                {item.name}
              </Text>
              <Text style={styles.lastMessage}>
                {item.lastMessage}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold' as const,
  },
  groupItem: {
    backgroundColor: Theme.colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  groupName: {
    fontSize: 20,
    fontWeight: 'bold' as 'bold',
    color: Theme.colors.text,
  },
  lastMessage: {
    color: Theme.colors.subtext,
    marginTop: 8,
  },
});
