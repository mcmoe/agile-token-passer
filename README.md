Agile Apps: Token Passer
==================

Web interface providing an automatic token passer for daily stand up meetings.

## Launch the server
You will need to have Node.js installed.  
The app runs on a firebase backend, so you will have to provide your own instance.  
Instances are identified by their url, for example `xxx.firebaseio.com`.  
From a terminal window, set the FIREHOST environment variable to the instance prefix `export FIREHOST=xxx`.  
Then launch `npm start`.  
You can then open the app via a browser on port 3000.  
You can also provide your own port via an environment variable (see below).  

## Launch the server in Debug mode
You might want to get available debug info output to the command line.  
To do so, launch the app using `npm run debug` instead.

## Launch the tests (BDD)
These consist of acceptance testing.
As features are requested, their behavior should be tested first.  
The current setup uses Jasmine as a suite and runner and Zombie as a headless browser stack.  
For now, you must provide a firebase instance.   Use a separate instance than the one of the app.  
For example `xxx-test.firebaseio.com`. (`export FIREHOST=xxx-test`)  
To run the tests launch `npm test`.  
**TODO** - mock the firebase backend.

## Launch the tests (TDD)
**TODO**  

## Provide your own port
You might want to run the app on a different port than the default 3000.  
To do so, set the environment variable PORT to your liking.  
From a bash terminal, you can do that by typing `export PORT=1234`.  

## Deploy on Heroku ##
You can deploy the app to heroku by simply pushing the repo to your Heroku app location.  
Your app must have a FIREHOST Heroku [config var](https://devcenter.heroku.com/articles/config-vars) set up.  
A procfile has been provided to tell Heroku to launch `npm start`.  

## License
agile-token-passer is licensed under the [MIT License](LICENSE).  
