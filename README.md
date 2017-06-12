# Wazzapp Workshop Application
> This app is ONLY for educational purpose. It used as a studying material for React. **Slides** are available [here](https://docs.google.com/presentation/d/14L5oiWL3wnXUksByLc607F8pnTYN6cTWZI-cc5dr_g4/edit?usp=sharing).

# Getting Started
This workshop application is based on [create-react-app](https://github.com/facebookincubator/create-react-app) for client-side code and [firebase](https://firebase.google.com/) for hosting and real-time capabilities.

## Prerequisites
* `node >= 6.0`
* `npm install -g yarn`
* `npm install -g firebase-tools`

## Local development
1. `git clone https://github.com/bolshchikov-public/wazzapp`
2. `cd wazzapp`
3. `yarn install`
4. `yarn start`
5. `http://localhost:3000`

## Testing
1. `yarn test`

## Deployment 
1. Run `yarn build`. It creates a bundle of static files and puts them into `build` folder.
2. Run `firebase deploy` command. It takes the `build` folder and deploys it to firebase cloud.
3. [https://wazzapp-4b5cf.firebaseapp.com](https://wazzapp-4b5cf.firebaseapp.com)

# License
[MIT](/LICENSE).