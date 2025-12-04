cmake_minimum_required(VERSION 3.22.1)
project(backendcpp)

set(CMAKE_CXX_STANDARD 17)

add_library(
    backendcpp
    SHARED
    main.cpp
)

# Correct Crow include path
target_include_directories(backendcpp PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/include)

# Link log library
find_library(log-lib log)
target_link_libraries(backendcpp ${log-lib})
