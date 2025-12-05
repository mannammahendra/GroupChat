import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NativeModules } from 'react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Groups from './Groups';
import { MessageChat } from './MessageChat';

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
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
