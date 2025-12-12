// File: FileUploader.js
// Class-based component for uploading images/files
// Uses Theme.js styling

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as DocumentPicker from '@react-native-documents/picker';
import { launchImageLibrary } from '@react-native-image/picker';
import { Theme } from './theme';

interface SelectedFile {
  uri: string;
  type: string;
  name: string;
  size: number;
}

interface SelectedImage {
  uri: string;
  type: string;
  fileName: string;
}

interface State {
  selectedImage: SelectedImage | null;
  selectedFile: SelectedFile | null;
}

export default class FileUploader extends Component<{}, State> {
  constructor(props: {}) {
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
        this.setState({ selectedImage: result.assets[0] as SelectedImage });
      }
    } catch (err) {
      console.error('Image picking error: ' + err);
    }
  };

  pickFile = async () => {
    try {
      const [res] = await DocumentPicker.pick({});
      this.setState({ selectedFile: res as SelectedFile });
    } catch (err) {
      if (!DocumentPicker.isCancel(err)) {
        console.error('File picking error: ' + err);
      }
    }
  };

  render() {
    const { selectedImage, selectedFile } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Upload Files
        </Text>

        {/* Image Upload Button */}
        <TouchableOpacity
          onPress={this.pickImage}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Upload Image
          </Text>
        </TouchableOpacity>

        {selectedImage && (
          <View style={styles.selectedContainer}>
            <Image
              source={{ uri: selectedImage.uri }}
              style={styles.image}
            />
            <Text style={styles.selectedText}>
              {selectedImage.fileName}
            </Text>
          </View>
        )}

        {/* File Upload Button */}
        <TouchableOpacity
          onPress={this.pickFile}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Upload File
          </Text>
        </TouchableOpacity>

        {selectedFile && (
          <View style={styles.selectedContainer}>
            <Text style={styles.selectedText}>
              {selectedFile.name}
            </Text>
            <Text style={styles.subText}>
              {selectedFile.size} bytes
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold' as const,
    color: Theme.colors.text,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: Theme.colors.primary,
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  selectedContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 12,
  },
  selectedText: {
    color: Theme.colors.text,
    marginTop: 10,
  },
  subText: {
    color: Theme.colors.subtext,
  },
});
