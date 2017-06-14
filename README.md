# Boiler Room Sets

A two-paged iOS application that showcases ten of my favorite Boiler Room sets of all time, basic information about them such as artist, date and location, and lets the user watch the set on YouTube or listen on Soundcloud.

![alt text](https://media.giphy.com/media/3oKIPAxEEX0tdccr6w/giphy.gif)


## Setup

1 - Clone this repo:

`git clone git@github.com:mghlm/boilerroom.git`

2 - Cd into directory

`cd boilerroom`

3 - Install dependencies

`npm install`

4 - Cd into correct directory to start the server

`cd backend`

5 - Start server

`node server.js`

6 - Open a new terminal/tab, cd into boilerroom directory and run iOS-simulator

`react-native run-ios`

## Approach taken

1. Build a basic NodeJS server that stores static data about my favorite sets in JSON format. Did not use any third party modules for this.

2. Draw out a simple diagram to visualize the structure of my app and decide on two pages to avoid a messy interface.

3. Start by building a very simple app with two components that sends a request to the server and receives the JSON data to store in state.

4. Add navigation and pass data along to display on right places.

5. Refactor, style and test views with Jest Snapshots.

## Technologies used

* **React Native**
* **Node**
* **Jest**

## Known issues

* Failed to unit test using enzyme due to recurring error message: `Cannot find module 'react/lib/ReactComponentTreeHook' from 'ReactDebugTool.js'`. Have opened an issue after hours of trial/error and searching for solutions.

*  NavBar takes up screenspace and covers for default header information on iPhone such as carrier, time and battery life

## Improvements to be made

* Setup testing environment with Mocha, Chai, Sinon and Enzyme to unit test components.
* Embed videoplayer
* Add WebView to avoid opening links in default browser
* Refactor further to split components up to smaller ones
* Definitely styling i.e. fonts etc. 
