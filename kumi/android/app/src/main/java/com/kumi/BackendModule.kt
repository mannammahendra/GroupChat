package com.kumi

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class BackendModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    companion object {
        init {
            System.loadLibrary("backendcpp")
        }
    }

    external fun startServer()  // C++ function

    override fun getName(): String {
        return "Backend"  // this becomes NativeModules.Backend
    }

    @ReactMethod
    fun launch() {
        startServer()
    }
}
