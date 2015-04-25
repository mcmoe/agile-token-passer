Agile Apps: Token Passer
==================

Web interface providing an automatic token passer for daily stand up meetings.

## Launch the server
You will need to have Node.js installed.  
From a terminal window, launch `DEBUG=agile-token-passer:* npm start`  
You can then open the app via a browser using the provided port.  
If you want to provide your own port, set it as an environment variable.  


## Launch the tests
These consist of acceptance testing.
As features are requested, their behavior should be tested first.  
The current setup uses Jasmine as a runner and Zombie as a headless browser stack.  
To run the tests launch `npm test`
