import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Groups from './groups';
//import { MessageChat } from './messagechat';
//import ChatMediaView from './mediaview';
//import FileUploader from './fileUploader.tsx';

// Your server IP
//const SERVER_URL = "http://192.168.1.10:18080/";   // ← change to your backend IP//

const Stack = createStackNavigator();

class App extends Component {
  // constructor(props: any) {
  //   super(props);
  //   this.state = {
  //     serverStatus: "Connecting…"   // default UI if server doesn’t respond
  //   };
  // }

  // componentDidMount() {
  //   // Try connecting to backend
  //   fetch(SERVER_URL)
  //     .then(res => res.text())
  //     .then(text => this.setState({ serverStatus: text }))
  //     .catch(() => this.setState({ serverStatus: "Server Offline" })); // fallback UI
  // }

  render() {
    //const { serverStatus } = this.state as { serverStatus: string };

    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* Home / Groups */}
          <Stack.Screen
            name="Groups"
            component={Groups}
            options={{
              headerTitle: serverStatus, // Shows server message OR fallback
            }}
          />

          {/*Chat Screen*/}
          {/*
          <Stack.Screen
            name="MessageChat"
            component={MessageChat}
            options={({ route }: any) => ({
              title: route?.params?.group?.name ?? "Chat",
            })}
          /> */}

          {/* Media View Screen */}
          {/*
          <Stack.Screen
            name="ChatMediaView"
            component={ChatMediaView}
            options={({ route }: any) => ({
              title: route?.params?.groupName ?? "Media",
            })}
          /> */}
          {/* File Uploader Screen */}
          {/*
          <Stack.Screen
            name="FileUploader"
            component={FileUploader}
            options={{
              title: "Upload Files",
            }}
          />*/}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

