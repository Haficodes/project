/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Login from'./src/Login';
import App from './App';
import Flexbox from './src/Flexbox';
import Webview from './src/Webview';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Webview);
