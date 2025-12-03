// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
// import {
//   SafeAreaProvider,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <SafeAreaProvider>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <AppContent />
//     </SafeAreaProvider>
//   );
// }

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();

//   return (
//     <View style={styles.container}>
//       <NewAppScreen
//         templateFileName="App.tsx"
//         safeAreaInsets={safeAreaInsets}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;

import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';

const App = () => {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://10.68.129.194:18080/")   // IMPORTANT for Android emulator
      .then(res => res.text())
      .then(text => setMessage(text))
      .catch(err => setMessage("Error: " + err));
  }, []);

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 24, textAlign: "center", marginTop: 50 }}>
        {message}
      </Text>
    </SafeAreaView>
  );
};

export default App;
