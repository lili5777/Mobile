/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import MyCard from './src/components/Card';
import { Artikel } from './src/pages';
import TombolMenu from './src/components/TombolMenu';
import HorizontalButtonScroll from './src/components/TombolMenu';
import Kepanitian from './src/pages/kepanitiaan';
import CardKepanitiaan from './src/components/CardKepanitiaan';


AppRegistry.registerComponent(appName, () => App);
