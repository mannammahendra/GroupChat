//#include <crow/app.h>
//#include <crow/middleware.h>
#include "crow.h"
//#include "crow_all.h"

int main()
{
    crow::SimpleApp app;

    CROW_ROUTE(app, "/")
    ([](){
        return "Hello World!";
    });

    app.port(18080).multithreaded().run();
}
