// -----------------------------------------------------------
// File: MessageChat.js (Class Component)

import React, { Component } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Theme } from './theme';
import AutoReplySystem from './autoReply';

interface Message {
  id: string;
  text: string;
  sender: string;
}

interface Props {
  route: any;
}

export class MessageChat extends Component<Props> {
  autoReplySystem: AutoReplySystem;

  constructor(props: Props) {
    super(props);

    this.autoReplySystem = new AutoReplySystem();

    this.state = {
      messages: [
        { id: '1', text: 'Welcome to the chat!', sender: 'system' },
        { id: '2', text: 'Hello everyone!', sender: 'user' },
      ],
      input: '',
    };
  }

  sendMessage = () => {
    const { input, messages } = this.state as { input: string; messages: Message[] };
    if (input.trim() === '') return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'me',
    };

    this.setState({
      messages: [...messages, newMessage],
      input: '',
    });
  };

  render() {
    const { group } = this.props.route.params;
    const { messages, input } = this.state as { input: string; messages: Message[] };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{group.name}</Text>

        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          style={styles.messagesList}
          renderItem={({ item }) => (
            <View style={item.sender === "me" ? styles.messageMe : styles.messageOther}>
              <Text style={item.sender === 'me' ? styles.messageTextMe : styles.messageTextOther}>
                {item.text}
              </Text>
            </View>
          )}
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message"
            value={input}
            onChangeText={(text) => this.setState({ input: text })}
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={this.sendMessage}
          >
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    padding: 16,
  },
  title: {
    ...Theme.text.title,
    color: Theme.colors.text,
    textAlign: 'center',
    marginBottom: 16,
  },
  messagesList: {
    flex: 1,
    marginBottom: 16,
  },
  messageMe: Theme.chatBubble.me,
  messageOther: Theme.chatBubble.other,
  messageTextMe: {
    color: '#FFF',
  },
  messageTextOther: {
    color: Theme.colors.text,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: Theme.colors.card,
    padding: 12,
    borderRadius: 20,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: Theme.colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  sendText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
