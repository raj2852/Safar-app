import { Navigation } from "react-native-navigation";
//import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);
import Home from './App'
import Explore from './Explore'
import Contact from './Contact'

//importing all screens for states
import Kashmir from './src/kash'
import Himachal from './src/him'
import Punjab from './src/pun' 
import Delhi from "./src/del";
import Gujrat from "./src/guj"
import Maharashtra from "./src/mah";
import Karnataka from "./src/karna";
import Goa from "./src/goa";
import Kerala from "./src/ker";
import TamilNadu from "./src/tam";
import Andhra from "./src/andh";
import Rajasthan from "./src/raj";
import Telen from "./src/tel";
import Jharkhand from "./src/jh";
import Chattis from "./src/chattis";
import Orrisa from "./src/ori";
import Bihar from "./src/bi";
import Bengal from "./src/ben";
import Sikkim from "./src/si";
import Assam from "./src/as";
import Manipur from "./src/mani";
import mizonaga from "./src/mizo";
import Meghalaya from "./src/megh";
import Tripura from "./src/tri";
import up from "./src/up";
import uk from "./src/uk";
import aru from "./src/aru";

Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('Explore', () => Explore);
Navigation.registerComponent('Contact', () => Contact);
Navigation.registerComponent('Kashmir', () => Kashmir);
Navigation.registerComponent('Himachal', () => Himachal);
Navigation.registerComponent('Punjab', () => Punjab);
Navigation.registerComponent('Delhi', () => Delhi);
Navigation.registerComponent('Rajasthan', () => Rajasthan)
Navigation.registerComponent('Gujrat', () => Gujrat);
Navigation.registerComponent('Maharashtra', () => Maharashtra);
Navigation.registerComponent('Karnataka', () => Karnataka);
Navigation.registerComponent('Goa', () => Goa);
Navigation.registerComponent('Kerala', () => Kerala);
Navigation.registerComponent('TamilNadu', () => TamilNadu);
Navigation.registerComponent('Andhra', () => Andhra);
Navigation.registerComponent('Telen', () => Telen);
Navigation.registerComponent('Jharkhand', () => Jharkhand);
Navigation.registerComponent('Chattis', () => Chattis);
Navigation.registerComponent('Orrisa', () => Orrisa);
Navigation.registerComponent('Bihar', () => Bihar);
Navigation.registerComponent('Bengal', () => Bengal);
Navigation.registerComponent('Sikkim', () => Sikkim);
Navigation.registerComponent('Assam', () => Assam);
Navigation.registerComponent('Manipur', () => Manipur);
Navigation.registerComponent('mizonaga', () => mizonaga);
Navigation.registerComponent('Meghalaya', () => Meghalaya);
Navigation.registerComponent('Tripura', () => Tripura);
Navigation.registerComponent('up', () => up);
Navigation.registerComponent('uk', () => uk);
Navigation.registerComponent('aru', () => aru);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        options: {
          bottomTabs: {
            backgroundColor: '#e33745',
          },
        },
        children: [
          {
            stack: {
              options: {
                bottomTab: {
                    text: 'Home',
                    fontSize: 20,
                    textColor: '#fff',
                }
            },
              children: [
                {
                  component: {
                    name: 'Home',
                  },
                },
              ],
            },
          },
          {
            stack: {
              options: {
                bottomTab: {
                    text: 'Explore',
                    fontSize: 20,
                    textColor: '#fff',
                }
            },
              children: [
                {
                  component: {
                    name: 'Explore',
                  },
                },
              ],
            },
          },
          {
            stack: {
              options: {
                bottomTab: {
                    text: 'Contact',
                    fontSize: 20,
                    textColor: '#fff',
                }
            },
              children: [
                {
                  component: {
                    name: 'Contact',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
});
