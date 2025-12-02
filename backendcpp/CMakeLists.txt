# cmake_minimum_required(VERSION 3.5)
# project(backendcpp)
# 
# set(CMAKE_CXX_STANDARD 17)
# set(CROW_INSTALL OFF CACHE BOOL "Disable install target")
# add_subdirectory(include/Crow)
# 
# add_executable(server src/main.cpp)
# target_link_libraries(server PRIVATE Crow::Crow)


cmake_minimum_required(VERSION 3.10)
project(backendcpp)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Add include folder (where crow_all.h is located)
include_directories(include/crow/include)

# Add the executable
add_executable(server main.cpp)

# Link pthread (required on Linux, ignored on Windows)
if (UNIX)
    target_link_libraries(server pthread)
endif()
