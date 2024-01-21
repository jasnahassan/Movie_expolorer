This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.


### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/movie-explorer.git
   
Change to the project directory:
bash
Copy code
cd movie-explorer
Install dependencies:
bash
Copy code
npm install
API Key Configuration
To fetch movie data, you need to obtain an API key from TMDb. Follow these steps:

Visit TMDb website and create an account.
Once logged in, go to the API section and generate an API key.
Replace the placeholder YOUR_API_KEY in the api.js file with your actual API key.
Running the App
Expo Go (for testing on a physical device)

Start the Expo development server:
bash
Copy code
npm start
Open Expo Go on your mobile device and scan the QR code displayed in the terminal.
Android/iOS Emulator

Ensure you have Android Studio or Xcode installed.
Start the emulator.
Run the app:
bash
Copy code
npm run android  # for Android
or
bash
Copy code
npm run ios  # for iOS
Design Explanations

Folder Structure
api: Contains functions for interacting with the TMDb API.
components: Reusable React Native components.
screens: Different screens of the app (e.g., MovieListScreen, MovieDetailScreen).
actions and reducers: Redux-related files for state management.
styles: Stylesheets for components and screens.
MovieCard.js: A custom card component used in the FlatList to display movies.
App.js: The main component where navigation and screens are defined.
index.js: The entry point of the app.

Design Choices
Redux State Management: Utilized Redux for managing the global state, providing a scalable and efficient way to handle application data.
MovieCard Component: Created a separate MovieCard component for a modular and reusable card design within the FlatList.
Async Actions: Used Redux Thunk middleware to handle asynchronous actions, such as fetching movie data from the API.
Styling: Styled components using the React Native StyleSheet API, ensuring a clean and responsive design across diverse devices.


Enhancements
Search feature for movies.
scroll for the movie list.
