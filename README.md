
*** You’ll need to have Node 8.10.0 or later on your local development machine

## To run this project !! 
in terminal navigate to the root of this project and run 'npm i' to install dependecies 
then run 'node server.js'

This will spin up the api on localhost:8080/
I have included a build folder so there is no need to run npm start just go to http://localhost:8080/  
and you should be able to access the app 

otherwise if you wish to run it in dev mode you can run 'node server.js' and in a diffrent terminal run 'npm start'
in that way the app will run on http://localhost:3000 and the api will proxy to http://localhost:8080/

## to test the app run 'npm test'

## enjoy !!! ##

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

