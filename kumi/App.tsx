import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NativeModules } from 'react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Groups from './Groups';
import { MessageChat } from './MessageChat';
import ChatMediaView from './mediaview';
import FileUploader from './fileUploader';

// Start Native Backend
NativeModules.Backend.launch();

// Create Stack
const Stack = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backendMessage: "Starting backend..."
    };
  }

  componentDidMount() {
    // Give your C++ backend time to start
    setTimeout(() => {
      fetch("http://127.0.0.1:18080/")
        .then(res => res.text())
        .then(text => this.setState({ backendMessage: text }))
        .catch(err => this.setState({ backendMessage: "Error: " + err }));
    }, 500);
  }

  render() {
    const { backendMessage } = this.state;

    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* First Screen: Groups */}
          <Stack.Screen
            name="Groups"
            component={Groups}
            options={{
              headerTitle: backendMessage,  // Show backend data in header
            }}
          />

          {/* Second Screen: Chat */}
          <Stack.Screen
            name="MessageChat"
            component={MessageChat}
            options={({ route }) => ({
              title: route.params.group.name,
            })}
          />

          {/* Third Screen: Media View */}
          <Stack.Screen
            name="ChatMediaView"
            component={ChatMediaView}
            options={({ route }) => ({
              title: route.params.groupName + ' Media',
            })}
          />

          {/* Fourth Screen: File Uploader */}
          <Stack.Screen
            name="FileUploader"
            component={FileUploader}
            options={{
              title: 'Upload Files',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
