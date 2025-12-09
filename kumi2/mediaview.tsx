// File: ChatMediaView.js
// Class-based component that displays images and files from a chat
// Uses Theme.js for styling

import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Theme } from './theme';

export default class ChatMediaView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'images', // 'images' or 'files'
      images: [
        { id: '1', uri: 'https://placekitten.com/200/200', name: 'Cute Cat 1' },
        { id: '2', uri: 'https://placekitten.com/300/300', name: 'Cute Cat 2' },
        { id: '3', uri: 'https://placekitten.com/250/250', name: 'Cute Cat 3' },
      ],
      files: [
        { id: '1', name: 'Document.pdf' },
        { id: '2', name: 'Report.docx' },
        { id: '3', name: 'Presentation.pptx' },
      ],
    };
  }

  handleImagePress = (image) => {
    alert('Image Content: ' + image.name);
  };

  handleFilePress = (file) => {
    alert('File Content: ' + file.name);
  };

  renderImages() {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {this.state.images.map((img) => (
          <TouchableOpacity
            key={img.id}
            onPress={() => this.handleImagePress(img)}
            style={{ marginRight: 16 }}
          >
            <Image
              source={{ uri: img.uri }}
              style={{ width: 120, height: 120, borderRadius: 12 }}
            />
            <Text style={{ color: Theme.colors.text, textAlign: 'center', marginTop: 8 }}>
              {img.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }

  renderFiles() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {this.state.files.map((file) => (
          <TouchableOpacity
            key={file.id}
            onPress={() => this.handleFilePress(file)}
            style={{
              padding: 16,
              backgroundColor: Theme.colors.card,
              marginBottom: 12,
              borderRadius: 12,
            }}
          >
            <Text style={{ color: Theme.colors.text, fontSize: 18 }}>{file.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }

  render() {
    const { groupName } = this.props.route.params;
    const { selectedTab } = this.state;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Theme.colors.background,
          padding: 16,
        }}
      >
        {/* Header */}
        <Text
          style={{
            ...Theme.text.title,
            color: Theme.colors.text,
            textAlign: 'center',
            marginBottom: 24,
          }}
        >
          {groupName}
        </Text>

        {/* Tabs */}
        <View style={{ flexDirection: 'row', marginBottom: 16 }}>
          <TouchableOpacity
            onPress={() => this.setState({ selectedTab: 'images' })}
            style={{ marginRight: 20 }}
          >
            <Text
              style={{
                fontSize: 20,
                color: selectedTab === 'images' ? Theme.colors.primary : Theme.colors.text,
                fontWeight: selectedTab === 'images' ? 'bold' : 'normal',
              }}
            >
              Images
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.setState({ selectedTab: 'files' })}>
            <Text
              style={{
                fontSize: 20,
                color: selectedTab === 'files' ? Theme.colors.primary : Theme.colors.text,
                fontWeight: selectedTab === 'files' ? 'bold' : 'normal',
              }}
            >
              Files
            </Text>
          </TouchableOpacity>
        </View>

        {/* Content Section */}
        <View style={{ flex: 1 }}>
          {selectedTab === 'images' ? this.renderImages() : this.renderFiles()}
        </View>
      </View>
    );
  }
}