#include <crow/app.h>
#include <crow/middleware.h>

int main()
{
    crow::SimpleApp app;

    CROW_ROUTE(app, "/hello")
    ([](){
        return "Hello World!";
    });

    app.port(18080).multithreaded().run();
}
