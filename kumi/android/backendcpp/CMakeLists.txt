cmake_minimum_required(VERSION 3.18)
project(backendcpp)

# If the React Native build environment is not already configured, set it up now.
if(NOT REACT_ANDROID_DIR)
    # Get the project root directory, which is two levels up from this file
    get_filename_component(PROJECT_ROOT "${CMAKE_CURRENT_SOURCE_DIR}/../.." ABSOLUTE)

    # Set the path to the react-native and ReactAndroid directories
    set(REACT_NATIVE_DIR "${PROJECT_ROOT}/node_modules/react-native")
    set(REACT_ANDROID_DIR "${REACT_NATIVE_DIR}/ReactAndroid")
endif()

# Include the React Native CMake helpers
include(${REACT_ANDROID_DIR}/cmake/react-native-for-android.cmake)

# Define our native module
add_react_native_module(
    NAME backendcpp
    SRCS
        main.cpp
    INCLUDES
        ${CMAKE_CURRENT_SOURCE_DIR}/include
)
