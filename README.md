## Prerequisites
Before you start, make sure you have the following installed:
Node.js (version 14.x or higher)
Java Development Kit (JDK) (version 8 or higher)
Android Studio (for Android emulators) or Xcode (for iOS simulators)
Appium Server (version 1.22.0 or higher)
WebdriverIO CLI

## Installation Steps

### 1. Install Node.js
Download and install Node.js from the official website.
### 2. Install Java Development Kit (JDK)
Download and install JDK from the Oracle website or use a package manager like brew for macOS:
brew install openjdk@11
### 3. Install Android Studio or Xcode
Android Studio: Download and install from the official website.
Xcode: Download and install from the Mac App Store.
### 4. Install Appium Server
Install Appium globally using npm:
npm install -g appium
### 5. Install WebdriverIO CLI
Install WebdriverIO CLI globally:
npm install -g @wdio/cli

## Clone the Repository
Clone your Appium project repository:
git clone https://github.com/sitarrashafiq/appium.git

## Install Project Dependencies
Install the required dependencies:
npm install

## Running the Tests
Start Appium Server: Ensure the Appium server is running.
appium
Run WDIO Tests: Execute the tests using WebdriverIO CLI.
npx wdio wdio.conf.js
PLATFORM=ios npm run wdio  