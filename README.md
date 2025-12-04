# GroupChat

This application uses cpp for backend and uses React-native for building UI for the android screen.

## CROW
- importing crow.h from the folder  ensures simplicity.
- uses asio.hpp file for handling http requests.
- uses websockets for communication which uses different names in crow and asio.
  - to ensure compatibiity, we link them in our command while compiling the server code.

 ### Command to compile and run the server
 ```bash
g++ main.cpp -Iinclude -std=c++17 -lws2_32 -lmswsock -o server.exe
server.exe
```

## React-Native
This application uses react-native for fronend and develops the application as an app.

The following are the commands to run the fronend to get the app in emulator or andoid device:
```bash
npm start
npx react-native run-android
```
## Android Application
This project aims at building an adnroid app.
In order to make communication possible between the react-native components and the cpp server, NDK which is part of SDK is used. 
Moreover, this project requires the following need to be downloaded before running the project:
> - Platform Tools
> - Android Studio( automatically includes Platform Tools, sdk)
> - java
> - ndk
