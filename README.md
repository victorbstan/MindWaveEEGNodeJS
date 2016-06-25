# MindWave NodeJS/WebSockets Integration

Sample/Experimental NodeJS application to connect to and display live-data from [MindWave NeuroSky Headset](http://store.neurosky.com/pages/mindwave) Electroencephalogram (EEG) Device.

*Note: the application was built and tested with an older version of the headset, may or may not work with the latest.*

## Run applications

1. Make sure your device's antenna is plugged into your laptop.
2. Start the node server that coonects to the the headset receiver: `node app_server.js`.
3. Start a client side server for the `app.html` file. This can be anything that can run a static `.html` file, for example `php -S localhost:3000` from the within the project root folder should do it.
4. Access the front-end at `http://localhost:3000/app.html`, if you used the above instructions.
5. Click the *Run WebSocket* button to initialize connection to the back-end.
6. Good luck.
