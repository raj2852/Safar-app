import {LogBox} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {defaultOptions, mainApp} from './navigation';
import {registerScreen} from './src/screens';

registerScreen();
defaultOptions();

Navigation.events().registerAppLaunchedListener(() => {
  mainApp();
});

LogBox.ignoreAllLogs(true);