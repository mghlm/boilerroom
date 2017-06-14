# Boiler Room Sets

A two-paged iOS application that showcases ten of my favorite Boiler Room sets of all time, basic information about them such as artist, date and location, and lets the user watch the set on YouTube or listen on Soundcloud.

![alt text](https://media.giphy.com/media/3oKIPAxEEX0tdccr6w/giphy.gif)


## Setup

1 - Clone this repo:

`git clone git@github.com:mghlm/boilerroom.git`

2 - Cd into directory, install dependencies and start the server
```
$ cd boilerroom
$ npm install
$ cd backend
$ node server.js
```

3 - Open a new terminal/tab, cd into boilerroom directory and run iOS-simulator

`react-native run-ios`

4 - For running tests simply run `npm test` in the project directory

## Approach taken

1. I built a basic NodeJS server that stores static data about my favorite sets in JSON format. Did not use any third party modules for this.

2. Drew out a simple diagram to visualize the structure of my app and decided on two pages to avoid a messy one-page interface.

3. Started by building a very simple app with two components that sent a request to the server and received the JSON data to store in state.

4. Added navigation and passed data along to display on the right screens.

5. Refactored, styled and tested views with Jest Snapshots.

## Technologies used

* **React Native**
* **Node**
* **Jest**
* Several thid party modules such as 'axios' for easy network requests.

## Known issues

* Failed to unit test using enzyme due to recurring error message: `Cannot find module 'react/lib/ReactComponentTreeHook' from 'ReactDebugTool.js'`. Have opened an issue after hours of trial/error and searching for solutions.

*  NavBar takes up screen space and covers for default header information on iPhone such as carrier, time and battery life.

## Improvements to be made

* Setup testing environment with Mocha, Chai, Sinon and Enzyme to unit test components.
* Create real backend API with MongoDB 
* Embed video-player
* Add WebView to avoid opening links in default browser
* Refactor further to split components up into smaller ones
* Styling i.e. fonts, navbar, back-arrow etc.
