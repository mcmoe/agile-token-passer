Agile Apps: Token Passer
==================

Web interface providing an automatic token passer for daily stand up meetings.

## Launch the server
You will need to have Node.js installed.  
From a terminal window, launch `npm start`  
You can then open the app via a browser on port 3000.  
If you want to provide your own port, set it as an environment variable (see below).  

## Launch the server in Debug mode
You might want to get available debug info output to the command line.  
launch the app using `npm run debug` instead.

## Launch the tests
These consist of acceptance testing.
As features are requested, their behavior should be tested first.  
The current setup uses Jasmine as a suite and runner and Zombie as a headless browser stack.  
To run the tests launch `npm test`  

## Provide your own port
You might want to run the app on a different port than the default 3000.  
To do so, set the environment variable PORT to your liking.  
From a bash terminal, you can do that by typing `export PORT=1234`.  
