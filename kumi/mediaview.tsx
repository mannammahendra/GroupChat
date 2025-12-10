// File: ChatMediaView.js
// Class-based component that displays images and files from a chat
// Uses Theme.js for styling

import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Theme } from './theme';

interface Props {
  route: any;
}

export default class ChatMediaView extends Component<Props> {
  state = {
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

  handleImagePress = (image: any) => {
    console.log('Image Content: ' + image.name);
  };

  handleFilePress = (file: any) => {
    console.log('File Content: ' + file.name);
  };

  renderImages() {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {this.state.images.map((img) => (
          <TouchableOpacity
            key={img.id}
            onPress={() => this.handleImagePress(img)}
            style={styles.imageContainer}
          >
            <Image
              source={{ uri: img.uri }}
              style={styles.image}
            />
            <Text style={styles.imageText}>
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
            style={styles.fileItem}
          >
            <Text style={styles.fileText}>{file.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }

  render() {
    const { groupName } = this.props.route.params;
    const { selectedTab } = this.state;

    return (
      <View style={styles.container}>
        {/* Header */}
        <Text style={styles.header}>
          {groupName}
        </Text>

        {/* Tabs */}
        <View style={styles.tabs}>
          <TouchableOpacity
            onPress={() => this.setState({ selectedTab: 'images' })}
            style={styles.tab}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === 'images' && styles.tabTextActive,
              ]}
            >
              Images
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.setState({ selectedTab: 'files' })} style={styles.tab}>
            <Text
              style={[
                styles.tabText,
                selectedTab === 'files' && styles.tabTextActive,
              ]}
            >
              Files
            </Text>
          </TouchableOpacity>
        </View>

        {/* Content Section */}
        <View style={styles.content}>
          {selectedTab === 'images' ? this.renderImages() : this.renderFiles()}
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
  header: {
    fontSize: 24,
    fontWeight: 'bold' as const,
    color: Theme.colors.text,
    textAlign: 'center',
    marginBottom: 24,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tab: {
    marginRight: 20,
  },
  tabText: {
    fontSize: 20,
    color: Theme.colors.text,
  },
  tabTextActive: {
    fontWeight: '700',
    color: Theme.colors.primary,
  },
  content: {
    flex: 1,
  },
  imageContainer: {
    marginRight: 16,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 12,
  },
  imageText: {
    color: Theme.colors.text,
    textAlign: 'center',
    marginTop: 8,
  },
  fileItem: {
    padding: 16,
    backgroundColor: Theme.colors.card,
    marginBottom: 12,
    borderRadius: 12,
  },
  fileText: {
    color: Theme.colors.text,
    fontSize: 18,
  },
});
