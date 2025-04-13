7Down is a multi-platform application with both desktop and mobile versions, built using modern web and mobile technologies. It's a multiplayer game where players compete to find differences between two similar images.

Overview

7Down is an application that provides a seamless experience across different platforms. The project consists of three main components:

1. Desktop Client (Web-based)
2. Android Client
3. Server

Game Modes

1. Classic Mode

    - Standard gameplay with no time limits
    - Players compete to find all differences between two similar images
    - Real-time multiplayer support
    - Spectator mode available

2. Time-Limited Mode
    - Race against the clock to find differences
    - Players progress through multiple image sets
    - Score based on number of cards completed
    - Solo and multiplayer options

Core Gameplay

- Players are presented with two similar images
- Find and click on differences between the images
- Real-time feedback on correct/incorrect selections
- Progress tracking and scoring system
- Replay functionality to review games

Social Features

- User account system with authentication
- Friend system for multiplayer games
- Chat functionality during games
- Game history tracking
- Leaderboard system

Technologies Used

1. Desktop Client

Frontend Framework: Angular 14
- UI Framework: Angular Material
- Styling: Tailwind CSS
- State Management: RxJS
- Real-time Communication: Socket.IO
- Authentication: Firebase


2. Android Client

- Framework: Flutter
- Real-time Communication: Socket.IO
- Firebase Integration:
    - Authentication
    - Realtime Database
    - Cloud Storage
    - Cloud Messaging
-  Additional Features:
    - Local notifications
    - Image picking and processing
    - Audio playback

Server

- Backend: Node.js
- Real-time Communication: Socket.IO
- Content Filtering: Bad-words library

Features

Cross-Platform Support

- Web-based desktop application
- Android mobile application
- Responsive design across all platforms

Real-time Communication

- Socket.IO for real-time data exchange
- Firebase integration for authentication and data storage

Development Setup

Desktop Client

```bash
cd desktop-client
npm install
npm start  # For development
npm run start:electron  # For desktop version
```

Android Client

```bash
cd android-client
flutter pub get
flutter run
```

Server

```bash
cd server
npm install
npm start
```

Building for Production

Desktop Client

```bash
cd desktop-client
npm run build:electron
```

Android Client

```bash
cd android-client
flutter build apk
```

License

This project is a school project developed in a team of six people at Polytechnique Montréal.
All rights reserved to Polytechnique Montréal. This project is not intended for commercial use.

## Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Generate a new service account key:
   - Go to Project Settings > Service Accounts
   - Click "Generate New Private Key"
   - Save the downloaded JSON file
3. Rename the downloaded JSON file to `fbkey.json` and place it in `server/app/utils/`
4. The file structure should match the template in `fbkey.json.template`

Note: Never commit the actual `fbkey.json` file to the repository as it contains sensitive credentials.
