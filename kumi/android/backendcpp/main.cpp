#include "crow.h"
//#include <crow/app.h>
#include <thread>

extern "C" void startServer() {
    std::thread([](){
        crow::SimpleApp app;

        CROW_ROUTE(app, "/")([](){
            return "Hello from Android!";
        });

        app.port(18080).multithreaded().run();
    }).detach();
}

int main() {
    startServer();
    // Keep the main thread alive
    // while (true) {
    //     std::this_thread::sleep_for(std::chrono::seconds(1));
    // }
    // return 0;
}
