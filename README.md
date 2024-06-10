# WeatherWise (Weather Application)

A fully functional, live application with user authentication and weather information. 

**Overview of Technological choices**
- Backend : **Node.Js with Express.js**
- Database : **MongoDB**
- Frontend : **Vite + React**
- API Intergration : **OpenWeatherMap**
- Deployment :
  - Backend : Firebase Cloud Functions
  - Frontend : Vercel
 
**Features**
- User Authentication via email and password
- User Authentication via google
- Live weather details
- Daily weather forcast 
- Hourly weather forcast
- Weather Infromation based current location or user input

## Weather App - Backend

### Setup Intructions

**Prerequisites**

- Should have Node.js in your local machine.
- Should have MongoDB account.
- Should have firebase account for the deploymet

**Installation process**

- Git link for Frontend
https://github.com/Selani00/Weather-app-Frontend


- Download or Clone the repository. 
  - To download you need to unzip the folder
  - To clone the repository , go the folder where your want to clone the repo. Open the git bash and type folowings
    - git clone https://github.com/Selani00/Weather-App.git
    - cd Weather-App
- Install dependencies
   - npm i
- Start the development server
   - npm run dev


### Technological choices

Why Node.js ?
 - Node.js is the backend runtime environment in the MERN stack. For real-time application node.js is good, because it can handle multiple simultaneous connections.

Why Express.js ?
 - Express is Node.js web application framework. This makes it easier to build APIs and handle HTTP requests and responses efficiently.

Why MongoDB ?
 - MongoDB is a NoSQL database that stores data in JSON format. This will store the user details and login credentials.


Dependencies Use
- **bcryptjs** - To hash the passwords
- **cors** - This allow server to handle requests from different origins
- **dotenv** - To Load environment variables from a *.env* file into *process.env*
- **express** - To build the backend server and handle routing.
- **jsonwebtoken** - To securely transmitting information between parties as a JSON object
- **mongoose** - An ODM library for MongoDB and Node.js
- **nodemon** - To automatically restarts the Node.js server whenever file changes are detected
- **firebase-admin** - For the deployment process
- **firebase-functions** - For the deployment process


### Deployment process

- Go to firebase project that we have created for the google authentication. Enable the blaze plan.
- Login to the Firebase using CLI
- Initialize firebase, select the suitables choices which it ask. Select the firebase project which we created for this project.
- There is a folder automatically created in the root directory called functions. Go to the package.json file in it.
- Copy the *engines* and two dependencies which are *firebase-admin* and *firebase-functions* and past them in the relavent places in the original package.json file
- Install them using *npm i*
- Delete the functions folder
- Go to firebase.json and make change the *source* as root (.)
- Add the deploy scripts to the package.json (*"firebase deploy --only functions:api"*)
- Deploy the app using *npm run deploy*

  
**Website Link** - https://weather-app-frontend-three.vercel.app/



    
