## Prerequisites
Before you start, make sure you have the following installed:
1. Node.js (version 14.x or higher)
2. Java Development Kit (JDK) (version 8 or higher)
3. Android Studio (for Android emulators) or Xcode (for iOS simulators)
4. Appium Server (version 1.22.0 or higher)
5. WebdriverIO CLI

## Installation Steps

### 1. Install Node.js
Download and install Node.js from the official website.
### 2. Install Java Development Kit (JDK)
Download and install JDK from the Oracle website or use a package manager like brew for macOS<br>
brew install openjdk@11
### 3. Install Android Studio or Xcode
Android Studio: Download and install from the official website.<br>
Xcode: Download and install from the Mac App Store.
### 4. Install Appium Server
Install Appium globally using npm<br>
npm install -g appium
### 5. Install WebdriverIO CLI
Install WebdriverIO CLI globally<br>
npm install -g @wdio/cli

## Clone the Repository
Clone your Appium project repository<br>
git clone https://github.com/sitarrashafiq/appium.git

## Install Project Dependencies
Install the required dependencies <br>
npm install

## Running the Tests
### Start Appium Server <br>
appium -p 4725<br>
### Execute the tests using WebdriverIO CLI<br>
npx wdio wdio.conf.js<br>
PLATFORM=ios npm run wdio <br>
