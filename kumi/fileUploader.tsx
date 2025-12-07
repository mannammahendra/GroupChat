// File: FileUploader.js
// Class-based component for uploading images/files
// Uses Theme.js styling

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import * as DocumentPicker from 'react-native-document-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import { Theme } from './theme';

export default class FileUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null,
      selectedFile: null,
    };
  }

  pickImage = async () => {
    try {
      const result = await launchImageLibrary({ mediaType: 'photo' });
      if (!result.didCancel && result.assets && result.assets.length > 0) {
        this.setState({ selectedImage: result.assets[0] });
      }
    } catch (err) {
      alert('Image picking error: ' + err);
    }
  };

  pickFile = async () => {
    try {
      const res = await DocumentPicker.pickSingle({});
      this.setState({ selectedFile: res });
    } catch (err) {
      if (!DocumentPicker.isCancel(err)) {
        alert('File picking error: ' + err);
      }
    }
  };

  render() {
    const { selectedImage, selectedFile } = this.state;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Theme.colors.background,
          padding: 20,
        }}
      >
        <Text
          style={{
            ...Theme.text.title,
            color: Theme.colors.text,
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          Upload Files
        </Text>

        {/* Image Upload Button */}
        <TouchableOpacity
          onPress={this.pickImage}
          style={{
            backgroundColor: Theme.colors.primary,
            padding: 16,
            borderRadius: 12,
            marginBottom: 20,
          }}
        >
          <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>
            Upload Image
          </Text>
        </TouchableOpacity>

        {selectedImage && (
          <View style={{ alignItems: 'center', marginBottom: 20 }}>
            <Image
              source={{ uri: selectedImage.uri }}
              style={{ width: 150, height: 150, borderRadius: 12 }}
            />
            <Text style={{ color: Theme.colors.text, marginTop: 10 }}>
              {selectedImage.fileName}
            </Text>
          </View>
        )}

        {/* File Upload Button */}
        <TouchableOpacity
          onPress={this.pickFile}
          style={{
            backgroundColor: Theme.colors.primary,
            padding: 16,
            borderRadius: 12,
            marginBottom: 20,
          }}
        >
          <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>
            Upload File
          </Text>
        </TouchableOpacity>

        {selectedFile && (
          <View
            style={{
              padding: 16,
              backgroundColor: Theme.colors.card,
              borderRadius: 12,
            }}
          >
            <Text style={{ color: Theme.colors.text, fontSize: 18 }}>
              {selectedFile.name}
            </Text>
            <Text style={{ color: Theme.colors.subtext }}>
              {selectedFile.size} bytes
            </Text>
          </View>
        )}
      </View>
    );
  }
}