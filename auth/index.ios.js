import { AppRegistry } from 'react-native';
import App from './src/app';
//file "./src/app holds "App", it is used to tie together both ios and android app
AppRegistry.registerComponent('auth', () => App);
