// // /**
// //  * Sample React Native App
// //  * https://github.com/facebook/react-native
// //  *
// //  * @format
// //  */

// // import { NewAppScreen } from '@react-native/new-app-screen';
// // import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
// // import {
// //   SafeAreaProvider,
// //   useSafeAreaInsets,
// // } from 'react-native-safe-area-context';

// // function App() {
// //   const isDarkMode = useColorScheme() === 'dark';

// //   return (
// //     <SafeAreaProvider>
// //       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
// //       <AppContent />
// //     </SafeAreaProvider>
// //   );
// // }

// // function AppContent() {
// //   const safeAreaInsets = useSafeAreaInsets();

// //   return (
// //     <View style={styles.container}>
// //       <NewAppScreen
// //         templateFileName="App.tsx"
// //         safeAreaInsets={safeAreaInsets}
// //       />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// // });

// // export default App;

// import React, { useEffect, useState } from 'react';
// import { SafeAreaView, Text } from 'react-native';

// import { NativeModules } from 'react-native';

// NativeModules.Backend.launch();

// fetch("http://127.0.0.1:18080/")
//   .then(res => res.text())
//   .then(console.log)
//   .catch(console.error);


// const App = () => {
//   const [message, setMessage] = useState("Loading...");

//   useEffect(() => {
//     fetch("http://10.68.129.194:18080/")   // IMPORTANT for Android emulator
//       .then(res => res.text())
//       .then(text => setMessage(text))
//       .catch(err => setMessage("Error: " + err));
//   }, []);

//   return (
//     <SafeAreaView>
//       <Text style={{ fontSize: 24, textAlign: "center", marginTop: 50 }}>
//         {message}
//       </Text>
//     </SafeAreaView>
//   );
// };

// export default App;


import { Platform } from "react-native";
console.log("Platform:", Platform);


import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NativeModules } from 'react-native';

const App = () => {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    // Start the backend when app mounts
    NativeModules.Backend.launch();

    // Give the server a short delay to start (optional)
    setTimeout(() => {
      fetch("http://127.0.0.1:18080/")   // Call local backend
        .then(res => res.text())
        .then(text => setMessage(text))
        .catch(err => setMessage("Error: " + err));
    }, 500); // 500ms delay
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, textAlign: "center" }}>
        {message}
      </Text>
    </SafeAreaView>
  );
};

export default App;
