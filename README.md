## Getting Started with Full Stack Book Inventory Management Project

### Backend

Backend project implemented using Amplify & Lambda & DynamoDB

#### AWS Amplify is a JavaScript library for frontend and mobile developers building cloud-enabled applications
AWS Amplify provides a declarative and easy-to-use interface across different categories of cloud operations. AWS Amplify goes well with any JavaScript based frontend workflow and React Native for mobile developers.

I used Amplify Studio and Amplify Cli for configuring Backend and also creating APIs and Lambda for creating API function 
and configured API to integrate with dynamoDB for CRUD operations

To get started with amplify 

first install Amplify CLI then host your initialized web app project in Amplify console and host it using git repository
then use ``` amplify pull ``` with paramaters that Amplify gives you 

then use ``` amplify add api ``` to make you an API; choose a name for it 
and also it wants you a name for your Lambda function 

Set the name and if it wanted to add a storage say yes, In order to add your dynamoDB to the project 

after all of implementation use ``` amplify push ``` to push your latest edition to the Amplify server and deploy it there

Amplify Documentation
https://docs.amplify.aws/react/start/getting-started/

### Frontend

Frontend project implemented by React JS

### Authentication

Authentication system implemented using Cognito 

And in order to sign in to interact with the project use this credentials

Email : alireza1377aj@gmail.com

Password : AppDeveloper#98

#### Scripts to run the frontend project

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
