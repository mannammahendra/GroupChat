#include <jsi/jsi.h>
#include <thread>
#include "crow.h"

using namespace facebook;

// A simple C++ function that will be callable from JavaScript
double multiply(double a, double b) {
    return a * b;
}

// Your existing startServer function
void startServer() {
    std::thread([](){
        crow::SimpleApp app;

        CROW_ROUTE(app, "/")([](){
            return "Hello from Android!";
        });

        app.port(18080).multithreaded().run();
    }).detach();
}

// The JSI install function, which is called by React Native to register your native module
extern "C" __attribute__((visibility("default"))) void install(jsi::Runtime& rt) {
    // Expose the multiply function
    auto multiply_func = jsi::Function::createFromHostFunction(
        rt,
        jsi::PropNameID::forAscii(rt, "multiply"),
        2, // number of arguments
        [](jsi::Runtime& rt, const jsi::Value& this_val, const jsi::Value* args, size_t count) -> jsi::Value {
            if (count != 2) {
                jsi::detail::throwJSError(rt, "Expected 2 arguments");
            }
            double a = args[0].asNumber();
            double b = args[1].asNumber();
            return jsi::Value(multiply(a, b));
        }
    );
    rt.global().setProperty(rt, "multiply", std::move(multiply_func));

    // Expose the startServer function
    auto start_server_func = jsi::Function::createFromHostFunction(
        rt,
        jsi::PropNameID::forAscii(rt, "startServer"),
        0, // number of arguments
        [](jsi::Runtime& rt, const jsi::Value& this_val, const jsi::Value* args, size_t count) -> jsi::Value {
            startServer();
            return jsi::Value::undefined();
        }
    );
    rt.global().setProperty(rt, "startServer", std::move(start_server_func));
}
