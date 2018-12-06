# cordova
Cordova version of the application

# building & running
Install npm, Cordova 7.1.0, ReactJS
To run on Android:
- cordova platform add android
- yarn run build
- cordova run android

To run on iOS:
- cordova platform add ios
- open the generated XCode project in platforms, and make sure that signing configs are ok
- yarn run build
- cordova build ios --BuildFlag="-UseModernBuildSystem=0"
- cordova run ios (probably won't run the app, just installs it and then loops with an error, but the app on the device is ok)