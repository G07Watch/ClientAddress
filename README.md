App to read Client IP address and returnn location via an API

API utilized: https://geoip-db.com/json

After cloning to run the application, please do the following from a terminal within the application's root folder:

1) 'npm install'
  Once the backend has completed building continue with

2) 'npm run frontend-install'
  Once the frontend has completed building use

4) Create a config folder at the root level.  Inside it place a keys.js file.

5) Within the file export an object with a key of 'secretOrKey' whose value is a googleAPI key, in order for the API call to work correctly.  It should look similar in format to the following:

  module.exports = {
  secretOrKey: 'your-key-here'
  }

6) 'npm run activate'

