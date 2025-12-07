
// -----------------------------------------------------------
// File: MessageChat.js (Class Component)

import React, { Component } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Theme } from './theme';
import AutoReplySystem from './autoReply';



export class MessageChat extends Component {
  constructor(props) {
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
    const { input, messages } = this.state;
    if (input.trim() === '') return;

    const newMessage = {
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
    const { messages, input } = this.state;

    return (
      <View className="flex-1 bg-gray-100 p-4">
        <Text className="text-2xl font-bold mb-4">{group.name}</Text>

        <View style={item.sender === "me" ? Theme.chatBubble.me : Theme.chatBubble.other}>
  <Text style={{ color: item.sender === 'me' ? "#FFF" : Theme.colors.text }}>
    {item.text}
  </Text>
</View>


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
              <Text className={item.sender === 'me' ? 'text-white' : 'text-black'}>{item.text}</Text>
            </View>
          )}
        />

        <View className="flex-row items-center">
          <TextInput
            className="flex-1 bg-white p-3 rounded-xl shadow"
            placeholder="Type a message"
            value={input}
            onChangeText={(text) => this.setState({ input: text })}
          />
          <TouchableOpacity
            className="bg-blue-500 p-3 ml-2 rounded-xl"
            onPress={this.sendMessage}
          >
            <Text className="text-white font-bold">Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}